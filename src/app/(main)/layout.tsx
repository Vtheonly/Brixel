// src/app/(main)/layout.tsx
'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer className={isServicesPage ? 'bg-brand-magenta' : 'bg-brand-dark'} />
    </div>
  );
}