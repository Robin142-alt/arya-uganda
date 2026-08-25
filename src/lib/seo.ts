import { organizationData } from "@/data/organization";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": organizationData.name,
    "alternateName": organizationData.acronym,
    "description": organizationData.vision,
    "url": "https://arya-uganda.org",
    "logo": "https://arya-uganda.org/images/logo.png",
    "foundingDate": "2002",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organizationData.location.address,
      "addressLocality": organizationData.location.town,
      "addressRegion": organizationData.location.subRegion,
      "postalCode": "P.O. Box 345",
      "addressCountry": "UG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": organizationData.contact.officialPhones[0],
      "contactType": "general inquiries",
      "email": organizationData.contact.generalEmail,
      "areaServed": "UG",
      "availableLanguage": ["English", "Acholi", "Luo"]
    },
    "sameAs": [
      organizationData.social.twitter,
      "https://yplusglobal.org",
      "https://charter4change.org"
    ].filter(Boolean)
  };
}
