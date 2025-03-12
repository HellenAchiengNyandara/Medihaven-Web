"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          
          <h1 className="text-Black text-xl font-semibold ml-2">MediHaven Hospital</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 border-l-white">
          <Link href="/" className="text-white text-lg hover:underline">Home</Link>
          <Link href="/about" className="text-white text-lg hover:underline">About</Link>
          <Link href="/services" className="text-white text-lg hover:underline">Services</Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white text-center p-4 space-y-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
