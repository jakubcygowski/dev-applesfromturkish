"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://applesfromturkey.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
    },
  ],
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white outline-none transition-all duration-300 hover:border-gray-300";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="pb-20">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Ready to source premium Turkish apples? Fill in the form and our
            team will contact you within 24 hours.
          </p>
        </section>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <span className="block text-xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </span>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="Your last name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="email@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClasses}
                      placeholder="+48 517 740 099"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your requirements (volume, varieties, delivery schedule...)"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-brand-green text-white font-semibold py-4 rounded-xl text-lg cursor-pointer hover:bg-brand-green-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send Inquiry \u2192"}
                    </button>
                    {status === "success" && (
                      <p className="text-center text-sm text-brand-green-dark mt-4">Thank you! We'll reply within 24 hours.</p>
                    )}
                    {status === "error" && (
                      <p className="text-center text-sm text-red-600 mt-4">Something went wrong. Please email us at contact@applesfromturkey.com.</p>
                    )}
                  </div>
                </form>

                {/* Response Guarantee - below form */}
                <div className="mt-6 bg-brand-green-light/50 rounded-2xl border border-brand-green/20 p-6">
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </span>
                    <div>
                      <span className="block font-semibold text-gray-900 mb-1">Fast Response Guarantee</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We reply to all inquiries within 24 hours. For urgent requests, call or WhatsApp us directly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Export Info - below form */}
                <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <span className="block font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    Ready for Export
                  </span>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                      GlobalGAP & SMETA certified
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                      50+ countries served
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                      Cold-chain logistics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                      Custom packaging available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info — takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="block text-lg font-bold text-gray-900 mb-4">
                  Our Office
                </span>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-500">
                        Region: Isparta, Turkey
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+48517740099"
                        className="text-gray-500 hover:text-brand-green transition-colors"
                      >
                        +48 517 740 099
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:contact@applesfromturkey.com"
                        className="text-gray-500 hover:text-brand-green transition-colors"
                      >
                        contact@applesfromturkey.com
                      </a>
                    </div>
                  </li>
                </ul>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/48517740099?text=Hello%2C%20I'm%20interested%20in%20Turkish%20apples."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="block text-lg font-bold text-gray-900 mb-4">
                  Business Hours
                </span>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Monday – Friday</span>
                    <span className="font-medium text-gray-900">
                      09:00 – 18:00
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-medium text-gray-900">
                      09:00 – 14:00
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Google Map - Isparta Region */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.96384195393!2d30.52344715!3d37.76264665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3395a1b99d6af%3A0x547c38a5e8837581!2sIsparta%2C%20Turkey!5e0!3m2!1sen!2spl!4v1713033600000!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Isparta Region, Turkey"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
