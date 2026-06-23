---
status: implemented
title: Chocolate Hub Business Website
---

## Goal
Build a clean, professional single-page business website for "Chocolate Hub" with a hero banner, about section, services, gallery, testimonials, and a contact section with a form, phone, email, WhatsApp, and social media links.

---

## Steps

1. **Set up the project foundation**
   - Ensure `/app/src/styles/global.css` starts with `@import "tailwindcss";` and defines a warm chocolate-inspired colour palette using Tailwind v4 CSS custom properties (deep brown, cream, gold accent).
   - Ensure `/app/src/main.tsx` imports the global CSS file once.
   - Expected outcome: Base styles and colour tokens are available across the entire app.

2. **Create shared type definitions**
   - Create `/app/src/types/index.ts` with types for: `NavLink`, `Service`, `GalleryItem`, `Testimonial`, and `ContactInfo`.
   - Expected outcome: All data shapes are typed and reusable across components.

3. **Create static data / content file**
   - Create `/app/src/lib/data.ts` containing placeholder content for: navigation links, services (e.g. custom chocolate boxes, wedding favours, corporate gifts), gallery items (placeholder image URLs), testimonials (name, quote, star rating), and contact info (phone, email, WhatsApp number, social media handles for Instagram, Facebook).
   - Expected outcome: All site content lives in one place and is easy to update.

4. **Build the Navbar component**
   - Create `/app/src/components/Navbar.tsx` with the Chocolate Hub logo/name on the left and navigation links (Home, About, Services, Gallery, Testimonials, Contact) on the right.
   - Navbar should be sticky at the top, with a clean white/cream background and a subtle shadow.
   - Links should smooth-scroll to their respective sections using anchor IDs.
   - Expected outcome: A sticky top navigation bar that lets users jump to any section.

5. **Build the Hero section**
   - Create `/app/src/components/HeroSection.tsx` with a full-width banner featuring a rich chocolate-toned background, a bold headline (e.g. "Handcrafted Chocolates for Every Occasion"), a short tagline, and a prominent "Get in Touch" button that scrolls to the contact section.
   - Expected outcome: An eye-catching first impression that immediately communicates the brand and drives visitors toward contact.

6. **Build the About section**
   - Create `/app/src/components/AboutSection.tsx` with a two-column layout: a placeholder image on one side and a short brand story paragraph with a warm, professional tone on the other.
   - Section should have the ID `about` for anchor navigation.
   - Expected outcome: Visitors can read about the business.

7. **Build the Services section**
   - Create `/app/src/components/ServicesSection.tsx` displaying service cards in a responsive grid (1 column on mobile, 3 on desktop), each card showing an icon, service name, and short description. Data sourced from `/app/src/lib/data.ts`.
   - Section should have the ID `services`.
   - Expected outcome: Visitors can clearly see what Chocolate Hub offers.

8. **Build the Gallery section**
   - Create `/app/src/components/GallerySection.tsx` displaying a responsive image grid (2 columns on mobile, 4 on desktop) using placeholder chocolate product images.
   - Section should have the ID `gallery`.
   - Expected outcome: A visual showcase of products.

9. **Build the Testimonials section**
   - Create `/app/src/components/TestimonialsSection.tsx` displaying review cards in a responsive grid, each showing the customer name, star rating (rendered as star icons), and their quote. Data sourced from `/app/src/lib/data.ts`.
   - Section should have the ID `testimonials`.
   - Expected outcome: Social proof is visible to potential customers.

10. **Build the Contact section**
    - Create `/app/src/components/ContactSection.tsx` with the ID `contact` containing:
      - A contact form with fields: Name, Email, Phone (optional), Message, and a Submit button.
      - A contact details panel alongside the form showing: phone number (with a phone icon), email address (with an email icon), a WhatsApp button/link (opens WhatsApp chat), and social media icon links for Instagram and Facebook.
    - Form submission should show a simple success message (no backend needed — client-side only).
    - Expected outcome: Customers can fill in a form or directly call/message/email the business.

11. **Build the Footer component**
    - Create `/app/src/components/Footer.tsx` with the business name, a short copyright line, and quick links to all sections.
    - Expected outcome: A clean closing section for the page.

12. **Assemble the full page**
    - Update `/app/src/pages/Home.tsx` (create if it doesn't exist) to compose all sections in order: Navbar, HeroSection, AboutSection, ServicesSection, GallerySection, TestimonialsSection, ContactSection, Footer.
    - Update `/app/src/App.tsx` to render the Home page.
    - Expected outcome: The full single-page website is visible and all sections flow correctly from top to bottom.
