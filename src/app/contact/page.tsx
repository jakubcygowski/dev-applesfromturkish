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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
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
                      placeholder="+90 555 000 0000"
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
                      className="w-full bg-brand-green text-white font-semibold py-4 rounded-xl text-lg cursor-pointer hover:bg-brand-green-dark transition-colors duration-300"
                    >
                      Send Inquiry &rarr;
                    </button>
                  </div>
                </form>
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
                        XXX
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
                        href="tel:+00000000000"
                        className="text-gray-500 hover:text-brand-green transition-colors"
                      >
                        +00 000 000 000
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
                        href="mailto:hello@example.com"
                        className="text-gray-500 hover:text-brand-green transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </li>
                </ul>
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

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-100">
                <div className="text-center text-gray-400">
                  <span className="text-4xl block mb-2">🗺️</span>
                  <p className="text-sm">Map placeholder</p>
                  <p className="text-xs text-gray-300 mt-1">
                    XXX
                  </p>
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
