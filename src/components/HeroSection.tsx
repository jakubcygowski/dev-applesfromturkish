const stats = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 45.721 45.721" fill="currentColor" style={{ color: 'var(--color-brand-green)' }}>
        <path d="M31.686,11.161c-2.615-0.057-5.047,1.063-7.073,2.882c-0.344-2.371-1.271-4.273-1.271-4.273 c10.967-1.485,7.901-9.753,7.901-9.753c-7.738-0.328-9.239,4.304-9.399,7.344c-2.385-2.55-5.077-4.009-6.202-4.518 c-1.071-0.484-2.329,0.074-2.775,1.159c-0.446,1.088,0.094,2.284,1.161,2.774c1.411,0.649,5.841,2.251,7.181,7.409 c-2.058-1.907-4.548-3.024-7.231-3.024c-7.066,0-13.598,5.845-11.318,17.281c1.866,9.357,8.678,17.279,15.744,17.279 c1.842,0,3.291-0.527,4.427-1.475c1.138,0.946,2.586,1.484,4.428,1.475c7.307-0.045,13.542-7.505,15.744-17.279 C45.232,18.552,40.071,11.343,31.686,11.161z" />
      </svg>
    ),
    value: "5",
    label: "Apple Varieties",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    value: "100.000+",
    label: "Tons Exported Annually",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    value: "Certified",
    label: "Quality Assured",
  },
];

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Origin",
    desc: "TURKEY",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Global Standard",
    desc: "Certified Quality",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    title: "Export Ready",
    desc: "Custom Packaging",
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-brand-green-light/20 to-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-lime/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Hero image — absolutely positioned to right edge of viewport */}
      <div className="absolute top-0 right-0 bottom-0 hidden lg:block w-[50%] z-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <img
          src="/hero-apples.webp"
          alt="Premium Turkish apples ready for export"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade on left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent w-[40%]" />
        {/* Gradient fade on bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] pb-8">
        <div className="max-w-xl lg:min-h-[480px] flex flex-col justify-center">
          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Apples from Turkey{" "}
            <span className="text-brand-green">- Exported worldwide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            Fresh from our orchards in Isparta, Turkey — packed with care, delivered worldwide.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-6 mb-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-900">{f.title}</span>
                  <span className="block text-xs text-gray-500">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-brand-green/20 hover:bg-brand-green transition-colors duration-300"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="/apple-types"
              className="group inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-brand-green/30 hover:text-brand-green-dark transition-all duration-300"
            >
              View Apple Types
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <span className="block text-xl font-bold text-gray-900">{stat.value}</span>
                  <span className="block text-xs text-gray-500">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
