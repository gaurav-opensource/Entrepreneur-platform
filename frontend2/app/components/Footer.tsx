export default function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
  
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guides" className="hover:text-blue-400 transition-colors">
                  Startup Guides
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-blue-400 transition-colors">
                  Tools & Templates
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-blue-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
  
          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="/forum" className="hover:text-blue-400 transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="/mentors" className="hover:text-blue-400 transition-colors">
                  Mentorship Program
                </a>
              </li>
              <li>
                <a href="/network" className="hover:text-blue-400 transition-colors">
                  Networking
                </a>
              </li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {currentYear} Entrepreneur Platform. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Empowering startups to innovate, grow, and succeed.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }