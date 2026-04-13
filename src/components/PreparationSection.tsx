export default function PreparationSection() {
  const steps = [
    { number: 1, title: "Collecting", description: "Handpicked at peak ripeness from Isparta's finest orchards.", image: "/zbieranie _collecting-process.webp", alt: "Hand picking apples in orchard" },
    { number: 2, title: "Sorting", description: "Advanced optical sorting checks size, color and quality.", image: "/sortingprocess.webp", alt: "Apple sorting process on conveyor" },
    { number: 3, title: "Packaging", description: "Export-grade packaging designed for safe global transport.", image: "/packagingprocess.webp", alt: "Apple packaging in boxes" },
    { number: 4, title: "Cold Storage", description: "Stored at 0-2°C to preserve quality for months.", image: "/cold_storageprocess.webp", alt: "Apples stored in cold storage" },
  ];

  return (
    <section id="preparation" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Prepare Turkish Apples
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            From orchard to box — every step is controlled to deliver consistent quality and freshness in every shipment.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {step.number}
                </span>
                <h3 className="text-gray-900 font-semibold text-base">{step.title}</h3>
              </div>
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/apple-types"
            className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-brand-green transition-colors duration-300"
          >
            Explore Our Apple Varieties
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
