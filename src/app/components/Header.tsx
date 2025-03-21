"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-black text-lg md:text-xl font-semibold">
            <span className="block leading-tight">MediHaven</span>
            <span className="font-bold text-2xl md:text-4xl text-white">
              Hospital
            </span>
          </h1>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8 border-2 border-white px-6 py-2 rounded-lg">
          <Link href="/" className="text-white text-lg hover:underline">Home</Link>
          <Link href="/about" className="text-white text-lg hover:underline">About</Link>
          <Link href="/services" className="text-white text-lg hover:underline">Services</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white text-center p-4 space-y-4 rounded-lg mt-2">
          <Link href="/" className="block py-2 text-lg hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 text-lg hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="block py-2 text-lg hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
