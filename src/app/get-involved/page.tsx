"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  Sparkles,
  Send,
  CheckCircle2,
  Building,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<"partner" | "volunteer" | "support" | "collaborate">("partner");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    interest: "Institutional Partnership",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const pathways = [
    {
      id: "partner",
      title: "Partner With Us",
      badge: "Institutional",
      icon: <Building className="w-6 h-6" />,
      desc: "For institutional donors, bilateral funders, INGOs, and local government departments seeking trusted grassroots implementation in Kitgum and Lamwo.",
      points: [
        "Aligned with Uganda National Development Plan",
        "Signatory to Charter for Change localisation principles",
        "Strong community roots and traditional clan relations",
        "Transparent financial and programmatic reporting",
      ],
    },
    {
      id: "volunteer",
      title: "Volunteer & Internship",
      badge: "Youth & Professionals",
      icon: <Users className="w-6 h-6" />,
      desc: "For young professionals, university students, and community volunteers looking to contribute skills in health education, agronomy, and youth mentorship.",
      points: [
        "Field experience in adolescent peer education",
        "Mentorship from experienced community facilitators",
        "Engagement with rural grassroots farmer groups",
        "Certification and professional endorsement",
      ],
    },
    {
      id: "collaborate",
      title: "Research & CSO Collaboration",
      badge: "Knowledge Sharing",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "For academic researchers, think tanks, and civil society alliances investigating SRHR, youth empowerment, or customary land rights.",
      points: [
        "Access to grounded community dialogue insights",
        "Ethical, consent-driven field research facilitation",
        "Co-authoring policy briefs and stakeholder submissions",
        "Regional civil society network coordination",
      ],
    },
    {
      id: "support",
      title: "Support Our Work",
      badge: "Direct Action",
      icon: <HeartHandshake className="w-6 h-6" />,
      desc: "Direct your support toward specific community priorities such as scholastic materials for vulnerable children or agricultural toolkits.",
      points: [
        "Contact-based arrangement for transparent oversight",
        "Direct impact on verified community beneficiaries",
        "Regular field updates and accountability receipts",
        "Zero middleman administration waste",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Join Our Mission"
        title="Let's Build Stronger Communities Together"
        subtitle="Discover how your organisation, skills, or resources can advance health equity, education, and self-reliance in Northern Uganda."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      {/* 4 Pathways Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement Pathways"
            badgeVariant="forest"
            title="Four Ways to Connect With ARYA"
            subtitle="Whether representing a multilateral donor, local civil society, or looking to volunteer, there is a clear pathway for engagement."
            align="center"
            className="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pw) => (
              <div
                key={pw.id}
                className="bg-arya-ivory rounded-3xl p-8 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between hover:border-arya-forest-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-arya-forest text-white flex items-center justify-center">
                      {pw.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-white text-arya-charcoal-800 border border-arya-charcoal-200">
                      {pw.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-arya-charcoal-900 font-heading mb-3">
                    {pw.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mb-6">
                    {pw.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-arya-charcoal-200/60 mb-6">
                    {pw.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-arya-charcoal-700">
                        <CheckCircle2 className="w-4 h-4 text-arya-forest shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveTab(pw.id as any);
                    setFormData((prev) => ({
                      ...prev,
                      interest: pw.title,
                    }));
                    document.getElementById("expression-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold bg-white hover:bg-arya-forest hover:text-white text-arya-forest border border-arya-forest transition-colors"
                >
                  Select & Submit Inquiry →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Expression of Interest Form */}
      <section className="py-20 md:py-28 bg-arya-ivory" id="expression-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-arya-charcoal-100 shadow-xl space-y-8">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold text-arya-forest uppercase tracking-wider">
                Direct Inquiry Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-arya-charcoal-900 font-heading">
                Submit an Expression of Interest
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-600">
                Our secretariat reviews all submissions and replies within 2–3 business days.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-green-950 font-heading">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs sm:text-sm text-green-800 leading-relaxed max-w-md mx-auto">
                  Your expression of interest regarding <strong>{formData.interest}</strong> has been logged. Our secretariat team in Kitgum will review your message and follow up via email.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      organisation: "",
                      phone: "",
                      interest: "Institutional Partnership",
                      message: "",
                    });
                  }}
                  className="text-xs font-bold text-arya-forest hover:underline pt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-arya-charcoal-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Christine Auma"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-arya-charcoal-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. christine@organisation.org"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-arya-charcoal-700 mb-1.5">
                      Organisation / Affiliation (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Makerere University / Development Agency"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-arya-charcoal-700 mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                    >
                      <option value="Institutional Partnership">Institutional Partnership</option>
                      <option value="Volunteer & Internship">Volunteer & Internship</option>
                      <option value="Research & CSO Collaboration">Research & CSO Collaboration</option>
                      <option value="Support Our Work">Direct Community Support</option>
                      <option value="General Collaboration">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-arya-charcoal-700 mb-1.5">
                    Your Message / Proposal <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your proposed partnership, question, or area of collaboration..."
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Expression of Interest
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
