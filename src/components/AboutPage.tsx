import React from 'react';
import {
  ShieldCheck, Globe, Building2, CheckCircle2, Award, Heart,
  Mail, Users, Sparkles, MapPin, Briefcase, ArrowRight, ExternalLink
} from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

interface AboutPageProps {
  onNavigateToJobs: () => void;
  onNavigateToStudio: () => void;
}

export default function AboutPage({ onNavigateToJobs, onNavigateToStudio }: AboutPageProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-200">
            <Sparkles className="w-4 h-4 text-purple-400" />
            A Digital Empowerment Initiative of Soomro Production
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About EUROJOB & <span className="text-blue-300">Soomro Production</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto italic">
            &ldquo;Working on having the best for the people.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-blue-200/90 max-w-3xl mx-auto leading-relaxed pt-2">
            EUROJOB is an authentic European career facilitation platform created to protect Asian candidates from fraudulent recruitment agencies by providing transparent, direct access to verified European jobs with legal work visa sponsorship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Mission & Purpose Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
              The Purpose Behind EUROJOB
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Eliminating Recruitment Scams & Opening Real European Doors
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every year, thousands of qualified and hard-working candidates across Pakistan, India, Bangladesh, Nepal, Sri Lanka, and the Philippines fall victim to predatory overseas employment agents who charge thousands of dollars for non-existent jobs or fraudulent tourist visas.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Soomro Production</strong> founded EUROJOB with an uncompromising philosophy: <span className="text-blue-900 font-bold">&ldquo;working on having the best for the people.&rdquo;</span> We believe every person deserves direct, cost-transparent access to European employers without predatory middlemen, counterfeit documentation, or debt bondage.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onNavigateToJobs}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition"
              >
                Explore 5,000+ Verified Jobs <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onNavigateToStudio}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition"
              >
                Europass CV Studio <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Our Core Commitments
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Verified Visa Sponsorship:</strong> We aggregate direct employer postings with confirmed European work permit channels (German Vorabzustimmung, Maltese Single Permit, Czech Employee Card, Serbian D-Visa).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Democratized Access:</strong> 5 free job applications for every registered candidate, free European career resources, and a modest $5/mo PRO tier to keep servers and manual verification operational.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>AI Matchmaking & Official Europass CVs:</strong> Empowering candidates with intelligent acceptance probability scoring and printable European-standard resumes that pass European employer screening.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Human Verification:</strong> Manual inspection of all payment proofs within 24 hours to maintain strict platform integrity.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* AdSense Policy-Safe Banner */}
        <AdSenseBanner slotId="about-mid-slot" />

        {/* 13 European Countries & 4 Core Trades */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Pan-European Reach
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              13 Verified European Destinations & 4 High-Demand Sectors
            </h2>
            <p className="text-xs text-slate-500">
              EUROJOB continuously indexes thousands of active employment opportunities matching Asian candidates with bilateral labor agreements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { country: 'Germany', highlight: 'Heavy CE Drivers & Logistics' },
              { country: 'Netherlands', highlight: 'Tech, Cloud & Engineering' },
              { country: 'Malta', highlight: 'Hospitality & Services' },
              { country: 'Serbia', highlight: 'Commercial Construction & Welding' },
              { country: 'Lithuania', highlight: 'International Freight Transport' },
              { country: 'Czech Republic', highlight: 'Industrial CNC & Electricians' },
              { country: 'Switzerland', highlight: 'Automated Agro & Dairy' },
              { country: 'Finland', highlight: 'Hydroponics & Greenhouses' },
              { country: 'Norway', highlight: 'Cold-Chain Seafood Processing' },
              { country: 'France', highlight: 'Warehouse & Logistics' },
              { country: 'Georgia', highlight: 'Infrastructure Construction' },
              { country: 'Armenia', highlight: 'Software & Cybersecurity' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <p className="font-extrabold text-slate-900 text-sm">{item.country}</p>
                <p className="text-[10px] text-blue-700 font-medium mt-0.5">{item.highlight}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
              <p className="font-extrabold text-sm text-blue-900">Tech & IT</p>
              <p className="text-xs text-slate-600 mt-1">Full-stack, Cloud, QA, DevOps, and Cybersecurity positions.</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <p className="font-extrabold text-sm text-emerald-900">Truck & Logistics</p>
              <p className="text-xs text-slate-600 mt-1">CE License Highway Trailers, Warehouse Reach-Trucks & Forklifts.</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
              <p className="font-extrabold text-sm text-amber-900">Construction & Trades</p>
              <p className="text-xs text-slate-600 mt-1">MIG/MAG Welders, Electricians, CNC Operators & Helpers.</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
              <p className="font-extrabold text-sm text-purple-900">Agro & Farming</p>
              <p className="text-xs text-slate-600 mt-1">Hydroponic Greenhouses, Dairy Herds & Seasonal Harvest.</p>
            </div>
          </div>
        </section>

        {/* Corporate Entity & Official Verification Box */}
        <section className="bg-gradient-to-br from-[#0F172A] to-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Official Corporate Entity & Ownership
              </span>
              <h3 className="text-2xl font-extrabold mt-1">Soomro Production</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Digital Innovation, Media Technologies & Candidate Empowerment
              </p>
            </div>
            <div className="bg-blue-600/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-300">
              Verified Legal Publisher
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-bold text-[10px]">Operating Brand</p>
              <p className="text-sm font-extrabold text-white">EUROJOB</p>
              <p className="text-slate-400">A Proprietary Product of Soomro Production</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-bold text-[10px]">Founder & Administrator</p>
              <p className="text-sm font-extrabold text-white">Shahzaib Soomro</p>
              <p className="text-slate-400">Chief Executive & Technical Director</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-bold text-[10px]">Official Support & Inquiries</p>
              <p className="text-sm font-extrabold text-blue-400">shahzaibs189@gmail.com</p>
              <p className="text-slate-400">SLA: Verified responses within 24 hours</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">Ethical Publisher & Verification Pledge:</p>
              <p className="mt-0.5 leading-relaxed text-[11px] text-slate-300">
                Soomro Production does not act as an unlicensed labor contractor or charge illegal placement fees. EUROJOB operates as a transparent job board and technological CV generation studio. Final visa issuance remains the exclusive jurisdiction of the respective European sovereign embassies and immigration ministries.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
