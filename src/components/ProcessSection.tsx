export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Ispartaorchard.webp)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Good weather. Good soil. Good apples.
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          These natural conditions help apples grow with good color and taste
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Us for Export
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
