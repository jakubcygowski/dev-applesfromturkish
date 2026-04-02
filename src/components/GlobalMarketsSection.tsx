const markets = [
  { flag: "🇮🇳", name: "India", desc: "We deliver apples for India's rapidly growing retail and wholesale sectors. With demand rising year-on-year, our Gala, Red and Fuji varieties are a preferred choice among Indian importers looking for consistent quality and competitive pricing." },
  { flag: "🇮🇶", name: "Iraq", desc: "As a key trading partner, we supply apples for Iraq through established logistics routes. Our year-round availability and export-grade packaging ensure Iraqi wholesalers receive fresh, premium fruit with every shipment." },
  { flag: "🇦🇪", name: "UAE", desc: "Our premium varieties are a natural fit as apples for UAE's high-end retail and hospitality markets. We work closely with Emirates-based distributors to meet strict quality and presentation standards." },
  { flag: "🇸🇦", name: "Saudi Arabia", desc: "We provide apples for Saudi Arabia's wholesale market, meeting the Kingdom's rigorous import requirements. Our cold-chain logistics guarantee freshness from Isparta orchards to Saudi distribution centres." },
  { flag: "🇪🇬", name: "Egypt", desc: "Our expanding partnerships position us as a reliable source of apples for Egypt. We work with major Egyptian importers and distributors who value stable supply, competitive pricing and consistent caliber." },
  { flag: "🇳🇱", name: "Netherlands", desc: "The Netherlands serves as our gateway for apples for Europe. Through Rotterdam's world-class distribution network, we reach wholesalers across the EU with efficient logistics and full traceability." },
];

export default function GlobalMarketsSection() {
  return (
    <section id="markets" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-brand-green-light/30 to-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — centered */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We Export Apples from Turkey to{" "}
            India, Iraq and Global
            Markets
          </h2>
          <p className="text-gray-600 leading-relaxed mt-5 text-lg">
            Turkish apples are exported worldwide, with strong demand in India,
            Iraq, UAE and other international markets. We supply apples from
            Turkey to wholesalers and importers, offering stable quality, export
            packaging and reliable delivery.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((market) => (
            <div
              key={market.name}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {market.flag}
                </span>
                <span className="text-xl font-bold text-gray-900 group-hover:text-brand-green transition-colors duration-300">
                  {market.name}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {market.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg shadow-brand-green/20 hover:bg-brand-green transition-colors duration-300"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
