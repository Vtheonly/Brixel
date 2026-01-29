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
    "We Help Founders & Businesses Build Brands That Attract Clients, And Earn Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clash.variable} ${montserrat.variable} font-sans font-semibold`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
