import React from 'react';
import {
  Globe, ShieldCheck, Mail, Sparkles, ExternalLink,
  ChevronRight, Heart, Award, FileText, Scale, Lock
} from 'lucide-react';

export type ActiveTab = 'jobs' | 'career-studio' | 'discussions' | 'profile' | 'admin' | 'about' | 'privacy-policy' | 'terms';

interface FooterProps {
  currentTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  onOpenUpgradeModal: () => void;
}

export default function Footer({ currentTab, onNavigate, onOpenUpgradeModal }: FooterProps) {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Soomro Production (Span 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate('jobs')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  EURO<span className="text-blue-400">JOB</span> 👷
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-blue-300 font-semibold">
                  CHASE YOUR DREAM
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              EUROJOB is a career empowerment and employment facilitation platform designed to connect Asian applicants directly with authentic, verified European employers with legal visa sponsorship.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs space-y-1 max-w-md">
              <p className="text-[10px] uppercase tracking-widest text-blue-400 font-extrabold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                A Product of Soomro Production
              </p>
              <p className="text-slate-200 font-bold italic">
                &ldquo;Working on having the best for the people.&rdquo;
              </p>
              <p className="text-[11px] text-slate-400">
                Official Leadership & Inquiries: <a href="mailto:shahzaibs189@gmail.com" className="text-blue-300 underline font-semibold">shahzaibs189@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Platform & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'jobs' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                  Find EU Jobs (5,040+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career-studio')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'career-studio' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  AI CV & Cover Letter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discussions')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'discussions' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                  Candidate Discussions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpgradeModal}
                  className="hover:text-purple-300 text-purple-400 font-bold transition text-left flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  Upgrade Pro ($5/Month)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: European Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              European Destinations
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Germany (CE Drivers & Logistics)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Netherlands (Tech & Engineering)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Malta (Single Permit Hospitality)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Serbia & Lithuania (Trades)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Czech Republic, Finland & Norway
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Switzerland, France, Georgia, Armenia
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & AdSense Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'about' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                  About Us (Soomro Production)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy-policy')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'privacy-policy' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <Lock className="w-3 h-3 text-emerald-400" />
                  Privacy Policy (AdSense Compliant)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className={`hover:text-blue-400 transition text-left flex items-center gap-1.5 ${
                    currentTab === 'terms' ? 'text-blue-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <Scale className="w-3 h-3 text-amber-400" />
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a
                  href="mailto:shahzaibs189@gmail.com"
                  className="hover:text-blue-300 text-slate-400 transition text-left flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-blue-400" />
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & AdSense Notice */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> EUROJOB is an independent digital employment board and technological resume generation platform owned and operated by <strong>Soomro Production</strong>. EUROJOB is not a recruitment agency, immigration consultancy, embassy, or government visa-issuing body. Job listings are aggregated from verified European employers and public career feeds. Final entry visas, resident cards, and employment contracts remain the sovereign prerogative of the hiring employer and the national immigration authorities of the respective European nations.
          </p>
          <p>
            <strong className="text-slate-300">Google AdSense Disclosure:</strong> Third-party vendors, including Google, use cookies (including the DoubleClick DART cookie) to serve advertisements based on a user&rsquo;s prior visits to this website. Users may opt out of personalized advertising by visiting{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Google Ads Settings
            </a>.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">
            &copy; 2026 EUROJOB &mdash; A Product of Soomro Production. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition">About</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition">Privacy Policy</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition">Terms of Service</button>
            <span>&bull;</span>
            <a href="mailto:shahzaibs189@gmail.com" className="hover:text-white transition">shahzaibs189@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
