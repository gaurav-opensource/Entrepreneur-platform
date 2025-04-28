"use client";  // This is specific to Next.js and can be removed in React

import { Link } from 'react-router-dom'; // Use react-router-dom for routing in React
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar Component */}
      <main className="flex-grow">
        {/* Hero Section with Animation */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 text-center overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute w-64 h-64 bg-blue-400 rounded-full opacity-20"
              initial={{ x: '-100%', y: '-100%' }}
              animate={{ x: '100%', y: '100%' }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-indigo-400 rounded-full opacity-20"
              initial={{ x: '100%', y: '100%' }}
              animate={{ x: '-100%', y: '-100%' }}
              transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute w-48 h-48 bg-purple-400 rounded-full opacity-20"
              initial={{ x: '0%', y: '50%' }}
              animate={{ x: '50%', y: '-50%' }}
              transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>

          {/* Hero Content with Scroll Animation */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Power of Good Advice
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Unlock the potential of your startup with expert guidance, tools, and resources tailored to your success.
            </p>
            <Link
              to="/features"  // React Router uses 'to' instead of 'href'
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-blue-600">Resources</h3>
              <p className="mt-2 text-gray-600">
                Access guides and tools to build your business.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-blue-600">
                Progress Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Track your business milestones and goals.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-blue-600">
                Premium Content
              </h3>
              <p className="mt-2 text-gray-600">
                Unlock exclusive guides with Pro Access.
              </p>
            </motion.div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
}
