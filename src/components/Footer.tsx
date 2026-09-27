import React from 'react';
import { Sparkles, Phone, MapPin, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  Clean Clean <span className="text-sky-400 font-semibold">Services</span>
                </span>
                <p className="text-xs text-slate-400">Residential & Commercial Cleaning • Zürich</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md pt-1">
              Providing professional residential and commercial cleaning services across Zürich, Switzerland. Dedicated to thorough methodology, spotless surfaces, and dependable Swiss standards.
            </p>

            {/* Google Rating Summary */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white">{COMPANY_INFO.rating.score.toFixed(1)} / 5</span>
                  <span className="text-slate-400"> ({COMPANY_INFO.rating.reviewCount} Google reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Cleaning Services
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={() => handleNav('services')} className="hover:text-white text-left">
                  Residential Cleaning
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={() => handleNav('services')} className="hover:text-white text-left">
                  Commercial Cleaning
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={() => handleNav('services')} className="hover:text-white text-left">
                  Apartment & Flat Care
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={() => handleNav('services')} className="hover:text-white text-left">
                  Office & Desk Sanitizing
                </button>
              </li>
            </ul>
          </div>

          {/* Zürich Direct Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Zürich Location
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white block font-medium">Clean Clean Services</strong>
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="text-white font-semibold hover:text-sky-300 transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <button
                  id="footer-quote-cta"
                  onClick={onOpenQuote}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Request Cleaning Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and regulatory notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Clean Clean Services. Neunbrunnenstrasse 52, 8050 Zürich, Switzerland. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Professional Swiss Residential & Commercial Cleaning</span>
            <span>•</span>
            <button
              onClick={() => handleNav('contact')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
