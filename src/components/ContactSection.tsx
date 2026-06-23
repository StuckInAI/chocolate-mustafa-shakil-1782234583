import { useState } from 'react';
import { contactInfo } from '@/lib/data';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #3b1f0e 0%, #6b3a2a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e8b84b] font-semibold text-sm uppercase tracking-widest">
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Ready to place an order or have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍫</div>
                <h3 className="text-2xl font-bold text-[#3b1f0e] mb-3">Message Received!</h3>
                <p className="text-[#6b3a2a]">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="mt-6 text-[#c9922a] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#3b1f0e] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#3b1f0e] focus:outline-none focus:ring-2 focus:ring-[#c9922a] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#3b1f0e] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#3b1f0e] focus:outline-none focus:ring-2 focus:ring-[#c9922a] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#3b1f0e] mb-1.5">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#3b1f0e] focus:outline-none focus:ring-2 focus:ring-[#c9922a] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#3b1f0e] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your order or enquiry…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#3b1f0e] focus:outline-none focus:ring-2 focus:ring-[#c9922a] focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#c9922a] hover:bg-[#3b1f0e] text-white font-bold py-4 rounded-xl transition-colors duration-200 text-lg"
                >
                  Send Message 🍫
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-colors duration-200 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9922a] flex items-center justify-center text-2xl flex-shrink-0">
                📞
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium">Call Us</p>
                <p className="text-white font-semibold text-lg group-hover:text-[#e8b84b] transition-colors">
                  {contactInfo.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-colors duration-200 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9922a] flex items-center justify-center text-2xl flex-shrink-0">
                ✉️
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium">Email Us</p>
                <p className="text-white font-semibold text-lg group-hover:text-[#e8b84b] transition-colors">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-green-600/90 hover:bg-green-600 border border-green-500/40 rounded-2xl p-6 transition-colors duration-200 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">
                💬
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Message on WhatsApp</p>
                <p className="text-white font-semibold text-lg">Chat with us instantly</p>
              </div>
            </a>

            {/* Social */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <p className="text-white/60 text-sm font-medium mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${contactInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <span className="text-xl">📸</span>
                  Instagram
                </a>
                <a
                  href={`https://facebook.com/${contactInfo.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
                >
                  <span className="text-xl">👍</span>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
