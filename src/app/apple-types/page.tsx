import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Types — Red, Gala, Fuji, Golden & Granny Smith",
  description:
    "Explore five premium Turkish apple varieties for export: Red Delicious, Gala, Fuji, Golden Delicious, and Granny Smith. Specs, seasons, packaging — everything wholesalers need to know.",
  alternates: {
    canonical: "https://applesfromturkey.com/apple-types",
  },
};

const appleVarieties = [
  {
    name: "Red Delicious",
    slug: "red-apples",
    image: "/red.webp",
    description: "Sweet, mild, and crunchy. A global favorite.",
    season: "Sep – Nov",
    size: "65–80 mm",
  },
  {
    name: "Gala",
    slug: "gala",
    image: "/gala.webp",
    description: "Honey-sweet with a floral aroma. Perfect balance.",
    season: "Aug – Oct",
    size: "65–75 mm",
  },
  {
    name: "Fuji",
    slug: "fuji",
    image: "/fuji.webp",
    description: "Extra sweet, dense, and long-lasting.",
    season: "Oct – Dec",
    size: "70–85 mm",
  },
  {
    name: "Golden Delicious",
    slug: "golden",
    image: "/golden.webp",
    description: "Mellow sweet with a smooth golden skin.",
    season: "Sep – Nov",
    size: "65–80 mm",
  },
  {
    name: "Granny Smith",
    slug: "granny-smith",
    image: "/granny-smith.webp",
    description: "Tart, crisp, and refreshing. Ideal for baking.",
    season: "Oct – Dec",
    size: "65–80 mm",
  },
];

const packagingFeatures = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    title: "Export-Grade Packaging",
    desc: "Strong carton boxes that protect fruit and maintain freshness.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Secure Handling",
    desc: "Careful loading, palletizing, and protection at every step.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "Custom Options",
    desc: "Private label, customized sizes, and branding available.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Shipping",
    desc: "By sea, road, or air to all major international markets.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m-7-9H3m18 0h-2m-1.636-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 1 0 0 8m0-8a4 4 0 1 1 0 8" />
      </svg>
    ),
    title: "Cold Chain Logistics",
    desc: "Reefer containers and temperature control for maximum freshness.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Reliable schedules and real-time tracking updates.",
  },
];

const SITE_URL = "https://applesfromturkey.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Apple Types" },
  ],
};

const productsJsonLd = appleVarieties.map((apple) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${apple.name} — Turkish Export Grade`,
  description: apple.description,
  image: `${SITE_URL}${apple.image}`,
  brand: { "@type": "Brand", name: "Apples from Turkey" },
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
      <main>
        {/* ── Hero + Apple Cards (one flowing section) ── */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-[72px] pb-12 overflow-hidden">
          {/* Hero image — extended far off-screen with mask fade */}
          <div className="absolute top-0 -right-48 bottom-0 hidden lg:block w-[65%] z-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/apple-types-hero.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in'
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Text content */}
            <div className="max-w-xl pt-8 pb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] mb-4">
                Our Apple Types
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Five premium varieties. Consistent quality. Export-ready.<br />
                Grown in Turkey, trusted by wholesalers worldwide.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-brand-green-light flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-900 uppercase">Premium Quality</span>
                    <span className="block text-[10px] text-gray-500">Carefully grown &amp; selected</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-brand-green-light flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-900 uppercase">Export Packing</span>
                    <span className="block text-[10px] text-gray-500">Custom packaging options</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-brand-green-light flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-900 uppercase">Global Supply</span>
                    <span className="block text-[10px] text-gray-500">Reliable year-round delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Variety Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
              {appleVarieties.map((apple) => (
                <div key={apple.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
                    <img src={apple.image} alt={`${apple.name} apple`} className="w-[250%] h-[250%] object-contain" />
                  </div>
                  <div className="px-4 pb-4 pt-2">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{apple.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{apple.description}</p>
                    <div className="space-y-1 border-t border-gray-100 pt-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Season</span>
                        <span className="font-semibold text-gray-700">{apple.season}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Size</span>
                        <span className="font-semibold text-gray-700">{apple.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg hover:bg-brand-green transition-colors duration-300"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-gray-600 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Download Full Catalog
              </span>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-gray-50 border-y border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-shrink-0">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Looking for a specific variety or packaging?</h2>
                <p className="text-sm text-gray-500">Our team will send you a tailored offer within 24 hours.</p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900">Quick Response</span>
                    <span className="block text-[10px] text-gray-500">Within 24 hours</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900">Custom Options</span>
                    <span className="block text-[10px] text-gray-500">Packaging &amp; labeling</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900">Reliable Partner</span>
                    <span className="block text-[10px] text-gray-500">Long-term cooperation</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-brand-green transition-colors duration-300 shadow-sm"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Packaging & Transport Solutions ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left — Text */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Packaging &amp; Transport Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
                  We provide secure, hygienic, and export-ready packaging with reliable logistics to reach your market in perfect condition.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {packagingFeatures.map((f) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        {f.icon}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-gray-900">{f.title}</span>
                        <span className="block text-xs text-gray-500 leading-relaxed">{f.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-green-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg hover:bg-brand-green transition-colors duration-300"
                >
                  Learn More About Our Logistics
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              {/* Right — Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <img src="/packaging-2.webp" alt="Export packaging" className="w-full h-48 object-cover rounded-xl" />
                <img src="/packaging-3.webp" alt="Palletizing" className="w-full h-48 object-cover rounded-xl" />
                <img src="/packaging-4.webp" alt="Cold storage" className="w-full h-48 object-cover rounded-xl" />
                <img src="/packaging-5.webp" alt="Shipping" className="w-full h-48 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom Trust Bar ── */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-4 max-w-lg">
                <div className="w-12 h-12 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  From our orchards in Turkey to your warehouse — we handle every detail. Freshness, safety, and reliability you can count on.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-900">100%</span>
                  <span className="block text-xs text-gray-500">Turkey Origin</span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-900">Cold Chain</span>
                  <span className="block text-xs text-gray-500">Protected</span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-900">Worldwide</span>
                  <span className="block text-xs text-gray-500">Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
