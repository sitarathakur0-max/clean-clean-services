import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Layers,
  Building2,
  Home
} from 'lucide-react';
import { Page } from '../types';
import { COMPANY_INFO, QUALITY_PILLARS } from '../data/companyData';
import { RatingBadge } from '../components/RatingBadge';
import pristineHomeImg from '../assets/images/pristine_swiss_home_1789907450988.jpg';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div id="about-page" className="w-full pt-28 pb-20">
      {/* Top Banner Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>About Clean Clean Services</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
              Dedicated to Precision & Pristine Cleanliness in Zürich
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Based at <strong>Neunbrunnenstrasse 52, 8050 Zürich</strong>, Clean Clean Services provides comprehensive residential and commercial cleaning services shaped by methodical attention to detail and reliable Swiss quality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Company Narrative & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column with Generated Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <img
                  src={pristineHomeImg}
                  alt="Spotless, airy Swiss interior with pristine clean panoramic windows in Zurich"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl clean-glass border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                        Swiss Standards
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Methodical Hygiene & Care
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      8050 Zürich
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                Our Foundation
              </span>

              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                Our Philosophy of Structured Cleaning
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At Clean Clean Services, our service model is centered on thoroughness rather than rushed work. We recognize that both private homes and corporate workplaces require distinct cleaning disciplines. In homes, the focus is on personal comfort, sanitary food areas, and spotless bathrooms. In commercial premises, the priority is professional presentation, employee hygiene, and immaculate meeting spaces.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Home className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Residential Expertise</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Focused care for apartments and houses, ensuring parquet floors, delicate surfaces, and bathrooms remain immaculate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Commercial Thoroughness</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Tailored cleaning routines for offices, desks, meeting facilities, and commercial restrooms across Zürich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <RatingBadge variant="standard" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Our Core Service Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Principles guiding every appointment handled by Clean Clean Services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Local Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Zürich Location</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                  Neunbrunnenstrasse 52, 8050 Zürich
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Centrally based in Zürich 8050, we coordinate prompt scheduling across residential neighborhoods and business centers. Our 4.9/5 rating across 70 Google reviews stands as a testament to our continuous dedication.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${COMPANY_INFO.phoneTel}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_INFO.phoneFormatted}</span>
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <RatingBadge variant="card" className="w-full max-w-xs !bg-white !text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
