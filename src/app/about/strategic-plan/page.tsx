import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Target,
  Compass,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  Sprout,
  Users,
  Building2,
  FileText,
  DollarSign,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Strategic Plan 2023–2027 | ARYA Uganda",
  description:
    "Explore ARYA's official 5-Year Strategic Plan (2023–2027) covering 5 Strategic Directions, measurable outcomes, implementation models, and budget framework for Northern Uganda.",
};

export default function StrategicPlanPage() {
  const strategicDirections = [
    {
      id: "sd1",
      number: "01",
      title: "Livelihoods & Economic Empowerment",
      icon: <Sprout className="w-6 h-6 text-arya-forest" />,
      color: "forest",
      objectives: [
        "To promote diversification of livelihoods and income generating initiatives for youth and young people by 2027.",
        "To promote skills development and innovation in youth and young people by 2026 (ICT, technical, agribusiness, and hospitality).",
        "To establish and strengthen profitable social impact enterprises and investments to fight poverty by 2027.",
      ],
      targets: [
        "15,000 farmers practicing climate adaptation measures (re-afforestation, drought-resistant crops, small-scale irrigation).",
        "15,000 households with improved economic status and verified food security.",
        "At least 200 decent gainful jobs co-created through youth enterprise linkages and start-up support.",
      ],
    },
    {
      id: "sd2",
      number: "02",
      title: "Community Health Enhancing",
      icon: <HeartPulse className="w-6 h-6 text-arya-ochre-700" />,
      color: "ochre",
      objectives: [
        "To increase access to HIV services to 20,000 youth in Acholi sub-region by 2027.",
        "To increase access to Sexual Reproductive Health (SRHR) services for 20,000 Adolescent Girls and Young Women (AGYW) by 2027.",
      ],
      targets: [
        "20,000 youth accessing youth-friendly HIV/AIDS prevention, counseling, and testing.",
        "95% viral load suppression among HIV-positive youth linked to clinic care.",
        "Significant reduction in teenage pregnancy through 50+ community-wide and school-based SRHR dialogues.",
      ],
    },
    {
      id: "sd3",
      number: "03",
      title: "Education & Human Development",
      icon: <GraduationCap className="w-6 h-6 text-arya-forest" />,
      color: "forest",
      objectives: [
        "To increase by 30% the retention rate of school-going children in Acholi sub-region by 2027.",
        "To create self-employment opportunities for 10,000 out-of-school youth in Acholi sub-region by 2027.",
      ],
      targets: [
        "10,000 pupils supported to complete Primary Leaving Examinations (PLE).",
        "10,000 students supported to complete Uganda Certificate of Education (UCE).",
        "Improved learning environments for Early Childhood Development (ECD) and primary schools in refugee settlements and host communities.",
      ],
    },
    {
      id: "sd4",
      number: "04",
      title: "Protection (Vulnerability)",
      icon: <ShieldCheck className="w-6 h-6 text-arya-terracotta" />,
      color: "terracotta",
      objectives: [
        "To promote holistic child development and safety by 2026.",
        "To contribute to a measurable reduction of domestic violence cases in Acholi sub-region by 2027.",
        "To promote the safety and security of children from harmful interference in their growth processes.",
      ],
      targets: [
        "30% reduction in documented human rights violations and child abuse cases across project sub-counties.",
        "Active community child protection structures strengthened at parish, sub-county, and district levels.",
        "Harmonized customary mediation with statutory child and women's rights (positive parenting & clan bylaws).",
      ],
    },
    {
      id: "sd5",
      number: "05",
      title: "Institutional Strengthening & Organizational Development",
      icon: <Building2 className="w-6 h-6 text-arya-forest" />,
      color: "forest",
      objectives: [
        "To strengthen organizational programming competence and performance by 2027.",
        "To strengthen organizational governance, human resource systems, and management by 2026.",
        "To strengthen networking, partnership, and synergy with development partners and government.",
      ],
      targets: [
        "50% improvement in financial stability and multi-year grant resource mobilization.",
        "100% of Board of Directors and Secretariat technical staff trained in advanced program management, M&E, and resource mobilization.",
        "Digitalization of M&E systems and development of social enterprise arms for organizational self-sustainability.",
      ],
    },
  ];

  const implementationModels = [
    {
      title: "The VSLA Model",
      desc: "Village Savings and Loan Associations fostering micro-capital accumulation, financial literacy, and group investment among rural women and youth.",
    },
    {
      title: "Village Transformation Model",
      desc: "Holistic grassroots development mobilizing entire village clusters around health, environmental protection, and food security.",
    },
    {
      title: "Leader-Girl's Model",
      desc: "Empowering adolescent girls as peer ambassadors to lead school retention, bodily autonomy dialogues, and rights advocacy.",
    },
    {
      title: "Child Education Monitors (CEM)",
      desc: "Community-based monitoring structures that identify out-of-school children, prevent dropouts, and link vulnerable learners to education support.",
    },
  ];

  const budgetSummary = [
    { area: "SD1: Livelihoods & Economic Empowerment", annual: "UGX 3,356,500,000", total: "UGX 16,782,500,000", share: "18.3%" },
    { area: "SD2: Community Health Enhancing", annual: "UGX 2,880,000,000", total: "UGX 14,400,000,000", share: "15.7%" },
    { area: "SD3: Education & Human Development", annual: "UGX 3,840,000,000", total: "UGX 19,200,000,000", share: "21.0%" },
    { area: "SD4: Protection & Vulnerability", annual: "UGX 3,047,600,000", total: "UGX 15,238,800,000", share: "16.7%" },
    { area: "SD5: Institutional Strengthening & Human Resources", annual: "UGX 5,172,000,000", total: "UGX 25,860,000,000", share: "28.3%" },
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Strategic Roadmap"
        title="Strategic Plan 2023 – 2027"
        subtitle="Acholi Renaissance Youth Association's 5-year programmatic framework for sustainable socioeconomic transformation in Kitgum, Lamwo, and the wider Acholi sub-region."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About ARYA", href: "/about" },
          { label: "Strategic Plan" },
        ]}
      />

      {/* Executive Foreword & Context Section */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Foreword */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Executive Foreword"
                badgeVariant="forest"
                title="Building On Our Legacy. Scaling Our Impact."
                subtitle="A 5-year commitment to leaving no one behind across Northern Uganda."
                className="mb-6"
              />

              <div className="space-y-4 text-base text-arya-charcoal-700 leading-relaxed">
                <p>
                  This Strategic Plan succeeds our 2017–2022 framework, which guided impactful post-conflict and livelihoods transformations in Lamwo and Kitgum districts. The 2023–2027 plan is rolled out to consolidate these achievements under five focused strategic directions while exploring new approaches to engage government, international partners, and grassroots communities.
                </p>
                <p>
                  With the presence of over 53,000 refugees in Lamwo district (Palabek refugee settlement), ARYA works to foster peaceful coexistence between displaced persons and host communities, easing pressure on natural resources, health facilities, and rural schools.
                </p>
                <p>
                  Our focus on livelihood and economic empowerment aims at alleviating deepening poverty, helping households live decent lives free from economic vulnerability, domestic violence, and hunger. We put youth and young people at the center of all development dimensions.
                </p>
              </div>

              {/* Authentication Sign-off */}
              <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-arya-charcoal-900 font-heading text-base">
                    Acellam David Fred
                  </p>
                  <p className="text-xs text-arya-forest font-semibold">
                    Executive Director, ARYA
                  </p>
                </div>
                <div className="text-right text-xs text-arya-charcoal-500">
                  <span>P.O. Box 345, Kitgum</span>
                  <p className="font-semibold text-arya-charcoal-700">Acholi Sub-Region, Uganda</p>
                </div>
              </div>
            </div>

            {/* Right Column: Strategic Snapshot Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arya-ochre text-arya-charcoal-950 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Horizon</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-arya-ochre-300">
                      Vision
                    </span>
                    <p className="text-sm font-medium text-white mt-1">
                      &ldquo;Improved socioeconomic status of households in Acholi sub-region.&rdquo;
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase text-arya-ochre-300">
                      Mission
                    </span>
                    <p className="text-sm font-medium text-white mt-1">
                      &ldquo;To work with government of Uganda, international organizations and other non-state actors for improved socioeconomic status of households in Acholi sub-region.&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-arya-charcoal-400 block">Implementation:</span>
                      <span className="font-bold text-white text-sm">2023 – 2027</span>
                    </div>
                    <div>
                      <span className="text-arya-charcoal-400 block">Indicative Budget:</span>
                      <span className="font-bold text-arya-ochre-300 text-sm">UGX 91.48 Billion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographic Scope Note */}
              <div className="p-5 rounded-2xl bg-arya-ivory border border-arya-charcoal-200 text-xs text-arya-charcoal-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-arya-charcoal-900 text-sm">
                  <Compass className="w-4 h-4 text-arya-forest" />
                  <span>Geographic Scope & Outlook</span>
                </div>
                <p className="leading-relaxed">
                  Primary operational hubs in <strong>Kitgum</strong> and <strong>Lamwo</strong> districts (including Palabek refugee settlement and rural sub-counties), with planned phased expansion to an additional three districts across Northern Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Strategic Directions Deep Dive */}
      <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Architecture"
            badgeVariant="forest"
            title="The 5 Core Strategic Directions"
            subtitle="Structured programmatic pillars addressing the root causes of poverty, health vulnerabilities, education barriers, and institutional capacity."
            align="center"
            className="text-center mb-16"
          />

          <div className="space-y-10">
            {strategicDirections.map((sd) => (
              <div
                key={sd.id}
                id={sd.id}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-arya-charcoal-100 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Title & Number */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-arya-forest-50 flex items-center justify-center">
                        {sd.icon}
                      </div>
                      <span className="text-xs font-bold text-arya-ochre-700 uppercase tracking-widest">
                        Strategic Direction {sd.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-arya-charcoal-900 leading-snug">
                      {sd.title}
                    </h3>
                  </div>

                  {/* Middle: Objectives */}
                  <div className="lg:col-span-4 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-arya-charcoal-400">
                      Strategic Objectives
                    </h4>
                    <div className="space-y-2.5">
                      {sd.objectives.map((obj, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-arya-charcoal-700">
                          <CheckCircle2 className="w-4 h-4 text-arya-forest shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Key Targets & Outcomes */}
                  <div className="lg:col-span-4 space-y-3 bg-arya-ivory/60 p-5 rounded-2xl border border-arya-charcoal-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-arya-ochre-800">
                      Measurable 5-Year Targets
                    </h4>
                    <div className="space-y-2">
                      {sd.targets.map((tgt, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-arya-charcoal-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-arya-ochre shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed font-medium">{tgt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approaches & Models */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Core Approaches */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Methodology"
                badgeVariant="forest"
                title="Implementation Approaches"
                subtitle="Cross-cutting principles applied across all interventions."
                className="mb-6"
              />

              <div className="space-y-4 text-xs sm:text-sm text-arya-charcoal-700">
                <div className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 space-y-1">
                  <h4 className="font-bold text-arya-charcoal-900 font-heading">
                    1. Human Rights Based Approach (RBA)
                  </h4>
                  <p className="text-arya-charcoal-600 leading-relaxed">
                    Systematic application of Participation, Accountability, Non-discrimination, and Empowerment grounded in international rights conventions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 space-y-1">
                  <h4 className="font-bold text-arya-charcoal-900 font-heading">
                    2. Conflict Sensitive Approach
                  </h4>
                  <p className="text-arya-charcoal-600 leading-relaxed">
                    Deep contextual understanding to ensure interventions avoid unintended friction between host and refugee populations in Lamwo and Kitgum.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 space-y-1">
                  <h4 className="font-bold text-arya-charcoal-900 font-heading">
                    3. Gender Sensitivity & Dignity
                  </h4>
                  <p className="text-arya-charcoal-600 leading-relaxed">
                    Analyzing distinct gender needs and ensuring adolescent girls and young women actively lead dialogue and economic programs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 space-y-1">
                  <h4 className="font-bold text-arya-charcoal-900 font-heading">
                    4. Media & Radio Advocacy
                  </h4>
                  <p className="text-arya-charcoal-600 leading-relaxed">
                    Leveraging local FM radio networks, community talk shows, and digital outlets for mass civic, health, and child safeguarding awareness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 space-y-1">
                  <h4 className="font-bold text-arya-charcoal-900 font-heading">
                    5. Community-Led Systems & Consortia
                  </h4>
                  <p className="text-arya-charcoal-600 leading-relaxed">
                    Working directly with Local Councils (LCs), Village Health Teams (VHTs), traditional elders, and peer CSO coalitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Time-Tested Models */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Action Frameworks"
                badgeVariant="ochre"
                title="Documented Delivery Models"
                subtitle="Proven grassroots models tailored to specific community challenges."
                className="mb-6"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {implementationModels.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-arya-charcoal-100 shadow-sm space-y-2 hover:border-arya-forest-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-arya-forest bg-arya-forest-50 px-2 py-0.5 rounded">
                        Model 0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-arya-charcoal-900 font-heading mt-2">
                        {model.title}
                      </h4>
                    </div>
                    <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Monitoring & Evaluation Note */}
              <div className="p-6 rounded-2xl bg-arya-forest-900 text-white space-y-2 shadow-lg">
                <div className="flex items-center gap-2 font-bold text-sm text-arya-ochre-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Robust MEAL Framework</span>
                </div>
                <p className="text-xs text-arya-forest-100 leading-relaxed">
                  The plan embeds continuous quarterly field tracking, bi-annual progress reporting, an independent 3rd-year Mid-Term Review, and a comprehensive 5th-year End-Term Evaluation to guarantee transparent accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicative 5-Year Budget Framework */}
      <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Financial Architecture"
            badgeVariant="forest"
            title="5-Year Indicative Budget Framework"
            subtitle="Projected resource allocation across the 5 Strategic Directions (2023–2027)."
            align="center"
            className="text-center mb-14"
          />

          {/* Budget Table */}
          <div className="bg-white rounded-3xl overflow-hidden border border-arya-charcoal-100 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-arya-forest text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="py-4 px-6">Strategic Expenditure Area</th>
                    <th className="py-4 px-6">Annual Projection (UGX)</th>
                    <th className="py-4 px-6">5-Year Total (UGX)</th>
                    <th className="py-4 px-6 text-right">Share (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-arya-charcoal-100 text-arya-charcoal-700">
                  {budgetSummary.map((row, idx) => (
                    <tr key={idx} className="hover:bg-arya-ivory/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-arya-charcoal-900">{row.area}</td>
                      <td className="py-4 px-6 font-mono text-arya-charcoal-600">{row.annual}</td>
                      <td className="py-4 px-6 font-mono font-bold text-arya-forest">{row.total}</td>
                      <td className="py-4 px-6 font-semibold text-right text-arya-ochre-700">{row.share}</td>
                    </tr>
                  ))}
                  <tr className="bg-arya-forest-50/80 font-bold text-arya-forest-950">
                    <td className="py-4 px-6 text-base font-heading">Total 5-Year Projected Budget</td>
                    <td className="py-4 px-6 font-mono text-sm">UGX 18,296,100,000 / yr</td>
                    <td className="py-4 px-6 font-mono text-base text-arya-forest">UGX 91,480,500,000</td>
                    <td className="py-4 px-6 text-right text-base">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-arya-charcoal-50 border-t border-arya-charcoal-100 text-[11px] text-arya-charcoal-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>*Allocations: 70% direct programme interventions, 30% institutional & human resource strengthening.</span>
              <span className="font-semibold text-arya-charcoal-700">Currency: Uganda Shillings (UGX)</span>
            </div>
          </div>

          {/* Funding Strategy Snapshot */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-5 rounded-2xl border border-arya-charcoal-100 shadow-sm">
              <span className="text-lg sm:text-xl font-extrabold text-arya-forest font-heading">UGX 50.0B</span>
              <p className="text-xs font-semibold text-arya-charcoal-800 mt-1">Grants Portfolio</p>
              <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Development partners</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-arya-charcoal-100 shadow-sm">
              <span className="text-lg sm:text-xl font-extrabold text-arya-ochre font-heading">UGX 25.0B</span>
              <p className="text-xs font-semibold text-arya-charcoal-800 mt-1">Donations</p>
              <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Philanthropies & charities</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-arya-charcoal-100 shadow-sm">
              <span className="text-lg sm:text-xl font-extrabold text-arya-forest font-heading">UGX 11.48B</span>
              <p className="text-xs font-semibold text-arya-charcoal-800 mt-1">Local Resource Mobilization</p>
              <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Social enterprises & co-funding</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-arya-charcoal-100 shadow-sm">
              <span className="text-lg sm:text-xl font-extrabold text-arya-terracotta font-heading">UGX 5.0B</span>
              <p className="text-xs font-semibold text-arya-charcoal-800 mt-1">Gifts & Subscriptions</p>
              <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Well-wishers & allies</p>
            </div>
          </div>

          {/* Bottom Partnership Call */}
          <div className="mt-12 text-center">
            <Button
              href="/get-involved"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Partner With ARYA on the 2023–2027 Strategic Plan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
