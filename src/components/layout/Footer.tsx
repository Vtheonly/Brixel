// src/components/layout/Footer.tsx
import { FOOTER_LINKS } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`text-brand-light pt-12 ${className}`}>
      <div className="container mx-auto px-4">
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
              <p key={phone} className="flex items-center gap-2 mb-2">
                <Phone size={16} /> {phone}
              </p>
            ))}
            <a href={`mailto:${FOOTER_LINKS.contact.email}`} className="flex items-center gap-2 mt-4 hover:text-brand-primary transition-colors">
              <Mail size={16} /> {FOOTER_LINKS.contact.email}
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start md:items-end">
             <div className="flex gap-4">
               {FOOTER_LINKS.socials.map((social) => (
                 <a href={social.href} key={social.name} className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
                    <Image src={social.icon} alt={social.name} width={24} height={24} />
                 </a>
               ))}
            </div>
          </div>
        </div>
        
        <div className="-mt-12 text-left">
          <h1 className="text-[30vw] font-black text-white leading-none select-none">Brixel</h1>
          <p className="text-6xl font-bold text-white -mt-[2.5vw]">Agency</p>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center mt-8">
            <p className="text-sm text-gray-400">
              ©{new Date().getFullYear()} Brixel. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

