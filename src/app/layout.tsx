import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";

const clash = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  display: "swap",
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brixel Agency | Building Brands That Matter",
  description:
    "A brand strategy & design agency for ambitious founders. We help you grow faster, launch smarter, and build brands people trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clash.variable} ${montserrat.variable} font-sans`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
