const packagingOptions = [
  {
    image: "/woodneboxpackagin.webp",
    title: "13 kg Wooden Box",
    description: "Durable wooden crate for premium retail display. Excellent ventilation keeps apples fresh during transport.",
  },
  {
    image: "/18kgpackagingna-applestypes.webp",
    title: "18 kg Carton Bushel",
    description: "Large-capacity carton perfect for bulk wholesale orders and long-distance sea shipments.",
  },
  {
    image: "/13kgpackaging-main.webp",
    title: "13 kg Carton",
    description: "Standard export carton with dividers. Ideal for supermarkets and standard retail distribution.",
  },
];

export default function PackagingSection() {
  return (
    <section id="packaging" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Packaging Options
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We offer a variety of packaging solutions to meet your market and logistics needs.
          </p>
        </div>

        {/* Packaging Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagingOptions.map((option, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Need custom packaging or bulk pricing?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-brand-green transition-colors duration-300"
          >
            Get a Custom Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
