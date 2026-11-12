import React from 'react';
import { Scale, ShieldCheck, AlertTriangle, CheckCircle2, Lock, FileText, Mail, HelpCircle } from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200">
            <Scale className="w-4 h-4 text-amber-400" />
            Official Terms of Service & User Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-blue-200">
            EUROJOB — A Digital Product of Soomro Production • Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1: Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">1</span>
              Agreement to Terms
            </h2>
            <p>
              By accessing, browsing, registering for, or using the <strong>EUROJOB</strong> web application (the &ldquo;Platform&rdquo; or &ldquo;Service&rdquo;), owned and operated by <strong>Soomro Production</strong>, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions (&ldquo;Terms&rdquo;) and our Privacy Policy.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must discontinue your use of the Platform immediately.
            </p>
          </section>

          {/* Section 2: Platform Role & Sovereign Immigration Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950">
            <h2 className="text-lg sm:text-xl font-extrabold text-amber-950 border-b border-amber-200 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-amber-700 text-white text-xs font-extrabold flex items-center justify-center">2</span>
              Platform Role & Legal Sovereign Immigration Disclaimer
            </h2>
            <p className="font-bold">
              EUROJOB is an employment information, candidate facilitation, and digital resume generation tool operated by Soomro Production.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-xs text-amber-900">
              <li>
                <strong>No Recruitment Agency or Legal Representation:</strong> EUROJOB is NOT a recruitment agency, immigration consultancy, visa broker, or law firm. We do not act as an overseas employment promoter.
              </li>
              <li>
                <strong>No Visa Issuance Guarantee:</strong> While all jobs posted on EUROJOB advertise employer willingness to provide legal visa sponsorship (e.g., German Vorabzustimmung pre-approval, Maltese Identità Single Permit, Czech Employee Card, Serbian D-Visa), final work visa approval, issuance, or rejection rests <em>exclusively</em> with sovereign national ministries, foreign embassies, consulates, and immigration departments.
              </li>
              <li>
                <strong>Direct Employer Contracts:</strong> All formal contracts of employment, salary disbursements, accommodation leases, and airfare arrangements are strictly between the applicant and the hiring European employer. Soomro Production accepts no responsibility or financial liability for employment disputes or embassy processing delays.
              </li>
            </ul>
          </section>

          <AdSenseBanner slotId="terms-mid-slot" />

          {/* Section 3: Freemium & PRO ($5/Month) Subscription Terms */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">3</span>
              Freemium Application Model & PRO ($5/Month) Subscription Terms
            </h2>
            <p>
              EUROJOB provides both free and optional premium membership tiers to maintain platform operations, server costs, and manual verification staff:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Free Tier (5 Applications):</strong> Every newly registered candidate (via Google or Email) receives <strong>5 complimentary job applications</strong> to test the platform. Free users may browse all jobs and participate in discussions.
              </li>
              <li>
                <strong>PRO Membership ($5/Month):</strong> Provides unlimited European job applications for <strong>30 calendar days</strong>, real-time AI Profile & Document Acceptance Match percentages, and full access to the Europass Resume and Company-Tailored Cover Letter PDF Generator.
              </li>
              <li>
                <strong>Payment Methods:</strong> PRO subscriptions may be purchased locally in Pakistan via <strong>Easypaisa</strong> (SHAH ZAIB SOOMRO — 03003608184) for PKR 1,400 or internationally via <strong>Cross River Bank ACH Bank Transfer</strong> for $5.00 USD.
              </li>
              <li>
                <strong>24-Hour Verification Window:</strong> Because payments are verified manually by human administrators to eliminate credit card fraud, PRO activation takes up to <strong>24 hours</strong> from the time the candidate submits their transaction ID and receipt screenshot.
              </li>
              <li>
                <strong>3-Day Expiration Warning & Auto-Downgrade:</strong> Candidates receive advance visual notifications 3 days before their 30-day Pro cycle concludes. Once the 30 days expire, accounts automatically return to the Free plan unless renewed.
              </li>
            </ul>

            {/* Non-Refundable Policy Box */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-950 space-y-2 mt-4">
              <div className="flex items-center gap-2 font-extrabold text-sm text-red-900">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                STRICT NON-REFUNDABLE PAYMENT POLICY (MANDATORY NOTICE)
              </div>
              <p className="text-xs leading-relaxed text-red-900">
                When submitting payment proof, you MUST input the exact <strong>registered, signed-up EUROJOB email address</strong> on which you want PRO activated. If a payment is submitted for an unregistered, mistyped, or non-existent email account, PRO cannot be activated and the transaction is strictly <strong>NON-REFUNDABLE</strong>. Soomro Production incurs irreversible manual banking and administrative reconciliation costs upon receiving any verification request. Please verify your registered email before sending funds.
              </p>
            </div>
          </section>

          {/* Section 4: User Conduct & Prohibited Acts */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">4</span>
              User Conduct & Prohibited Activities
            </h2>
            <p>Users agree to use EUROJOB exclusively for lawful career purposes. You agree NOT to:</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Submit forged, stolen, expired, or counterfeit passports, driver&rsquo;s licenses, police clearance certificates, or academic credentials.</li>
              <li>Impersonate another individual, employer, or immigration official.</li>
              <li>Post commercial solicitations, unauthorized agency advertisements, scam referral links, or abusive language in the Candidate Discussions forum.</li>
              <li>Deploy automated bots, scrapers, data-mining scripts, or denial-of-service vectors against EUROJOB servers.</li>
              <li>Sell or transfer your EUROJOB account or PRO status to another person.</li>
            </ul>
            <p className="text-xs text-slate-500">
              Violations will result in immediate permanent account termination, forfeiture of any remaining Pro days, and potential reporting to local law enforcement authorities.
            </p>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">5</span>
              Intellectual Property Rights
            </h2>
            <p>
              The EUROJOB brand, logo, &ldquo;CHASE YOUR DREAM&rdquo; trademark, visual styling, algorithmic AI scoring formulas, and digital Europass builder templates are the exclusive intellectual property of <strong>Soomro Production</strong>. No content, graphics, or code may be reproduced, reverse-engineered, or redistributed without prior written consent.
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">6</span>
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Soomro Production, its directors, developers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="space-y-1 list-disc pl-5 text-xs text-slate-600">
              <li>An employer&rsquo;s decision to accept, reject, or interview an applicant.</li>
              <li>Embassy visa processing delays, visa refusals, border rejections, or immigration policy amendments by EU member states.</li>
              <li>Temporary technical downtime or service interruptions.</li>
            </ul>
          </section>

          {/* Section 7: Governing Law & Support */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">7</span>
              Governing Law & Inquiries
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws applicable to digital platform operations, without regard to conflict of law provisions.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <p className="font-bold text-slate-900">Legal Department — Soomro Production</p>
              <p>Official Administrator: Shahzaib Soomro</p>
              <p>Contact Email: <a href="mailto:shahzaibs189@gmail.com" className="font-bold text-blue-700 underline">shahzaibs189@gmail.com</a></p>
              <p className="text-slate-500">Subject: <code>Terms & Legal Inquiry</code></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
