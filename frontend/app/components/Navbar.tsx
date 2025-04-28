import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;