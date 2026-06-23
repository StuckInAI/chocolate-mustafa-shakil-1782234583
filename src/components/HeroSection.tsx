export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3b1f0e 0%, #6b3a2a 50%, #a0522d 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full bg-white opacity-5" />
      <div className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full bg-white opacity-5" />
      <div className="absolute top-1/2 left-[-40px] w-40 h-40 rounded-full bg-[#c9922a] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span>🍫</span>
          <span>Artisan Chocolates · Handcrafted with Love</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Handcrafted Chocolates
          <br />
          <span className="text-[#e8b84b]">for Every Occasion</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          From bespoke wedding favours to luxurious corporate gifts — we create unforgettable chocolate experiences, made to order just for you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-[#c9922a] hover:bg-[#e8b84b] text-white hover:text-[#3b1f0e] font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 backdrop-blur-sm"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '12+', label: 'Years Crafting' },
            { number: '50+', label: 'Flavour Varieties' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#e8b84b]">{stat.number}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 50L0 80Z" fill="#fdf6ee" />
        </svg>
      </div>
    </section>
  );
}
