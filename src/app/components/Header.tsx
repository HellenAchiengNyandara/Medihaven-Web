"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 max-w-6xl mx-auto">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Title Section */}
        <div className="flex items-center ml-15">
          <h1 className="text-black text-xl font-semibold ml-4 p-2">
            MediHaven <br />
            <span className="font-bold text-4xl text-white ml-6">Hospital</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 border-2 border-white px-6 py-2 rounded-lg">
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
        <div className="md:hidden bg-blue-600 text-white text-center p-4 space-y-3 rounded-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
