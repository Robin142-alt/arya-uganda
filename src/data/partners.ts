import { PartnerNetwork, HistoricalPartner } from "@/types";

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
    name: "Save the Children",
    era: "2000s Post-Conflict Recovery",
    thematicFocus: "Child protection, education for displaced children, and child-friendly spaces.",
    disclaimer: "Historical programmatic collaboration during Northern Uganda IDP camp interventions.",
  },
  {
    name: "International Rescue Committee (IRC)",
    era: "2000s Humanitarian Transition",
    thematicFocus: "Health education, emergency livelihood support, and youth reintegration.",
    disclaimer: "Historical programmatic collaboration.",
  },
  {
    name: "World Vision Uganda",
    era: "Post-Conflict Community Development",
    thematicFocus: "Child welfare, hygiene and sanitation (WASH), and community mobilisation.",
    disclaimer: "Historical programmatic collaboration.",
  },
  {
    name: "Global Fund Sub-Grant Initiatives",
    era: "2000s–2010s Health Systems",
    thematicFocus: "Community-level HIV/AIDS awareness, malaria prevention, and TB contact tracing.",
    disclaimer: "Implemented through national sub-granting coordination channels.",
  },
  {
    name: "PEPFAR Community Linkage Programmes",
    era: "Community Health History",
    thematicFocus: "Adolescent HIV testing promotion and peer support linkage.",
    disclaimer: "Historical community outreach partner.",
  },
  {
    name: "Pathfinder International",
    era: "Reproductive Health Interventions",
    thematicFocus: "Community family planning and adolescent reproductive health information.",
    disclaimer: "Historical technical partner.",
  },
  {
    name: "National Democratic Institute (NDI)",
    era: "Civic Participation History",
    thematicFocus: "Grassroots civic education, peacebuilding, and local council dialogue.",
    disclaimer: "Historical capacity-building partner.",
  },
];
