export default function PreparationSection() {
  const features = [
    { text: "Hand-selected from orchards in Isparta — a region known for ideal apple-growing conditions", icon: "🌿" },
    { text: "Thoroughly washed and sanitized in line with international food safety regulations", icon: "💧" },
    { text: "Sorted using optical technology that checks size, color and quality grade with precision", icon: "🔬" },
    { text: "Stored in temperature-controlled cold rooms to lock in freshness for months", icon: "❄️" },
    { text: "Packed in export-grade cartons configured to meet each destination's specific requirements", icon: "📦" },
  ];

  return (
    <section id="preparation" className="relative pt-12 sm:pt-16 pb-24 sm:pb-32 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-[600px] bg-gradient-to-r from-brand-green-light to-transparent rounded-r-full opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            How we prepare Turkish apples for you?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We treat every apple like it matters — because it does. Before
              anything leaves our facility, it goes through a careful,
              multi-step process that we&apos;ve refined over years of working
              with wholesalers around the world. Our team personally oversees
              each stage, from the moment the fruit is picked to the final
              box being sealed. It&apos;s the kind of attention to detail that
              our partners count on, shipment after shipment.
            </p>
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-brand-green-light/50 transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-green-light to-white rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 pt-2 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Masonry Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg group">
                <img
                  src="/packaging-1.webp"
                  alt="Apple packing process"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg group">
                <img
                  src="/packaging-5.webp"
                  alt="Export-grade carton assembly"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg group">
                <img
                  src="/packaging-6.webp"
                  alt="Quality control inspection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg group">
                <img
                  src="/packaging-4.webp"
                  alt="Packed apples in cold storage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
