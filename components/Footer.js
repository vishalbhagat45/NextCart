import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <ul>
            <li><a href="#" className="hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Electronics</a></li>
            <li><a href="#" className="hover:underline">Clothing</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-5 h-5" /></a>
            <a href="#"><Twitter className="w-5 h-5" /></a>
            <a href="#"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} NextCart Store
      </div>
    </footer>
  );
}

