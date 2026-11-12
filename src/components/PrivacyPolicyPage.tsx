import React from 'react';
import { Shield, Lock, Eye, CheckCircle2, AlertTriangle, Mail, ExternalLink } from 'lucide-react';
import AdSenseBanner from './AdSenseBanner';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200">
            <Shield className="w-4 h-4 text-emerald-400" />
            Google AdSense, GDPR & International Privacy Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-blue-200">
            EUROJOB — A Digital Product of Soomro Production • Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">1</span>
              Introduction & Data Controller
            </h2>
            <p>
              This Privacy Policy governs the manner in which <strong>EUROJOB</strong>, a digital platform owned and operated by <strong>Soomro Production</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), collects, uses, maintains, protects, and discloses personal information collected from users (&ldquo;you&rdquo;, &ldquo;User&rdquo;, or &ldquo;Applicant&rdquo;) of the EUROJOB web application.
            </p>
            <p>
              We are strictly committed to safeguarding your personal data in accordance with international data protection principles, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google AdSense Publisher Program Policies.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">2</span>
              Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when using EUROJOB services, as well as automated diagnostic data:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Account Credentials:</strong> Full name and email address provided during registration (either via Google OAuth single sign-on or standard email registration).
              </li>
              <li>
                <strong>Candidate Profile & Trade Data:</strong> Nationality, target employment trade (e.g., Tech & IT, Truck Driving, Construction, Agriculture), years of professional experience, technical competencies, and self-reported passport and driving license possession.
              </li>
              <li>
                <strong>Europass Resume & Cover Letter Input:</strong> Residential address, phone/WhatsApp number, date of birth, passport number and passport expiration date, educational history, work history, and language proficiency voluntarily entered in our Career Studio for client-side PDF document generation.
              </li>
              <li>
                <strong>PRO Subscription & Payment Records:</strong> For applicants purchasing the optional $5/month PRO membership, we collect the payment transaction reference ID, payment method (Easypaisa or ACH Bank Transfer), target registration email, and the voluntarily uploaded payment receipt screenshot. We <em>never</em> collect, handle, or store debit/credit card numbers or banking passwords.
              </li>
              <li>
                <strong>Automated Log & Device Data:</strong> IP address, browser type, operating system, referring URL, time stamps, and anonymous user behavior patterns collected for diagnostic security and anti-fraud monitoring.
              </li>
            </ul>
          </section>

          {/* Section 3: Google AdSense, Cookies & DART Disclosures (CRITICAL FOR ADSENSE) */}
          <section className="space-y-3 p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
            <h2 className="text-lg sm:text-xl font-extrabold text-blue-950 border-b border-blue-200 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-700 text-white text-xs font-extrabold flex items-center justify-center">3</span>
              Google AdSense & Third-Party Advertising Cookies
            </h2>
            <p className="font-semibold text-blue-950">
              Please read this section carefully regarding advertising cookies used by Google and third-party vendors on this site:
            </p>
            <ul className="space-y-2.5 list-disc pl-5 text-slate-800">
              <li>
                <strong>Third-Party Vendors & Google Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&rsquo;s prior visits to this website or other websites on the internet.
              </li>
              <li>
                <strong>The DoubleClick DART Cookie:</strong> Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to EUROJOB and/or other websites on the internet.
              </li>
              <li>
                <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising by visiting Google&rsquo;s official Ads Settings at:{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 underline inline-flex items-center gap-1 hover:text-blue-900"
                >
                  https://adssettings.google.com <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
              <li>
                Alternatively, users can opt out of a third-party vendor&rsquo;s use of cookies for personalized advertising by visiting the Network Advertising Initiative consumer opt-out page at{' '}
                <a
                  href="http://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 underline inline-flex items-center gap-1 hover:text-blue-900"
                >
                  www.aboutads.info/choices/ <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
              <li>
                <strong>AdSense Policy Compliance:</strong> EUROJOB strictly adheres to the Google Publisher Policies. Advertisements are clearly designated with the header &ldquo;ADVERTISEMENT&rdquo; and are never placed in deceptive positions, adjacent to action triggers (such as &ldquo;Apply Now&rdquo; or file upload inputs), or inside floating popups.
              </li>
            </ul>
          </section>

          <AdSenseBanner slotId="privacy-mid-slot" />

          {/* Section 4: How We Use Collected Information */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">4</span>
              How We Use Your Information
            </h2>
            <p>Soomro Production uses candidate and user data solely for legitimate, transparent purposes:</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>To provide, operate, and maintain the EUROJOB European career board.</li>
              <li>To enforce the 5-job free application limit and activate 30-day PRO memberships upon verified payment proof.</li>
              <li>To generate client-side Europass Standard CVs and tailored Cover Letters in PDF format for direct employer submission.</li>
              <li>To compute candidate AI Profile & Document Acceptance match percentages against European visa sponsorship criteria.</li>
              <li>To prevent unauthorized automated access, spam submissions, and fraudulent impersonation.</li>
              <li>To provide timely email notifications regarding Pro membership activations, expiration reminders, and customer support inquiries.</li>
            </ul>
          </section>

          {/* Section 5: Data Protection & Non-Sale Pledge */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">5</span>
              Data Protection & Non-Sale Pledge
            </h2>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Our Absolute Privacy Guarantee:</p>
                <p className="mt-0.5 text-xs text-emerald-900">
                  We DO NOT sell, rent, monetize, or trade applicant personal data, passport numbers, email addresses, or phone numbers to third-party marketing brokers or unauthorized recruitment agencies. Your career data belongs exclusively to you.
                </p>
              </div>
            </div>
            <p>
              We implement industry-standard HTTPS/TLS encryption for all data transmissions. Only authorized technical administrators under non-disclosure obligations have access to verify payment screenshots and candidate account statuses.
            </p>
          </section>

          {/* Section 6: Data Subject Rights & Deletion Requests */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">6</span>
              Your Rights & Data Deletion Requests
            </h2>
            <p>
              Regardless of your geographical location, you possess the right to access, rectify, export, or permanently erase your personal information from our databases.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-bold text-slate-900">How to Request Permanent Account / Data Deletion:</p>
              <p className="text-xs text-slate-600">
                To request permanent deletion of your account, application logs, and any uploaded payment screenshots, please send an email from your registered email address to:
              </p>
              <p className="text-sm font-bold text-blue-800">
                shahzaibs189@gmail.com
              </p>
              <p className="text-[11px] text-slate-500">
                Subject line: <code>Data Deletion Request — [Your Email]</code>. All associated records will be permanently purged from our active databases within 48 business hours, and confirmation will be returned.
              </p>
            </div>
          </section>

          {/* Section 7: Children's Online Privacy Protection */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">7</span>
              Children&rsquo;s Privacy (Strictly 18+)
            </h2>
            <p>
              EUROJOB facilitates legal overseas work opportunities in European jurisdictions that require candidates to be at least 18 years of age. We do not knowingly solicit or collect information from individuals under the age of 18. If we become aware that a minor has submitted personal data, we will immediately delete that information.
            </p>
          </section>

          {/* Section 8: Changes to this Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">8</span>
              Changes to this Privacy Policy
            </h2>
            <p>
              Soomro Production reserves the right to update this Privacy Policy to reflect regulatory, technological, or legal developments. When changes occur, the &ldquo;Last Updated&rdquo; date at the top of this document will be amended. We encourage users to periodically review this page.
            </p>
          </section>

          {/* Section 9: Official Contact */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-extrabold flex items-center justify-center">9</span>
              Contact Information & Privacy Officer
            </h2>
            <p>For questions, privacy inquiries, or AdSense compliance notices, please contact:</p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs space-y-1">
              <p className="font-bold text-blue-900">Soomro Production — EUROJOB Privacy & Compliance</p>
              <p>Attention: Shahzaib Soomro (Managing Director)</p>
              <p>Official Support Email: <a href="mailto:shahzaibs189@gmail.com" className="font-bold underline text-blue-800">shahzaibs189@gmail.com</a></p>
              <p className="text-slate-500 pt-1">Response Commitment: Within 24–48 hours</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
