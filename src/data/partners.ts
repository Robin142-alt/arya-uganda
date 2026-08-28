import { PartnerNetwork, HistoricalPartner } from "@/types";

export interface FundingPartner {
  id: string;
  name: string;
  grantPurpose: string;
  category: string;
  activeStatus: "Active" | "Documented Grant Portfolio";
}

export const fundingPartnersData: FundingPartner[] = [
  {
    id: "her-voice-fund",
    name: "HER Voice Fund (HVF)",
    grantPurpose: "To increase coverage, social support and protection package to Adolescent Girls and Young Women (AGYW) living with HIV.",
    category: "Health & Rights",
    activeStatus: "Active",
  },
  {
    id: "crvpf",
    name: "Children's Rights Violation Prevention's Fund (CRVPF)",
    grantPurpose: "To build capacity of youth and young women for improved household livelihoods in Lamwo and Kitgum Districts, including Palabek refugee settlement.",
    category: "Livelihoods & Protection",
    activeStatus: "Active",
  },
  {
    id: "pephar-orom",
    name: "PEPFAR",
    grantPurpose: "To reduce rate of HIV incidence amongst youth in Orom sub-county of Kitgum district.",
    category: "Health & HIV",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "pepfar-community-grants",
    name: "Community Grants to Combat HIV/AIDS (PEPFAR)",
    grantPurpose: "1. To establish model chicken and pig farms to generate income through the sale of meat and eggs to pay for OVC needs. 2. To use the established chicken and pig farms to provide free training in animal husbandry for OVC households.",
    category: "Livelihoods & Health",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "irc",
    name: "International Rescue Committee (IRC)",
    grantPurpose: "1. Capacity building of Community Liaison Volunteers (CLVs) in home-based palliative care, community DOTS for TB, and referral for HIV/AIDS & GBV. 2. Enhanced treatment access, care and support for PLHAs, TB patients and GBV survivors. 3. Establishing and strengthening Family Support Groups (SFG), Mother-to-Mother groups, and PLHA networks.",
    category: "Community Health & Care",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "world-vision-lanoh",
    name: "World Vision US (LANoH project)",
    grantPurpose: "To promote education of the most vulnerable children and improve the livelihoods of OVC households.",
    category: "Education & Livelihoods",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "nusaf",
    name: "Northern Uganda Social Action Fund (NUSAF)",
    grantPurpose: "To advocate for and transform the Acholi community to a better way of thinking, analyzing situations, planning and strategizing rightful methodologies in solving problems for a better Acholi community.",
    category: "Community Transformation",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "ugfatmp-global-fund",
    name: "Uganda Global Fund To Fight AIDS, Tuberculosis & Malaria (UGFATMP)",
    grantPurpose: "1. Increasing awareness and knowledge on HIV/AIDS in the Acholi sub-region. 2. Strengthening human capacity development through youth life skills against HIV/AIDS. 3. Developing and implementing STI social marketing promotional activities.",
    category: "Health Systems",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "pathfinder",
    name: "Pathfinder International",
    grantPurpose: "Organizational capacity building and community reproductive health support.",
    category: "Institutional Development",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "deniva",
    name: "DENIVA",
    grantPurpose: "Capacity building and advocacy for indigenous civil society.",
    category: "Advocacy & Capacity",
    activeStatus: "Documented Grant Portfolio",
  },
  {
    id: "enr-cso",
    name: "Environment and Natural Resources CSO Network (ENR-CSO)",
    grantPurpose: "Capacity building, climate adaptation advocacy, and environmental governance.",
    category: "Environment & Advocacy",
    activeStatus: "Active",
  },
];

export const currentNetworksData: PartnerNetwork[] = [
  {
    id: "her-voice-yplus",
    name: "HER Voice Fund / Y+ Global",
    category: "Strategic Grantor & Network",
    relationship: "Grantee & AGYW Advocacy Partner",
    description: "The HER Voice Fund, managed by Y+ Global (The Global Network of Young People Living with HIV), supports adolescent girls and young women (AGYW) in all their diversity to take their place at decision-making tables and influence policies affecting their health, rights, and futures.",
    verified: true,
    website: "https://yplusglobal.org",
  },
  {
    id: "crvpf-network",
    name: "Children's Rights Violation Prevention's Fund (CRVPF)",
    category: "Strategic Grantor & Network",
    relationship: "Grantee for Youth & Women Livelihoods in Palabek & Kitgum",
    description: "Partnering to build the capacity of youth and young women for improved household livelihoods in Lamwo and Kitgum districts, including Palabek refugee settlement.",
    verified: true,
    website: "https://crvpf.org",
  },
  {
    id: "enr-cso-network",
    name: "Environment & Natural Resources CSO Network (ENR-CSO)",
    category: "Civil Society Coalition",
    relationship: "Registered Network Member",
    description: "A national coalition of civil society organisations advocating for sustainable environmental governance, natural resource management, and climate change adaptation across Uganda.",
    verified: true,
    website: "https://enr-cso.org",
  },
  {
    id: "kingfo",
    name: "Kitgum NGO Forum (KINGFO)",
    category: "Local Coordination",
    relationship: "Member CBO / NGO",
    description: "The primary coordination platform for non-governmental and community-based organisations operating within Kitgum District and the wider Acholi sub-region, promoting synergy and local government engagement.",
    verified: true,
    website: "https://kitgumngoforum.org",
  },
  {
    id: "charter-for-change",
    name: "Charter for Change (C4C) Signatory Ecosystem",
    category: "Accountability Ecosystem",
    relationship: "Signatory to the Charter of Accountability",
    description: "A global initiative by national and international NGOs to practically implement localization of humanitarian aid, ensuring local actors lead crisis response and community resilience.",
    verified: true,
    website: "https://charter4change.org",
  },
];

export const historicalPartnersData: HistoricalPartner[] = [
  {
    name: "PEPFAR / U.S. Embassy in Uganda",
    era: "HIV/AIDS Reduction & OVC Support",
    thematicFocus: "HIV prevention in Orom sub-county, OVC livestock income generation, and clinic linkages.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "International Rescue Committee (IRC)",
    era: "Health & Palliative Care",
    thematicFocus: "Community Liaison Volunteers, DOTS for TB, GBV referrals, and Family Support Groups.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "World Vision US (LANoH Project)",
    era: "Education & OVC Livelihoods",
    thematicFocus: "Education support for vulnerable children and household livelihood enhancement.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "Northern Uganda Social Action Fund (NUSAF)",
    era: "Community Peace & Transformation",
    thematicFocus: "Cultural activities, peacebuilding, and participatory community problem-solving.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "Uganda Global Fund (UGFATMP)",
    era: "Health Systems & HIV/AIDS",
    thematicFocus: "HIV/AIDS awareness, youth life skills, and STI social marketing in Acholi sub-region.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "Pathfinder International",
    era: "Capacity Building",
    thematicFocus: "Organizational capacity building and reproductive health support.",
    disclaimer: "Documented funding partner.",
  },
  {
    name: "DENIVA",
    era: "Advocacy & Capacity",
    thematicFocus: "Civil society capacity building and grassroots rights advocacy.",
    disclaimer: "Documented funding partner.",
  },
];
