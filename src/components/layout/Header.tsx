// src/components/layout/Header.tsx
'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/Button";
import AnimatedLogo from "../common/AnimatedLogo";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="py-6 bg-brand-light sticky top-0 z-50 shadow-sm relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <AnimatedLogo variant="blue" className="w-24 md:w-32" />
        </Link>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="hidden md:block">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 md:hidden">
             <nav className="flex flex-col gap-6 text-2xl font-bold">
               {["Home", "Services", "Work", "Team"].map((item) => (
                 <Link 
                   key={item} 
                   href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-brand-dark hover:text-brand-primary transition-colors"
                 >
                   {item}
                 </Link>
               ))}
               <Link 
                 href="/contact" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-brand-primary"
               >
                 Contact Us
               </Link>
             </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;