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
    address: "Plot 5, Awich Road / Bwona Gweno Road",
    landmark: "Opposite District Council Hall",
    poBox: "P.O. Box 345, Kitgum, Uganda",
    coordinates: {
      lat: 3.2883,
      lng: 32.8867,
    },
  },
  contact: {
    generalEmail: "acoli_ren2@yahoo.com",
    officialPhones: [
      "+256 471 439407",
      "+256 782 874812",
      "+256 753 490718",
      "+256 714 874812",
    ],
    whatsAppNumber: "256782874812", // Clean numeric format without + or spaces for api.whatsapp.com
    whatsAppDefaultMessage: "Hello ARYA, I visited your website and would like to learn more about your work in Kitgum.",
    officeHours: "Monday – Friday: 8:30 AM – 5:00 PM EAT",
    publicNotice: "Official contact numbers and public inquiry lines are managed by the ARYA secretariat. For formal partnership correspondence, please use the general secretariat email.",
  },
  social: {
    facebook: "https://www.facebook.com", // Configurable link
    twitter: "https://twitter.com/ARYA_Kitgum",
  },
  registration: {
    statusNotice: "ARYA operates as an officially registered Ugandan NGO and Community-Based Organisation in the Acholi sub-region. Specific registration serials are subject to annual compliance updates with the Uganda NGO Bureau and Kitgum District Local Government.",
    knownRegistrations: [
      {
        type: "Uganda NGO Bureau",
        body: "National NGO Registration (Historical Record / Compliance Serial: INDR4653)",
        verified: true,
        reference: "Public CBO/NGO Registry",
      },
      {
        type: "District Local Government",
        body: "Registered Community Based Organisation (CBO) with Kitgum District Local Government",
        verified: true,
        reference: "Kitgum District Local Government Registry",
      },
      {
        type: "Incorporation",
        body: "Incorporated as a Non-Profit Company Limited by Guarantee in Uganda",
        verified: true,
        reference: "Uganda Registration Services Bureau",
      },
    ],
  },
  vision: "A healthy, educated, and self-reliant community in Northern Uganda where young people, women, and vulnerable children actively shape their own destiny.",
  mission: "To work alongside grassroots communities, local and central government, development partners, civil society, and other key stakeholders to foster sustainable development, health equity, youth empowerment, and resilient livelihoods through meaningful community participation.",
  coreValues: [
    {
      name: "Transparency",
      letter: "T",
      description: "Operating with absolute openness in programmatic decision-making, resource stewardship, and community dialogue.",
    },
    {
      name: "Equality",
      letter: "E",
      description: "Upholding the equal dignity, rights, and voice of all persons—especially adolescent girls, young women, and vulnerable children.",
    },
    {
      name: "Accountability",
      letter: "A",
      description: "Remaining accountable first and foremost to the grassroots communities we serve, as well as to our partners and donors (Charter for Change signatory).",
    },
    {
      name: "Commitment",
      letter: "C",
      description: "Dedicated to long-term grassroots transformation and staying rooted with communities through both post-conflict recovery and sustainable development.",
    },
    {
      name: "Hospitality",
      letter: "H",
      description: "Fostering an inclusive, welcoming, and safe environment for peer learning, community dialogue, and multi-stakeholder collaboration.",
    },
    {
      name: "Quality",
      letter: "Q",
      description: "Delivering evidence-informed, context-specific, and high-impact interventions that create measurable, lasting community benefit.",
    },
    {
      name: "Teamwork",
      letter: "T",
      description: "Uniting youth leaders, community elders, clan leaders, civil society, and local government in shared civic action.",
    },
  ],
  strategicPillars: [
    "Health, HIV & SRHR Equity",
    "Girls & Young Women's Leadership (AGYW)",
    "Education & Youth Development",
    "Livelihoods & Household Economic Resilience",
    "Gender Rights, Child Protection & GBV Prevention",
    "Community Advocacy, Peacebuilding & Resilience",
  ],
};
