export interface ContactConfig {
  address: {
    line1: string;
    line2: string;
    landmark: string;
    box: string;
    town: string;
    region: string;
    country: string;
  };
  email: {
    primary: string;
    support: string;
  };
  phones: {
    label: string;
    number: string;
    isPrimary?: boolean;
    isWhatsApp?: boolean;
  }[];
  whatsApp: {
    enabled: boolean;
    number: string; // Clean numeric without '+'
    displayNumber: string;
    message: string;
  };
  officeHours: {
    weekdays: string;
    weekends: string;
  };
  areaOfInterests: string[];
}

export const contactConfig: ContactConfig = {
  address: {
    line1: "Bwona Gweno Road",
    line2: "Central Division, Kitgum Municipality",
    landmark: "Opposite Kitgum District Council Hall",
    box: "P.O. Box 345, Kitgum, Uganda",
    town: "Kitgum",
    region: "Acholi Sub-Region, Northern Uganda",
    country: "Uganda",
  },
  email: {
    primary: "acoli_ren@yahoo.com",
    support: "aryakitgum2003@gmail.com",
  },
  phones: [
    { label: "Official Telephone", number: "+256-782-874812", isPrimary: true },
    { label: "WhatsApp / Mobile Hotline", number: "+256-753-490718", isWhatsApp: true },
  ],
  whatsApp: {
    enabled: true,
    number: "256753490718",
    displayNumber: "+256-753-490718",
    message: "Hello ARYA Secretariat, I visited your website and would like to make an inquiry regarding your programmes in Kitgum and Lamwo.",
  },
  officeHours: {
    weekdays: "Monday – Friday: 8:30 AM – 5:00 PM (EAT)",
    weekends: "Saturday – Sunday: Closed (Community field outreach only)",
  },
  areaOfInterests: [
    "Institutional Partnership & Grant Collaboration",
    "Health & SRHR Programme Information",
    "Girls & Young Women's Leadership (AGYW)",
    "Education & Youth Development",
    "Livelihoods & Agribusiness",
    "Volunteer & Internship Expression of Interest",
    "Civil Society & Research Collaboration",
    "Media & Communications Inquiry",
    "General Public Inquiry",
  ],
};
