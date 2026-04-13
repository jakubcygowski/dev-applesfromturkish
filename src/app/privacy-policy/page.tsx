import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Apples from Turkey. Learn how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://applesfromturkey.com/privacy-policy",
  },
};

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
      name: "Privacy Policy",
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-gray-900 prose-a:text-brand-green">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: March 31, 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            Apples from Turkey (&quot;Company&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), headquartered at XXX, is committed to protecting the
            privacy of our business partners, clients, and website visitors. This
            Privacy Policy explains how we collect, use, store, and share your
            personal data when you interact with our website at
            applesfromturkish.com and our services.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> Full name, company name,
              email address, and phone number — provided through our contact and
              quote request forms.
            </li>
            <li>
              <strong>Business information:</strong> Details about your import
              requirements, order volumes, preferred apple varieties, and
              delivery schedules as shared in your inquiry messages.
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type,
              operating system, referring URL, pages visited, and timestamps —
              collected automatically via server logs and analytics tools.
            </li>
            <li>
              <strong>Cookie data:</strong> Information stored through cookies
              and similar technologies as described in Section 7.
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We process your personal data for the following purposes:</p>
          <ul>
            <li>
              Responding to your quote requests and business inquiries within 24
              hours.
            </li>
            <li>
              Communicating about our apple export products, pricing, and
              logistics.
            </li>
            <li>
              Managing ongoing B2B relationships and fulfilling export orders.
            </li>
            <li>
              Improving our website, services, and user experience through
              analytics.
            </li>
            <li>
              Complying with legal obligations, including Turkish export
              regulations and tax requirements.
            </li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process your personal data based on the following legal grounds
            under Turkish Law No. 6698 on the Protection of Personal Data
            (KVKK) and, where applicable, the EU General Data Protection
            Regulation (GDPR):
          </p>
          <ul>
            <li>
              <strong>Contractual necessity:</strong> Processing required to
              respond to your inquiries and fulfill export agreements.
            </li>
            <li>
              <strong>Legitimate interest:</strong> Improving our services and
              maintaining business relationships.
            </li>
            <li>
              <strong>Consent:</strong> Where you have explicitly opted in, such
              as for marketing communications.
            </li>
            <li>
              <strong>Legal obligation:</strong> Compliance with Turkish trade,
              customs, and tax regulations.
            </li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share your information
            with:
          </p>
          <ul>
            <li>
              <strong>Logistics partners:</strong> Shipping and freight companies
              involved in delivering your orders.
            </li>
            <li>
              <strong>Service providers:</strong> Hosting, email, and analytics
              providers who process data on our behalf under strict
              confidentiality agreements.
            </li>
            <li>
              <strong>Legal authorities:</strong> When required by Turkish law,
              court orders, or regulatory obligations.
            </li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the
            purposes outlined in this policy. Contact form submissions are stored
            for up to 3 years. Business transaction records are retained for 10
            years in compliance with Turkish commercial law. You may request
            earlier deletion at any time.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. These
            include:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors
              use our website so we can improve it.
            </li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings. 
            Disabling cookies may affect some website functionality.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Under KVKK and applicable data protection laws, you have the right
            to:
          </p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion or anonymization of your data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>
              Withdraw consent at any time (where processing is based on
              consent).
            </li>
            <li>Request data portability in a structured, common format.</li>
            <li>
              Lodge a complaint with the Turkish Personal Data Protection
              Authority (KVKK Board).
            </li>
          </ul>

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data against unauthorized access,
            loss, alteration, or disclosure. These measures include SSL/TLS
            encryption for data in transit, secure server infrastructure, and
            access controls limiting data access to authorized personnel only.
          </p>

          <h2>10. International Transfers</h2>
          <p>
            As an international apple export company, we may transfer your data
            to business partners and logistics providers in countries outside of
            Turkey. Such transfers are conducted with appropriate safeguards,
            including standard contractual clauses and adequacy decisions where
            available.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated &quot;Last updated&quot; date.
            We encourage you to review this policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your data protection rights, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@example.com">
                hello@example.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+48517740099">+48 517 740 099</a>
            </li>
            <li>
              <strong>Address:</strong> XXX
            </li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
