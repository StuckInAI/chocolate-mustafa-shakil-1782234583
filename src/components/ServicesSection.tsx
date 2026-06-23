import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9922a] font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b1f0e] mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-[#6b3a2a] text-lg max-w-xl mx-auto">
            From intimate gifts to grand celebrations, we have a chocolate creation for every moment
            in life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#fdf6ee] hover:bg-[#3b1f0e] rounded-3xl p-8 transition-all duration-300 cursor-default"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#3b1f0e] group-hover:text-[#e8b84b] mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#6b3a2a] group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#c9922a] hover:bg-[#3b1f0e] text-white font-bold px-8 py-4 rounded-full transition-colors duration-200"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
