import { OrganizationInfo } from "@/types";

export const organizationData: OrganizationInfo = {
  name: "Acholi Renaissance Youth Association",
  acronym: "ARYA",
  tagline: "Healthy. Educated. Self-Reliant Communities.",
  motto: "Community-Led Action for Sustainable Transformation",
  foundingYear: 2002,
  location: {
    town: "Kitgum Municipality",
    subRegion: "Acholi Sub-Region",
    district: "Kitgum District",
    country: "Uganda",
    address: "Bwona Gweno Road, Central Division",
    landmark: "Opposite Kitgum District Council Hall",
    poBox: "P.O. Box 345, Kitgum, Uganda",
    coordinates: {
      lat: 3.2883,
      lng: 32.8867,
    },
  },
  contact: {
    generalEmail: "acoli_ren@yahoo.com",
    officialPhones: [
      "+256-782-874812",
      "+256-753-490718",
    ],
    whatsAppNumber: "256753490718", // Clean numeric format without + or spaces for api.whatsapp.com
    whatsAppDefaultMessage: "Hello ARYA, I visited your website and would like to connect regarding your work in Kitgum and Lamwo.",
    officeHours: "Monday – Friday: 8:30 AM – 5:00 PM EAT",
    publicNotice: "Official inquiries and partnership correspondence are coordinated through the ARYA Secretariat in Kitgum Municipality.",
  },
  social: {
    facebook: "https://www.facebook.com/arya.org.ug/notifications/",
    twitter: "https://twitter.com/ARYA_Kitgum",
  },
  registration: {
    statusNotice: "ARYA is a registered Ugandan Non-Governmental Organisation operating in Northern Uganda with functional operational permits across the Acholi sub-region.",
    knownRegistrations: [
      {
        type: "Uganda NGO Bureau",
        body: "National NGO Registration under Ministry of Internal Affairs (Registration No: INDR4653)",
        verified: true,
        reference: "NGO Bureau, Ministry of Internal Affairs",
      },
      {
        type: "Incorporation",
        body: "Incorporated as a Non-Profit Company Limited by Guarantee under Ministry of Justice and Constitutional Affairs (Reg No: 63969)",
        verified: true,
        reference: "Ministry of Justice and Constitutional Affairs",
      },
      {
        type: "District Local Government",
        body: "Certified and Registered CBO with Kitgum District Local Government (Registration No: 00171)",
        verified: true,
        reference: "Kitgum District Local Government Registry",
      },
      {
        type: "International Registrations",
        body: "Registered with EU PADOR (EuropeAid ID: UG-2010-FIA-0607141901) and USAID (NCAGE Code: SCBX2)",
        verified: true,
        reference: "EU PADOR & USAID NCAGE Registries",
      },
    ],
  },
  vision: "Improved socioeconomic status of households in Acholi sub-region.",
  mission: "To work with government of Uganda, international organizations and other non-state actors for improved socioeconomic status of households in Acholi sub-region.",
  coreValues: [
    {
      name: "Transparency",
      letter: "T",
      description: "The organization performs its duties in an open and understandable manner.",
    },
    {
      name: "Equality",
      letter: "E",
      description: "The organization gives equal treatment to all persons without discrimination.",
    },
    {
      name: "Accountability",
      letter: "A",
      description: "Provision of cost-effective use of finances and organizational resources in an open way.",
    },
    {
      name: "Commitment",
      letter: "C",
      description: "We dedicate our time and energy in doing organizational work effectively.",
    },
    {
      name: "Hospitality",
      letter: "H",
      description: "We welcome everybody in need of our services with dignity and care.",
    },
    {
      name: "Quality",
      letter: "Q",
      description: "We offer actual, high-standard services to our beneficiaries and clients.",
    },
    {
      name: "Teamwork",
      letter: "T",
      description: "Working together to effectively achieve the goals and objectives of the organization.",
    },
  ],
  strategicPillars: [
    "Livelihoods & Economic Empowerment",
    "Community Health Enhancing (HIV/AIDS & SRHR)",
    "Education & Human Development",
    "Protection & Vulnerability (Child Safety & GBV Prevention)",
    "Institutional Strengthening & Organizational Development",
  ],
};
