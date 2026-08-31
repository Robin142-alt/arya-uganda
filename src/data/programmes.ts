import { Programme } from "@/types";

export const programmesData: Programme[] = [
  {
    id: "health-hiv-srhr",
    slug: "health-hiv-srhr",
    title: "Health, HIV Prevention & SRHR",
    shortTitle: "Health & SRHR",
    iconName: "HeartPulse",
    heroTagline: "Advancing community health, adolescent-friendly services, and HIV prevention with dignity.",
    summary: "Ensuring adolescent youth and community members have equitable access to vital health information, sexual and reproductive health rights (SRHR), and stigma-free HIV services.",
    description: "Since its founding in 2002 during post-conflict recovery in the Acholi sub-region, ARYA has spearheaded grassroots health communication and service linkage. We work alongside health facilities, district health teams, and youth networks in Kitgum and Lamwo to deliver non-judgmental, adolescent-friendly sexual and reproductive health information, promote HIV testing and adherence support, and dismantle stigma.",
    keyAreas: [
      "Adolescent & Youth-Friendly SRHR Information",
      "HIV Awareness, Prevention & Stigma Reduction",
      "Peer-to-Peer Community Health Education",
      "Linkages Between Grassroots Communities and Health Facilities",
      "Community Dialogue on Sexual & Reproductive Health",
      "Menstrual Health Dignity and Hygiene Education",
    ],
    targetGroups: [
      "Adolescents and young people (ages 10–24)",
      "Young women and young mothers",
      "Young people living with and affected by HIV",
      "Grassroots community members and caregivers",
    ],
    approaches: [
      "Peer educator training and community outreach",
      "Facility-community coordination meetings",
      "Youth dialogues in safe community spaces",
      "Intergenerational conversations bridging elders and youth",
    ],
    featuredHighlight: {
      title: "Adolescent-Friendly SRHR Advocacy",
      badge: "Grassroots Focus",
      summary: "Training youth peer educators across Kitgum to lead respectful, informed discussions on HIV prevention and SRHR rights in youth corners and community centres.",
      stats: [
        { label: "Community Dialogues", value: "Verified In Field", note: "Multi-stakeholder health engagements" },
        { label: "Focus Districts", value: "Kitgum & Lamwo", note: "Acholi Sub-Region" }
      ]
    },
    sampleActivities: [
      "Organising youth peer educator workshops on modern SRHR and HIV prevention.",
      "Facilitating community health dialogues in sub-counties across Kitgum.",
      "Advocating for youth-friendly health corners at public health centres (HC III & HC IV).",
      "Distributing health education materials and menstrual health hygiene kits.",
    ],
    image: "/images/programmes/health.webp",
    accentColor: "forest",
  },
  {
    id: "girls-young-women",
    slug: "girls-young-women",
    title: "Girls & Young Women's Empowerment",
    shortTitle: "Girls & Young Women",
    iconName: "Sparkles",
    heroTagline: "Her Voice. Her Rights. Her Future.",
    summary: "Equipping adolescent girls and young women (AGYW) with leadership skills, rights literacy, and platforms to advocate for their health, bodily autonomy, and social protections.",
    description: "Adolescent girls and young women in Northern Uganda face intersectional barriers, from high rates of school dropout and early pregnancies to economic exclusion and customary land rights disenfranchisement. As a recognized grantee of the HER Voice Fund (supported by Y+ Global and partners), ARYA mobilises AGYW to lead advocacy, engage traditional clan leaders, and claim spaces in local decision-making forums.",
    keyAreas: [
      "Adolescent Girls and Young Women (AGYW) Leadership Development",
      "Challenging Harmful Cultural Norms & Gender Bias",
      "Advocacy on Girls' Property, Land and Inheritance Rights",
      "Engagement with Traditional Clan Leaders & Elders (Ker Kwaro Acholi)",
      "Amplifying Young Women's Voices in District & National Policy Spaces",
      "Integration of HIV & SRHR Protections in Educational Settings",
    ],
    targetGroups: [
      "Adolescent girls (10–19 years)",
      "Young women (20–24 years)",
      "Young mothers and out-of-school girls",
      "Female youth leaders and community advocates",
    ],
    approaches: [
      "Structured dialogues between AGYW, women leaders, and clan elders",
      "Advocacy mentorship and civic leadership training",
      "Coalition-building with civil society organisations and education stakeholders",
      "Safe space creation for rights literacy and mutual solidarity",
    ],
    featuredHighlight: {
      title: "HER Voice Fund & Regional Advocacy",
      badge: "Documented Grantee Initiative",
      summary: "Convening clan leaders, women representatives, and AGYW advocates across Northern Uganda to address cultural barriers surrounding inheritance, rights, and school retention.",
      stats: [
        { label: "Clan Leaders Engaged", value: "400+", note: "Across 8 districts of Acholi sub-region" },
        { label: "AGYW Reached & Mentored", value: "24,000+", note: "Documented youth empowerment cohorts" }
      ]
    },
    sampleActivities: [
      "Conducting intergenerational town halls on girls' customary property rights.",
      "Training AGYW delegates to engage District Council and Education sector officers.",
      "Facilitating peer support circles for adolescent mothers returning to education or vocational training.",
      "Documenting community policy recommendations for district youth welfare action plans.",
    ],
    image: "/images/programmes/young-women.webp",
    accentColor: "ochre",
  },
  {
    id: "education-youth",
    slug: "education-youth",
    title: "Education & Youth Development",
    shortTitle: "Education & Youth",
    iconName: "GraduationCap",
    heroTagline: "Keeping young minds connected to learning, life skills, and civic agency.",
    summary: "Supporting vulnerable children and youth to access educational opportunities, life-skills mentorship, and pathways out of generational poverty.",
    description: "Education remains the bedrock of community transformation. Building on ARYA's foundational work with orphans and vulnerable children (OVC) following decades of regional displacement, we champion inclusive education, functional literacy, life-skills training, and mentorship to ensure children and adolescents remain in school and transition smoothly into adulthood.",
    keyAreas: [
      "Educational Support & Retention for Vulnerable Children",
      "Foundational Life Skills & Leadership Mentorship",
      "School-Based Health & Sanitation Advocacy",
      "Re-entry Support for Adolescent Mothers into Education",
      "Community Library & Information Access Initiatives",
      "Youth Civic Participation & Community Volunteerism",
    ],
    targetGroups: [
      "Orphans and vulnerable children (OVC)",
      "Primary and secondary school students",
      "Out-of-school adolescents",
      "Youth mentors and community peer tutors",
    ],
    approaches: [
      "School-community dialogues on child retention and barrier removal",
      "Life skills coaching and career orientation camps",
      "Parental and caregiver engagement in child education",
      "Partnership with local schools and education sector inspectors",
    ],
    featuredHighlight: {
      title: "Holistic Child & Youth Retention",
      badge: "Long-term Foundation",
      summary: "Combining basic scholastic support with parental psycho-social dialogues to prevent dropouts in underserved rural sub-counties.",
      stats: [
        { label: "Core Model", value: "Community-Led", note: "Partnering with school management committees" },
        { label: "Reach", value: "Multi-Subcounty", note: "Across Kitgum District" }
      ]
    },
    sampleActivities: [
      "Distributing learning aids and scholastic materials to vulnerable pupils.",
      "Conducting holiday life-skills workshops for teenage boys and girls.",
      "Training teachers and youth patrons on child safeguarding and supportive learning environments.",
      "Engaging School Management Committees (SMCs) on child-friendly infrastructure.",
    ],
    image: "/images/programmes/education.webp",
    accentColor: "forest",
  },
  {
    id: "livelihoods-economic",
    slug: "livelihoods-economic",
    title: "Livelihoods & Economic Resilience",
    shortTitle: "Livelihoods",
    iconName: "Sprout",
    heroTagline: "Cultivating sustainable household economies and youth self-reliance.",
    summary: "Strengthening household economic resilience through climate-smart agriculture, financial literacy, vocational skills, and youth enterprise incubation.",
    description: "True community self-reliance is achieved when households and youth possess sustainable means of production and income. ARYA facilitates village-level economic empowerment initiatives, modern agronomy practices, savings and credit groups (VSLAs), and skills training that enable young people and caregivers to provide nutritious food and stable income for their families.",
    keyAreas: [
      "Youth Entrepreneurship & Micro-Enterprise Coaching",
      "Village Savings and Loan Associations (VSLAs)",
      "Sustainable & Climate-Resilient Agricultural Practices",
      "Vocational & Practical Skills Training for Out-of-School Youth",
      "Household Food Security and Post-Harvest Management",
      "Market Linkages and Value Addition for Local Produce",
    ],
    targetGroups: [
      "Youth farmer groups and young entrepreneurs",
      "Women-headed households and caregivers of vulnerable children",
      "Unemployed and underemployed young people",
      "Rural farming cooperatives",
    ],
    approaches: [
      "Hands-on demonstration farming and agronomy coaching",
      "Financial literacy and group savings methodology",
      "Mentorship from established local artisans and business owners",
      "Promotion of eco-friendly inputs and indigenous seeds",
    ],
    featuredHighlight: {
      title: "Youth Agronomy & Enterprise",
      badge: "Resilience Strategy",
      summary: "Fostering group farming and collective marketing of high-value crops to provide sustainable seasonal income for rural youth collectives.",
      stats: [
        { label: "Key Strategy", value: "VSLA & Agribusiness", note: "Community-owned savings models" },
        { label: "Focus", value: "Food Security", note: "Climate-adapted agricultural skills" }
      ]
    },
    sampleActivities: [
      "Establishing community learning gardens for high-yield, drought-resistant vegetables.",
      "Training youth savings groups in transparent bookkeeping and business planning.",
      "Providing startup toolkits and mentorship for vocational trainees (tailoring, mechanics, carpentry).",
      "Hosting community market exhibitions for youth-produced agricultural products.",
    ],
    image: "/images/programmes/livelihoods.webp",
    accentColor: "ochre",
  },
  {
    id: "gender-rights-protection",
    slug: "gender-rights-protection",
    title: "Gender Rights & Child Protection",
    shortTitle: "Gender & Protection",
    iconName: "ShieldAlert",
    heroTagline: "Defending human dignity, preventing gender-based violence, and safeguarding children.",
    summary: "Working with traditional leaders, local government, and communities to end gender-based violence, safeguard child rights, and foster safe domestic environments.",
    description: "Protection from violence and discrimination is a prerequisite for human development. ARYA actively participates in district protection coordination mechanisms, conducts community sensitisation on child rights and Ugandan gender laws, and works alongside cultural elders and clan structures to dismantle systemic gender-based violence (GBV) and promote peaceful dispute resolution.",
    keyAreas: [
      "Prevention and Response to Gender-Based Violence (GBV)",
      "Child Rights Protection and Safeguarding Advocacy",
      "Engagement with Clan Elders on Restorative Justice and Dignity",
      "Legal and Psychosocial Referral Networks for Survivors",
      "Community Awareness on the Prevention of Early & Forced Child Marriages",
      "Promoting Positive Masculinity and Male Champion Engagement",
    ],
    targetGroups: [
      "Survivors and at-risk women and children",
      "Clan leaders, Rwodi Kweri, and cultural custodians",
      "Local Council officials and Community Development Officers",
      "Male champions and community elders",
    ],
    approaches: [
      "Community-led GBV surveillance and referral pathways",
      "Sensitisation sessions with traditional justice arbiters",
      "Public legal literacy campaigns on the Children Act and Domestic Violence Act",
      "Multi-sectoral protection coordination forums",
    ],
    featuredHighlight: {
      title: "Community Protection Coalitions",
      badge: "Advocacy Action",
      summary: "Engaging local council leaders, police child & family protection units, and cultural elders to enforce child protection guidelines and swift GBV referral.",
      stats: [
        { label: "Approach", value: "Multi-Stakeholder", note: "Aligning cultural and formal legal systems" },
        { label: "Target", value: "Zero Tolerance", note: "Against GBV and child exploitation" }
      ]
    },
    sampleActivities: [
      "Organising community barazas on domestic violence prevention and legal recourse.",
      "Conducting training for local council courts on child protection laws.",
      "Facilitating male-engagement dialogues to promote equitable domestic decision-making.",
      "Establishing community child protection committees in pilot parishes.",
    ],
    image: "/images/programmes/protection.webp",
    accentColor: "terracotta",
  },
  {
    id: "community-resilience-advocacy",
    slug: "community-resilience-advocacy",
    title: "Community Resilience, Advocacy & Environment",
    shortTitle: "Community Resilience",
    iconName: "Users",
    heroTagline: "Mobilising grassroots civic agency, environmental stewardship, and enduring peace.",
    summary: "Strengthening community governance, civic advocacy, environmental protection, and peacebuilding for lasting regional stability.",
    description: "Rooted in post-conflict reconciliation and citizen participation, ARYA brings together diverse civil society voices to influence local government policies, demand equitable public service delivery, and preserve natural resources. As a member of the Environment and Natural Resources CSO Network (ENR-CSO) and Kitgum NGO Forum, ARYA champions community-led sustainability.",
    keyAreas: [
      "Grassroots Citizen Mobilisation & Civic Participation",
      "Civil Society Coordination and District Policy Engagement",
      "Environmental Conservation & Climate Change Adaptation",
      "Community Peacebuilding, Reconciliation & Social Cohesion",
      "Capacity Strengthening for Community-Based Organisations (CBOs)",
      "Charter for Change & Humanitarian Accountability Compliance",
    ],
    targetGroups: [
      "Community members and civic groups",
      "Local government duty bearers and policy makers",
      "Member organisations of local CSO networks",
      "Environmental committees and natural resource custodians",
    ],
    approaches: [
      "Participatory community planning and budget advocacy",
      "Tree planting and renewable biomass promotion campaigns",
      "Inter-clan and inter-community peace dialogues",
      "Civil society coalition meetings and policy brief development",
    ],
    featuredHighlight: {
      title: "ENR-CSO & Local Action",
      badge: "Network Member",
      summary: "Contributing grassroots perspectives from the Acholi sub-region to national environmental conservation dialogues and local climate resilience initiatives.",
      stats: [
        { label: "Network Member", value: "ENR-CSO Network", note: "Active participation in regional chapters" },
        { label: "Civic Forum", value: "KINGFO Member", note: "Kitgum NGO Forum alignment" }
      ]
    },
    sampleActivities: [
      "Facilitating citizen scorecards on public health and education services in Kitgum sub-counties.",
      "Spearheading indigenous tree planting campaigns around water catchment areas.",
      "Convening district CSO policy dialogues with District Executive Committees.",
      "Participating in Charter for Change reviews to promote locally-led humanitarian response.",
    ],
    image: "/images/programmes/community.webp",
    accentColor: "forest",
  },
];
