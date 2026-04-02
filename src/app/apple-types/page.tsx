import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleCard from "@/components/AppleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Types — Red, Gala, Fuji, Golden & Granny Smith",
  description:
    "Explore five premium Turkish apple varieties for export: Red, Gala, Fuji, Golden Delicious, and Granny Smith. Specs, seasons, packaging — everything wholesalers need to know.",
  alternates: {
    canonical: "https://applesfromturkey.com/apple-types",
  },
};

const appleVarieties = [
  {
    name: "Red Apples",
    slug: "red-apples",
    description:
      "Classic red apples with a sweet, crisp flavor. Ideal for fresh markets and retail distribution.",
    longDescription:
      "Our Red Apples are grown in the fertile valleys of central Turkey, benefiting from the ideal continental climate with warm days and cool nights. These apples are hand-selected for uniform deep red color and consistent size, making them a top choice for supermarket shelves and wholesale distribution worldwide.",
    images: ["/red.webp"],
    color: "from-red-50 to-red-100/50",
    specs: {
      season: "September – November",
      caliber: "65mm – 80mm",
      packaging: "Carton boxes (12.5kg / 18kg)",
      shelfLife: "4–6 months in cold storage",
      taste: "Sweet, mildly tart",
    },
  },
  {
    name: "Gala",
    slug: "gala",
    description:
      "Mildly sweet with a floral aroma. One of the world's most popular varieties for everyday consumption.",
    longDescription:
      "Turkish Gala apples are renowned for their distinctive red-orange striped skin and honey-sweet flavor with hints of vanilla. Grown in the Isparta region, they offer excellent crunch and juiciness. Gala is one of the most commercially successful varieties worldwide, and our Turkish-grown Galas meet the highest international standards.",
    images: ["/gala.webp"],
    color: "from-orange-50 to-amber-100/50",
    specs: {
      season: "August – October",
      caliber: "65mm – 75mm",
      packaging: "Carton boxes (12.5kg / 18kg)",
      shelfLife: "3–5 months in cold storage",
      taste: "Sweet, floral, mild",
    },
  },
  {
    name: "Fuji",
    slug: "fuji",
    description:
      "Ultra-sweet and dense, Fuji apples offer exceptional shelf life and are perfect for export markets.",
    longDescription:
      "Fuji apples from Turkey combine the best of Japanese breeding with Turkish growing conditions. The result is an exceptionally sweet, dense-fleshed apple with a long shelf life — a key advantage for export logistics. Their bi-colored skin with a reddish blush over a yellow-green background makes them visually appealing for retail display.",
    images: ["/fuji.webp"],
    color: "from-rose-50 to-pink-100/50",
    specs: {
      season: "October – December",
      caliber: "70mm – 85mm",
      packaging: "Carton boxes (12.5kg / 18kg)",
      shelfLife: "5–7 months in cold storage",
      taste: "Very sweet, honey-like",
    },
  },
  {
    name: "Golden Delicious",
    slug: "golden",
    description:
      "Sweet and mellow with a golden skin. Versatile for fresh eating, baking, and processing.",
    longDescription:
      "Golden Delicious apples thrive in Turkey's Anatolian highlands. Their smooth, golden-yellow skin and tender, sweet flesh make them a versatile choice for fresh consumption, baking, and juice production. They are a staple variety for European and Middle Eastern markets, prized for their consistent quality and natural sweetness.",
    images: ["/golden.webp"],
    color: "from-yellow-50 to-amber-100/50",
    specs: {
      season: "September – November",
      caliber: "65mm – 80mm",
      packaging: "Carton boxes (12.5kg / 18kg)",
      shelfLife: "4–6 months in cold storage",
      taste: "Sweet, mellow, buttery",
    },
  },
  {
    name: "Granny Smith",
    slug: "granny-smith",
    description:
      "Tart, crisp, and refreshing. Prized for their bright green color and firm texture.",
    longDescription:
      "Granny Smith apples from Turkey are famous for their vibrant green skin and sharp, tangy flavor. They are the go-to variety for consumers who prefer a tart apple, and are widely used in baking and cooking. Their firm texture holds up exceptionally well during transport and storage, making them ideal for long-distance export.",
    images: ["/granny-smith.webp"],
    color: "from-green-50 to-emerald-100/50",
    specs: {
      season: "October – December",
      caliber: "65mm – 80mm",
      packaging: "Carton boxes (12.5kg / 18kg)",
      shelfLife: "5–7 months in cold storage",
      taste: "Tart, crisp, refreshing",
    },
  },
];

const SITE_URL = "https://applesfromturkey.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Apple Types",
    },
  ],
};

const productsJsonLd = appleVarieties.map((apple) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${apple.name} — Turkish Export Grade`,
  description: apple.longDescription,
  image: `${SITE_URL}${apple.images[0]}`,
  brand: {
    "@type": "Brand",
    name: "Apples from Turkey",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    url: `${SITE_URL}/contact`,
  },
}));

export default function AppleTypesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <Navbar />
      <main className="pb-16">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Breadcrumbs items={[{ label: "Apple Types" }]} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Apple Types
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            We export five premium apple varieties from Turkey. Each is
            carefully grown, sorted, and packaged to meet global wholesale
            standards.
          </p>
        </section>

        {/* Variety Sections */}
        <div className="space-y-20">
          {appleVarieties.map((apple, idx) => (
            <section
              key={apple.slug}
              id={apple.slug}
              className={idx % 2 === 1 ? "bg-gray-50 py-16" : "py-4"}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    idx % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image column */}
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <AppleCard
                      name={apple.name}
                      description={apple.description}
                      images={apple.images}
                      color={apple.color}
                    />
                  </div>

                  {/* Info column */}
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {apple.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                      {apple.longDescription}
                    </p>

                    {/* Specs Table */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                      <div className="px-5 py-3 bg-brand-green-light">
                        <span className="block text-sm font-semibold text-brand-green uppercase tracking-wider">
                          Specifications
                        </span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {Object.entries(apple.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between px-5 py-3 text-sm"
                          >
                            <span className="text-gray-500 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                            <span className="font-medium text-gray-900">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-block mt-6 bg-brand-green-dark text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300"
                    >
                      Inquire About {apple.name} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
