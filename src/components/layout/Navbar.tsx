// src/components/layout/Navbar.tsx
'use client';

import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-medium text-brand-dark hover:text-brand-primary transition-colors",
            {
              "text-brand-primary font-bold": pathname === link.href,
            }
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;