const certifications = [
  {
    name: "ISO 22000",
    subtitle: "Food Safety Management",
    description: "International standard for food safety management systems across the supply chain.",
    badge: (
      <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center bg-white">
        <span className="text-[10px] font-bold text-blue-600 tracking-wider">ISO</span>
        <span className="text-lg font-extrabold text-blue-600 leading-none">22000</span>
        <span className="text-[8px] text-blue-500 font-semibold">CERTIFIED</span>
      </div>
    ),
  },
  {
    name: "HACCP",
    subtitle: "Hazard Analysis & Critical Control",
    description: "Systematic approach to food safety, identifying and controlling biological, chemical, and physical hazards.",
    badge: (
      <div className="w-24 h-24 rounded-full border-4 border-green-700 flex flex-col items-center justify-center bg-white">
        <span className="text-base font-extrabold text-green-700 leading-none tracking-wide">HACCP</span>
        <div className="w-8 h-0.5 bg-green-700 my-1" />
        <span className="text-[8px] text-green-600 font-semibold">CERTIFIED</span>
      </div>
    ),
  },
  {
    name: "SMETA",
    subtitle: "Sedex Ethical Trade Audit",
    description: "World's leading ethical trade audit, covering labor standards, health & safety, and environment.",
    badge: (
      <div className="w-24 h-24 rounded-full border-4 border-orange-600 flex flex-col items-center justify-center bg-white">
        <span className="text-base font-extrabold text-orange-600 leading-none tracking-wide">SMETA</span>
        <div className="w-8 h-0.5 bg-orange-600 my-1" />
        <span className="text-[8px] text-orange-500 font-semibold">VERIFIED</span>
      </div>
    ),
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Certified Quality You Can Trust
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Our operations meet the highest international standards for food safety, quality management, and ethical trade.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 text-center"
            >
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {cert.badge}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-sm font-semibold text-brand-green mb-3">{cert.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
