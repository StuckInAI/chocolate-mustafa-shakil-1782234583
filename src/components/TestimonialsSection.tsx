import { testimonials } from '@/lib/data';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-[#e8b84b]' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9922a] font-semibold text-sm uppercase tracking-widest">
            What Clients Say
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b1f0e] mt-3 mb-4">
            Reviews
          </h2>
          <p className="text-[#6b3a2a] text-lg max-w-xl mx-auto">
            Don't just take our word for it — hear from the people who've tasted the difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#fdf6ee] rounded-3xl p-8 flex flex-col gap-4 border border-[#c9922a]/10"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-[#3b1f0e] leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#c9922a]/20">
                <div className="w-10 h-10 rounded-full bg-[#3b1f0e] flex items-center justify-center text-[#e8b84b] font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <p className="text-[#3b1f0e] font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
