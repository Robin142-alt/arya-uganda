import React from "react";
import Link from "next/link";
import Image from "next/image";
import { organizationData } from "@/data/organization";
import { MapPin, Mail, Phone, Clock, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arya-charcoal-950 text-white border-t border-arya-charcoal-800">
      {/* Top Banner inside Footer */}
      <div className="bg-arya-forest-900 border-b border-arya-forest-800/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-arya-ochre/20 flex items-center justify-center text-arya-ochre shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Locally-Led • Dignified • Accountable
              </p>
              <p className="text-xs text-arya-forest-200">
                Signatory to the Charter for Change & Member of the Kitgum NGO Forum
              </p>
            </div>
          </div>
          <Link
            href="/partners"
            className="text-xs font-semibold text-arya-ochre-300 hover:text-white transition-colors underline underline-offset-4"
          >
            Learn About Our Partnerships & Networks →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-arya-charcoal-800">
          {/* Column 1: Organization Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl p-1 border border-white/15">
                <Image
                  src="/images/arya-logo-transparent.png"
                  alt="ARYA Crest"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                  ARYA
                </span>
                <span className="text-[11px] text-arya-charcoal-400 font-medium uppercase tracking-wider">
                  Est. 2002 • Kitgum, Uganda
                </span>
              </div>
            </div>
            <p className="text-sm text-arya-charcoal-300 leading-relaxed">
              Acholi Renaissance Youth Association is a grassroots organisation working alongside communities in Northern Uganda toward sustainable development, health equity, youth participation, and resilient livelihoods.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-arya-charcoal-800 text-arya-ochre-300 px-3 py-1.5 rounded-md border border-arya-charcoal-700">
                <span className="w-1.5 h-1.5 rounded-full bg-arya-ochre"></span>
                Healthy. Educated. Self-Reliant.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation / Pillars */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-arya-ochre mb-4">
              Explore Our Work
            </h3>
            <ul className="space-y-2.5 text-sm text-arya-charcoal-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about/mission-vision" className="hover:text-white transition-colors text-arya-ochre-300">
                  Vision, Mission & Values
                </Link>
              </li>
              <li>
                <Link href="/about/strategic-plan" className="hover:text-white transition-colors text-arya-ochre-300">
                  Strategic Plan (2023–2027)
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="hover:text-white transition-colors">
                  Integrated Programmes
                </Link>
              </li>
              <li>
                <Link href="/programmes#girls-young-women" className="hover:text-white transition-colors">
                  Her Voice & AGYW Empowerment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects & Field Actions
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Impact & Community Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Engagement & Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-arya-ochre mb-4">
              Engagement & Evidence
            </h3>
            <ul className="space-y-2.5 text-sm text-arya-charcoal-300">
              <li>
                <Link href="/get-involved" className="hover:text-white transition-colors font-medium text-arya-forest-300">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved#volunteer" className="hover:text-white transition-colors">
                  Volunteer / Internship
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partners & Civil Society Networks
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Publications & Policy Briefs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Field Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Office & Contact Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-arya-ochre mb-4">
              Kitgum Secretariat
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-arya-charcoal-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-arya-ochre shrink-0 mt-0.5" />
                <span>
                  {organizationData.location.address}, {organizationData.location.landmark}, {organizationData.location.town}, Uganda. ({organizationData.location.poBox})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-arya-ochre shrink-0" />
                <a
                  href={`mailto:${organizationData.contact.generalEmail}`}
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  {organizationData.contact.generalEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-arya-ochre shrink-0 mt-0.5" />
                <div>
                  <p>{organizationData.contact.officialPhones[0]}</p>
                  <p>{organizationData.contact.officialPhones[1]} (WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-arya-ochre shrink-0 mt-0.5" />
                <span className="text-xs text-arya-charcoal-400">
                  {organizationData.contact.officeHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-arya-charcoal-400">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} Acholi Renaissance Youth Association (ARYA). All rights reserved.
            </p>
            <p className="mt-1 text-[11px] text-arya-charcoal-500">
              Registered NGO & CBO in Uganda • Dedicated to Community-Led Self-Reliance.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-arya-charcoal-400">
            <Link href="/about#governance" className="hover:text-white transition-colors">
              Accountability
            </Link>
            <span>•</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              Safeguarding Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Feedback & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
