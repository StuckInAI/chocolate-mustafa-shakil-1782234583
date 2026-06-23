export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}
