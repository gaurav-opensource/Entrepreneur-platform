import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-100 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Entrepreneur Platform</h1>
          <p className="text-lg mb-6">Start, grow, and monetize your business with our tools and resources.</p>
          <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded">
            Get Started
          </Link>
        </section>
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="p-4 bg-white shadow">
              <h3 className="text-xl font-medium">Resources</h3>
              <p>Access guides and tools to build your business.</p>
            </div>
            <div className="p-4 bg-white shadow">
              <h3 className="text-xl font-medium">Progress Tracking</h3>
              <p>Track your business milestones and goals.</p>
            </div>
            <div className="p-4 bg-white shadow">
              <h3 className="text-xl font-medium">Premium Content</h3>
              <p>Unlock exclusive guides with Pro Access.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}