import React from 'react';

// ============================================================================
// GOOGLE ADSENSE COMPLIANCE CONFIGURATION
// Replace with your Google AdSense Publisher Client ID (e.g., 'ca-pub-1234567890123456')
// When populated with an active client ID, the AdSense script dynamically activates
// and displays responsive, compliant ad slots across EUROJOB.
export const ADSENSE_PUBLISHER_ID: string = ""; // e.g. "ca-pub-1234567890123456"

interface AdSenseBannerProps {
  slotId?: string;
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

export default function AdSenseBanner({
  slotId = "default-slot",
  className = "",
  format = 'horizontal'
}: AdSenseBannerProps) {
  const isLive = Boolean(ADSENSE_PUBLISHER_ID && ADSENSE_PUBLISHER_ID.trim().startsWith('ca-pub-'));

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 mx-auto w-full max-w-5xl px-4 ${className}`}
    >
      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 px-1">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          Advertisement
        </span>
        <span className="text-[9px] text-slate-400 font-normal">
          Google AdSense Policy-Safe Placement
        </span>
      </div>

      {isLive ? (
        <div className="overflow-hidden bg-slate-50 rounded-2xl border border-slate-200 text-center min-h-[90px] flex items-center justify-center p-2 shadow-sm">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px', width: '100%' }}
            data-ad-client={ADSENSE_PUBLISHER_ID}
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      ) : (
        <div className="overflow-hidden bg-slate-100/90 rounded-2xl border border-dashed border-slate-300 p-5 text-center shadow-xs">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full mb-2">
            <span>Google AdSense Responsive Unit</span>
            <span className="text-[10px] text-slate-400 font-normal">({format === 'horizontal' ? '728x90 Leaderboard / Fluid' : '300x250 Medium Rectangle'})</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
            Ad slot ready for Google AdSense monetization. Update <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[10px]">ADSENSE_PUBLISHER_ID</code> in code to display live Google advertisements.
          </p>
        </div>
      )}
    </aside>
  );
}
