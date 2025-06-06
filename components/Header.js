import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b shadow-sm bg-cyan-700 text-white py-8 px-6">
      <Link href="/" className="text-xl font-bold text-white">NextCart</Link>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="border rounded px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-6">
        {/* Clickable User */}
        <Link href="/register" className="flex items-center gap-2 text-sm hover:text-blue-700">
          <User className="w-5 h-5" />
          <span>Register/Login</span>
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative flex items-center gap-2 hover:text-blue-700">
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1">
            0
          </span>
        </Link>
      </div>
    </header>
  );
}


