"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API route or email service
    alert("Thank you! We will get back to you shortly.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  const inputClasses =
    "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white outline-none transition-all duration-300 hover:border-gray-300";

  return (
    <section id="contact" className="relative z-20 -mt-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Gradient glow behind card */}
        <div className="absolute inset-0 -z-10 mx-auto max-w-2xl h-64 bg-gradient-to-r from-brand-green/20 via-brand-lime/20 to-brand-emerald/20 blur-3xl rounded-full" />

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 p-8 sm:p-12 border border-white/50">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="block text-3xl sm:text-4xl font-bold text-gray-900">
              Request a Quote
            </span>
            <p className="text-gray-600 mt-3 max-w-md mx-auto">
              Fill in the form and our team will contact you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* First Name */}
            <div className="group">
              <label
                htmlFor="firstName"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
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

            {/* Last Name */}
            <div className="group">
              <label
                htmlFor="lastName"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
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

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
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

            {/* Phone */}
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
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

            {/* Message — full width */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your requirements (volume, varieties, delivery schedule...)"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-brand-green-dark text-white font-semibold py-4 rounded-xl text-lg cursor-pointer shadow-lg shadow-brand-green/20 hover:bg-brand-green transition-colors duration-300"
              >
                Send Inquiry
                <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
