// src/types/index.ts
export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
  illustration: string; // Placeholder for illustration component/path
}

export interface Project {
  id: string;
  title: string;
  partnerType: string;
  imageUrl: string;
}