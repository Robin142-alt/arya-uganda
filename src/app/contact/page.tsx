"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactConfig } from "@/data/contact";
import { organizationData } from "@/data/organization";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Building,
  AlertCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    subject: "",
    interest: "General Enquiry",
    message: "",
    honeypot: "", // anti-spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Anti-spam honeypot check
    if (formData.honeypot) {
      console.warn("Spam bot detected.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Direct Communications"
        title="Contact Our Secretariat"
        subtitle="We welcome inquiries from community members, local government, development partners, civil society, and international grantmakers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Main Content Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-arya-ochre-700 uppercase tracking-wider">
                  Secretariat Headquarters
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-arya-charcoal-900 font-heading">
                  Acholi Renaissance Youth Association (ARYA)
                </h2>
                <p className="text-sm text-arya-charcoal-600 leading-relaxed">
                  Located centrally in Kitgum Municipality, Northern Uganda, opposite the District Council Hall.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="p-5 rounded-2xl bg-arya-ivory border border-arya-charcoal-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-arya-charcoal-700 space-y-1">
                    <p className="font-bold text-arya-charcoal-900">Physical & Postal Address</p>
                    <p>{contactConfig.address.line1}</p>
                    <p>{contactConfig.address.landmark}</p>
                    <p>{contactConfig.address.box}</p>
                    <p className="text-arya-charcoal-500 font-medium">
                      {contactConfig.address.town}, {contactConfig.address.country}
                    </p>
                  </div>
                </div>

                {/* Email Inquiries */}
                <div className="p-5 rounded-2xl bg-arya-ivory border border-arya-charcoal-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-arya-charcoal-700 space-y-1">
                    <p className="font-bold text-arya-charcoal-900">Official Email</p>
                    <a
                      href={`mailto:${contactConfig.email.primary}`}
                      className="text-arya-forest font-semibold hover:underline block"
                    >
                      {contactConfig.email.primary}
                    </a>
                    <p className="text-[11px] text-arya-charcoal-500">
                      Official correspondence, proposals & grant inquiries
                    </p>
                  </div>
                </div>

                {/* Telephone Lines */}
                <div className="p-5 rounded-2xl bg-arya-ivory border border-arya-charcoal-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-arya-charcoal-700 space-y-1">
                    <p className="font-bold text-arya-charcoal-900">Telephone Lines</p>
                    {contactConfig.phones.map((ph, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                        <span className="text-arya-charcoal-500">{ph.label}:</span>
                        <span className="font-semibold text-arya-charcoal-800">{ph.number}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-arya-ivory border border-arya-charcoal-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-arya-charcoal-700 space-y-1">
                    <p className="font-bold text-arya-charcoal-900">Office Working Hours</p>
                    <p>{contactConfig.officeHours.weekdays}</p>
                    <p className="text-arya-charcoal-500 text-[11px]">
                      {contactConfig.officeHours.weekends}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-arya-ivory rounded-3xl p-8 sm:p-10 border border-arya-charcoal-200 shadow-sm space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-arya-charcoal-900 font-heading">
                    Send a Message to ARYA
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600">
                    Complete the form below and our secretariat will direct your inquiry to the relevant programme lead.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-green-950 font-heading">
                      Message Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-green-800 leading-relaxed max-w-md mx-auto">
                      Thank you for contacting ARYA. Your inquiry regarding <strong>{formData.subject || formData.interest}</strong> has been forwarded to the Kitgum Secretariat.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          organisation: "",
                          phone: "",
                          subject: "",
                          interest: "General Enquiry",
                          message: "",
                          honeypot: "",
                        });
                      }}
                      className="text-xs font-bold text-arya-forest hover:underline pt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Anti-spam honeypot hidden field */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website_verify"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dennis Ocan"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. dennis@example.com"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Organisation / Institution
                        </label>
                        <input
                          type="text"
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="e.g. Partner NGO / Agency"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +256 700 000 000"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Area of Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        >
                          {contactConfig.areaOfInterests.map((item, idx) => (
                            <option key={idx} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Brief topic of your inquiry"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-arya-charcoal-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your detailed message, request, or proposal here..."
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="md"
                        className="w-full"
                        icon={<Send className="w-4 h-4" />}
                      >
                        {isSubmitting ? "Sending..." : "Submit Inquiry to Secretariat"}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map & Regional Presence */}
      <section className="py-16 md:py-20 bg-arya-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-arya-charcoal-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arya-forest-100 text-arya-forest text-xs font-bold uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Roots</span>
              </div>
              <h3 className="text-2xl font-bold text-arya-charcoal-900 font-heading">
                Kitgum Municipality, Acholi Sub-Region
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                ARYA operates from its permanent coordination office on Bwona Gweno / Awich Road, directly across from the Kitgum District Council Hall. We implement field projects across Kitgum and Lamwo districts.
              </p>
              <div className="pt-2 text-xs text-arya-charcoal-700 space-y-1.5">
                <p>• <strong>District:</strong> Kitgum District Local Government</p>
                <p>• <strong>Sub-Region:</strong> Acholi, Northern Uganda</p>
                <p>• <strong>Nearest Landmark:</strong> District Council Hall</p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-arya-forest-950 text-white rounded-2xl p-6 sm:p-8 border border-arya-forest-800 space-y-4">
              <span className="text-xs font-bold text-arya-ochre-300 uppercase tracking-wider">
                Direct WhatsApp Hotline
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                Instant Engagement with Secretariat
              </h4>
              <p className="text-xs sm:text-sm text-arya-charcoal-300 leading-relaxed">
                For swift responses on field meetings, youth dialogues, and general queries, our official WhatsApp line is open during business hours.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${contactConfig.whatsApp.number}?text=${encodeURIComponent(contactConfig.whatsApp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp ({contactConfig.whatsApp.displayNumber})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
