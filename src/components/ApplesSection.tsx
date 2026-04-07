import AppleCard from "./AppleCard";

const appleVarieties = [
  {
    name: "Red Apples",
    description:
      "Sweet, crisp flavor. Ideal for fresh markets.",
    images: ["/red-mountain.webp"],
    color: "from-red-50 to-red-100/50",
  },
  {
    name: "Gala",
    description:
      "Floral aroma, mildly sweet. Everyday favorite.",
    images: ["/gala-mountain.webp"],
    color: "from-orange-50 to-amber-100/50",
  },
  {
    name: "Fuji",
    description:
      "Ultra-sweet, dense. Great shelf life.",
    images: ["/fuji-mountain.webp"],
    color: "from-rose-50 to-pink-100/50",
  },
  {
    name: "Golden",
    description:
      "Mellow golden skin. Fresh eating and baking.",
    images: ["/golden-mountain.webp"],
    color: "from-yellow-50 to-amber-100/50",
  },
  {
    name: "Granny Smith",
    description:
      "Tart, crisp, refreshing. Firm green texture.",
    images: ["/granny-smith-mountain.webp"],
    color: "from-green-50 to-emerald-100/50",
  },
];

export default function ApplesSection() {
  return (
    <section id="apples" className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fresh from our orchards in Isparta, Turkey — packed with care, delivered worldwide
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {appleVarieties.map((apple) => (
            <AppleCard
              key={apple.name}
              name={apple.name}
              description={apple.description}
              images={apple.images}
              color={apple.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
