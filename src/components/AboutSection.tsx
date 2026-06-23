export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#c9922a]/20 z-0" />
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
              alt="Chocolate Hub kitchen"
              className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-xl"
            />
            {/* Floating badge */}
            <div className="absolute z-20 -bottom-6 -right-6 bg-[#3b1f0e] text-white px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-3xl font-extrabold text-[#e8b84b]">12+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[#c9922a] font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b1f0e] mt-3 mb-6 leading-tight">
              Passion Poured Into
              <br />
              Every Piece
            </h2>
            <p className="text-[#6b3a2a] text-lg leading-relaxed mb-5">
              Chocolate Hub was born from a deep love of fine chocolate and a desire to share that joy
              with the world. Founded over a decade ago, we have grown from a small kitchen passion
              project into a beloved artisan chocolatier trusted by hundreds of families, businesses,
              and couples across the country.
            </p>
            <p className="text-[#6b3a2a] text-lg leading-relaxed mb-8">
              Every piece we craft is made by hand using premium cacao and the finest natural
              ingredients. No shortcuts, no artificial fillers — just pure, indulgent chocolate the
              way it was meant to be.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Hand-crafted', 'Premium Ingredients', 'Made to Order', 'Delivered Fresh'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-[#3b1f0e] text-white text-sm font-medium px-4 py-2 rounded-full"
                  >
                    ✓ {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
