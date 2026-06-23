import { galleryItems } from '@/lib/data';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9922a] font-semibold text-sm uppercase tracking-widest">
            Our Creations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b1f0e] mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-[#6b3a2a] text-lg max-w-xl mx-auto">
            A glimpse into our world of handcrafted chocolate artistry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3b1f0e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
