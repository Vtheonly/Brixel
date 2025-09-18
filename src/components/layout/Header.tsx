// src/components/layout/Header.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="py-6 bg-brand-light sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/layers_/image 7.png" alt="Brixel Agency Logo" width={100} height={40} className="w-24 md:w-32"/>
        </Link>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="hidden md:block">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
        {/* Add a Mobile Menu Button here if needed */}
      </div>
    </header>
  );
};

export default Header;