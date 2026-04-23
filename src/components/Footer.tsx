import Image from "next/image";
import { contactConfig, telHref, mailtoHref, whatsappUrl } from "@/config/contact";

const quickLinks = [
  { label: "Apple Types", href: "/apple-types" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Grass-like SVG wave at top */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 40 C120 20 240 60 360 35 C480 10 600 55 720 40 C840 25 960 60 1080 35 C1200 10 1320 50 1440 30 L1440 100 L0 100Z" fill="#15803d" />
          <path d="M0 55 C180 35 300 70 480 50 C660 30 780 65 960 50 C1140 35 1260 60 1440 45 L1440 100 L0 100Z" fill="#166534" />
          <path d="M0 70 C160 55 320 80 480 65 C640 50 800 75 960 65 C1120 55 1280 70 1440 60 L1440 100 L0 100Z" fill="#14532d" />
        </svg>
      </div>

      {/* Footer body */}
      <div className="bg-[#14532d] text-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div>
              <div className="mb-5">
                <Image src="/apples-from-turkey-logo.webp" alt="Apples from Turkey" width={400} height={167} className="h-20 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-white/70 mb-6">
                Premium apple export company based in Turkey. Supplying the
                world&apos;s markets with the finest Turkish apples.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <span className="block font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </span>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-white/80 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <span className="block font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Contact
              </span>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  </span>
                  <a
                    href={telHref}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {contactConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </span>
                  <a
                    href={mailtoHref}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {contactConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>
              &copy; {new Date().getFullYear()} Apples from Turkey. All rights
              reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <p>
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/eryk-witkowski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white underline underline-offset-2 transition-colors duration-300"
                >
                  Eryk Witkowski
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
