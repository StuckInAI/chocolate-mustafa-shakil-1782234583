import type { NavLink, Service, GalleryItem, Testimonial, ContactInfo } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    icon: '🎁',
    title: 'Custom Chocolate Boxes',
    description:
      'Beautifully curated chocolate boxes tailored to your personal taste and style. Perfect for any occasion.',
  },
  {
    id: 2,
    icon: '💍',
    title: 'Wedding Favours',
    description:
      'Elegant handcrafted chocolate favours that leave a lasting impression on your special day.',
  },
  {
    id: 3,
    icon: '🏢',
    title: 'Corporate Gifts',
    description:
      'Premium chocolate gift sets for clients, employees, and partners — a sophisticated way to say thank you.',
  },
  {
    id: 4,
    icon: '🎂',
    title: 'Birthday & Celebration',
    description:
      'Make every celebration sweeter with our bespoke chocolate creations for birthdays and milestones.',
  },
  {
    id: 5,
    icon: '🍫',
    title: 'Assorted Truffles',
    description:
      'Hand-rolled artisan truffles in a variety of indulgent flavours — an everyday luxury.',
  },
  {
    id: 6,
    icon: '🌹',
    title: 'Valentine & Gifting',
    description:
      'Romantic chocolate hampers and special edition gift sets for the people who matter most.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80',
    alt: 'Assorted chocolate truffles',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1548907040-4bea42a1b1c4?w=400&q=80',
    alt: 'Chocolate gift box',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80',
    alt: 'Dark chocolate bars',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80',
    alt: 'Luxury chocolate box',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1599599811072-c3b393f37f2f?w=400&q=80',
    alt: 'Chocolate bonbons',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1543158180-2a3862f79f28?w=400&q=80',
    alt: 'Melting chocolate',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400&q=80',
    alt: 'Wedding chocolate favours',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&q=80',
    alt: 'Artisan chocolates',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    quote:
      'The wedding favours were absolutely stunning! Every guest was raving about them. Highly recommend Chocolate Hub!',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    quote:
      'Ordered corporate gift boxes for our entire team. The presentation was immaculate and the chocolate was divine.',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    quote:
      'The custom birthday box made my mum cry happy tears. So thoughtful, so delicious. Will order again!',
  },
  {
    id: 4,
    name: 'Mark & Lisa',
    rating: 5,
    quote:
      'We used Chocolate Hub for our anniversary and the truffles were extraordinary. Worth every penny.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+44 7700 900123',
  email: 'hello@chocolatehub.co.uk',
  whatsapp: '447700900123',
  instagram: 'chocolatehub',
  facebook: 'chocolatehub',
};
