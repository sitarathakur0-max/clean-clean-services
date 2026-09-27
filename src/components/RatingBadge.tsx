import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface RatingBadgeProps {
  variant?: 'compact' | 'standard' | 'large' | 'card';
  className?: string;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ variant = 'standard', className = '' }) => {
  const { score, maxScore, reviewCount, platform } = COMPANY_INFO.rating;

  if (variant === 'compact') {
    return (
      <div 
        id="rating-badge-compact"
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-100 shadow-xs text-slate-800 text-xs font-medium ${className}`}
      >
        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-bold text-slate-900">{score.toFixed(1)}</span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-600">{reviewCount} reviews</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div 
        id="rating-badge-card"
        className={`bg-white rounded-2xl p-6 border border-sky-100 shadow-sm relative overflow-hidden ${className}`}
      >
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 text-sky-600">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-900">Verified Reputation</span>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {platform}
          </span>
        </div>

        <div className="flex items-baseline gap-3 my-2">
          <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{score.toFixed(1)}</span>
          <span className="text-slate-400 text-sm font-medium">/ {maxScore.toFixed(1)} rating</span>
        </div>

        <div className="flex items-center gap-1 text-amber-400 my-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-sm text-slate-600 mt-2 font-medium">
          Based on <strong className="text-slate-900 font-bold">{reviewCount} Google reviews</strong> for our residential and commercial services in Zürich.
        </p>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div 
        id="rating-badge-large"
        className={`inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-sky-100 shadow-md ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 mt-0.5">{platform}</span>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
        </div>

        <div className="text-center sm:text-left">
          <div className="flex items-baseline justify-center sm:justify-start gap-1.5">
            <span className="text-2xl font-black text-slate-900">{score.toFixed(1)}</span>
            <span className="text-xs text-slate-400 font-semibold">/ {maxScore.toFixed(1)}</span>
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full ml-1">
              Top Rated
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Based on <strong className="text-slate-900 font-semibold">{reviewCount} customer reviews</strong>
          </p>
        </div>
      </div>
    );
  }

  // Standard variant
  return (
    <div 
      id="rating-badge-standard"
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-sky-200/80 shadow-xs ${className}`}
    >
      <div className="flex items-center gap-1 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <span className="font-bold text-slate-900 text-sm">{score.toFixed(1)}/5</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600 font-medium">{reviewCount} Google reviews</span>
      </div>
    </div>
  );
};
