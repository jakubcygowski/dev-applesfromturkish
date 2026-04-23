/**
 * Centralized contact information for the whole website.
 * Edit values here to update every page at once.
 */

export const contactConfig = {
  // Display phone (with spaces) and raw digits (for tel: and wa.me links)
  phone: "+48 517 740 099",
  phoneRaw: "48517740099",

  // Company email used across the site and API route
  email: "contact@applesfromturkey.com",

  // Short address shown in headers/cards
  address: "Isparta, Turkey",
  addressLabel: "Region: Isparta, Turkey",

  // Default WhatsApp message (plain text — will be URL-encoded automatically)
  whatsappMessage: "Hello, I'm interested in Turkish apples.",

  // Google Maps embed URL used on the contact page
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.96384195393!2d30.52344715!3d37.76264665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3395a1b99d6af%3A0x547c38a5e8837581!2sIsparta%2C%20Turkey!5e0!3m2!1sen!2spl!4v1713033600000!5m2!1sen!2spl",
} as const;

/** Returns a full wa.me link with the default (or custom) message already URL-encoded. */
export function whatsappUrl(message: string = contactConfig.whatsappMessage) {
  return `https://wa.me/${contactConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}

/** tel: link for click-to-call */
export const telHref = `tel:+${contactConfig.phoneRaw}`;

/** mailto: link */
export const mailtoHref = `mailto:${contactConfig.email}`;
