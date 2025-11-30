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
  illustration: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

// Updated Project Interface
export interface Project {
  id: string;
  title: string;
  partnerType: string; // e.g. "A co-working space"
  thumbnailUrl: string; // The image shown on the main work page
  
  // New fields for the detailed page
  heading: string; // e.g. "Artech space, the place where artists are made"
  description: string; // The intro text
  backgroundColor: string; // e.g. "#0a0a23" or "#ffffff"
  textColor: string; // To ensure text is visible on dark/light backgrounds
  challenge?: string;
  galleryImages: string[]; // Array of image paths for the case study body
}