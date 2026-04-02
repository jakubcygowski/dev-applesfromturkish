const steps = [
  {
    number: 1,
    title: "Collecting Apples",
    icon: "/zbieranie-jablek.svg",
    description:
      "Handpicked at peak ripeness from Turkey's finest orchards in the Isparta region.",
  },
  {
    number: 2,
    title: "Sorting",
    icon: "/sortowanie-jablek.svg",
    description:
      "Advanced optical sorting ensures every apple meets strict size, color, and quality standards.",
  },
  {
    number: 3,
    title: "Packaging",
    icon: "/pakowanie-jablek.svg",
    description:
      "Export-grade packaging with cold chain logistics to preserve freshness from our facility to your warehouse.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            From Orchard to Your Market
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 hover:-translate-y-1">
              {/* Large SVG as background illustration */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-40 h-40 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500">
                <img src={step.icon} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative p-8 pr-20">
                {/* Step Number Badge */}
                <span className="inline-flex items-center justify-center w-10 h-10 bg-brand-green-dark rounded-full text-white text-base font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </span>

                <span className="block text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
