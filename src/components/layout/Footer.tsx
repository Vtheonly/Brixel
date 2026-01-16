// src/components/layout/Footer.tsx
'use client'

import { FOOTER_LINKS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedLogo from "../common/AnimatedLogo";

// Social Media Icons (SVGs)
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  ),
  Tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.74-1.66.5-.93.71-2.06.66-3.14-.05-5.32-.01-10.63-.01-15.96h-1.09z" />
    </svg>
  ),
};

const Footer = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  
  // Only specific pages use blue logo, others use white
  const isBlueLogo = pathname === '/fff';
  const logoVariant = isBlueLogo ? 'blue' : 'white';

  return (
    <footer className={`w-full text-brand-light pt-12 overflow-hidden bg-[#062352] ${className}`}>
      <div className="container mx-auto px-4 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <ul>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label} className="mb-2">
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-gray-400">Phone:</h3>
            {FOOTER_LINKS.contact.phones.map((phone) => (
              <a 
                key={phone} 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 mb-2 hover:text-brand-primary transition-colors group"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-pink-400 group-hover:text-brand-primary transition-colors"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {phone}
              </a>
            ))}
            <a 
              href={`mailto:${FOOTER_LINKS.contact.email}`} 
              className="flex items-center gap-3 mt-4 hover:text-brand-primary transition-colors group"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-pink-400 group-hover:text-brand-primary transition-colors"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {FOOTER_LINKS.contact.email}
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start md:items-end">
             <div className="flex gap-4">
               {FOOTER_LINKS.socials.map((social) => (
                 <a 
                   href={social.href} 
                   key={social.name} 
                   className="hover:opacity-75 text-white hover:text-brand-primary transition-colors" 
                   target="_blank" 
                   rel="noopener noreferrer"
                 >
                    {/* Render inline SVG based on name, fallback if not found */}
                    {SOCIAL_ICONS[social.name] || <span>{social.name}</span>}
                 </a>
               ))}
            </div>
          </div>
        </div>
      </div>
        
      {/* LOGO SECTION - FULL WIDTH */}
      <div className="w-full flex justify-center">
        <AnimatedLogo 
          variant={logoVariant} 
          className="w-[90%] max-w-[1800px]" 
        />
      </div>

      <div className="border-t border-gray-700 pt-8 pb-8 text-center mt-8">
          <p className="text-sm text-gray-400">
            ©{new Date().getFullYear()} Brixel. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;