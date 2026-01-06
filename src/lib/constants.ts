// src/lib/constants.ts
import { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/team", label: "Team" },
];

export const FOOTER_LINKS = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blogs", label: "Blogs" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact Us" },
  ],
  contact: {
    phones: ["+213 795 48 10 55"],
    email: "contact@brixel.agency",
  },
  socials: [
    { name: "Linkedin", href: "#", icon: "/images/icons/linkedin.svg" },
    { name: "Instagram", href: "#", icon: "/images/icons/instagram.svg" },
    { name: "Facebook", href: "#", icon: "/images/icons/facebook.svg" },
    { name: "Tiktok", href: "#", icon: "/images/icons/tiktok.svg" },
  ],
};