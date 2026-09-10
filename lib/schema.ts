import { siteConfig } from "./site-config";

const dayMap: Record<string, string[]> = {
  "Segunda a Domingo": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

/** "13h" -> "13:00" */
function slotToTime(slot: string) {
  const hour = slot.replace(/[^0-9]/g, "").padStart(2, "0");
  return `${hour}:00`;
}

export function buildLocalBusinessSchema() {
  const { days, slots } = siteConfig.hours;
  const openingHoursSpecification = dayMap[days]
    ? [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[days],
          opens: slotToTime(slots[0]),
          closes: slotToTime(slots[slots.length - 1]),
        },
      ]
    : [];

  return {
    "@context": "https://schema.org",
    "@type": ["NailSalon", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification,
    sameAs: [siteConfig.instagramUrl],
  };
}

export function jsonLdScriptProps(data: unknown) {
  return {
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
