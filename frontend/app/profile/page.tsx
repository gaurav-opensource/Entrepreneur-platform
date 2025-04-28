"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import api from '../utils/api';
import DOMPurify from 'dompurify';
import Link from 'next/link';

interface UserData {
  name: string;
  email: string;
  role: string;
}

const updateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').optional().or(z.literal('')),
});

type UpdateFormData = z.infer<typeof updateSchema>;

export default function Profile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
    reset,
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsLoggedIn(false);
          setLoading(false);
          return;
        }

        const response = await api.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Security-Policy': "default-src 'self'",
          },
        });

        const sanitizedUser = {
          name: DOMPurify.sanitize(response.data.name),
          email: DOMPurify.sanitize(response.data.email),
          role: DOMPurify.sanitize(response.data.role),
        };

        setUser(sanitizedUser);
        setIsLoggedIn(true);
        reset({
          name: sanitizedUser.name,
          email: sanitizedUser.email,
          password: '',
        });
        setError(null);
      } catch (err) {
        const axiosError = err as AxiosError<{ error?: string }>;
        setError(axiosError.response?.data?.error || 'Failed to load profile. Please try again.');
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [reset]);

  const onSubmit = async (data: UpdateFormData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to update your profile');
        return;
      }

      const updateData = {
        name: data.name,
        email: data.email,
        ...(data.password && { password: data.password }),
      };

      const response = await api.put('/api/users/profile', updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Security-Policy': "default-src 'self'",
        },
      });

      const sanitizedUser = {
        name: DOMPurify.sanitize(response.data.name),
        email: DOMPurify.sanitize(response.data.email),
        role: DOMPurify.sanitize(response.data.role),
      };

      setUser(sanitizedUser);
      setSuccess('Profile updated successfully!');
      setError(null);
      reset({ ...sanitizedUser, password: '' });
    } catch (err) {
      const axiosError = err as AxiosError<{ error?: string }>;
      setError(axiosError.response?.data?.error || 'Failed to update profile. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-900">Your Profile</h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              {isLoggedIn ? 'View and update your account details below.' : 'Please log in to view your profile.'}
            </p>
          </div>

          {loading && (
            <p className="text-center text-sm text-gray-600">Loading profile...</p>
          )}

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          {success && <p className="text-sm text-green-600 text-center">{success}</p>}

          {!isLoggedIn && !loading && (
            <div className="text-center">
              <Link
                href="/login"
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log In
              </Link>
            </div>
          )}

          {user && isLoggedIn && !loading && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="John Doe"
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="you@example.com"
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  New Password (leave blank to keep current)
                </label>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="••••••"
                />
                {formErrors.password && <p className="mt-1 text-sm text-red-600">{formErrors.password.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Updating...' : 'Update Profile'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}