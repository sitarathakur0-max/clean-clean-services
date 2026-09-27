import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Home, 
  Building2, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Eye, 
  Check, 
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { Page, ServiceCategory } from '../types';
import { COMPANY_INFO, FAQS_DATA, QUALITY_PILLARS, CLEANING_STEPS } from '../data/companyData';
import { RatingBadge } from '../components/RatingBadge';

// Import generated realistic local images
import heroApartmentImg from '../assets/images/hero_clean_apartment_1789907406872.jpg';
import commercialOfficeImg from '../assets/images/commercial_office_1789907422570.jpg';
import detailCleaningImg from '../assets/images/detail_cleaning_1789907436140.jpg';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: (category?: ServiceCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div id="home-page" className="w-full">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section 
        id="home-hero" 
        className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50"
      >
        {/* Soft background glow & clean graphic circles */}
        <div className="absolute top-12 right-0 w-[30rem] h-[30rem] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 swiss-grid-subtle pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Pill: Zürich Location & Rating */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-semibold border border-sky-200/80 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Neunbrunnenstrasse 52, 8050 Zürich</span>
                </span>

                <RatingBadge variant="compact" />
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
                Pristine Cleanliness <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  for Your Home & Business
                </span> in Zürich.
              </h1>

              {/* Sub-copy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                <strong>Clean Clean Services</strong> delivers methodical residential and commercial cleaning across Zürich. From private apartments and family homes to modern corporate offices, we bring meticulous Swiss standards to every surface.
              </p>

              {/* Action Buttons & Phone */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  id="hero-request-quote-button"
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-md shadow-sky-600/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  id="hero-call-button"
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:border-sky-300 transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>

              {/* High-level service bullet points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-3" />
                  </span>
                  <span>Residential apartments & private residences</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-3" />
                  </span>
                  <span>Commercial offices & business premises</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Generated Clean Swiss Interior) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-sky-400/20 via-blue-500/10 to-emerald-400/20 rounded-3xl blur-xl" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                  <img
                    src={heroApartmentImg}
                    alt="Bright pristine Swiss apartment cleaned to perfection in Zürich"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Floater: 4.9 Rating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl clean-glass border border-white/60 shadow-lg text-slate-900">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                          Verified Reputation
                        </div>
                        <div className="font-display font-black text-xl text-slate-900">
                          4.9 / 5.0 Rating
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-sm">★</span>
                          ))}
                        </div>
                        <div className="text-xs font-semibold text-slate-600">
                          70 Google Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Pill Accent */}
                <div className="absolute -top-3 -left-3 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-md border border-sky-100 text-xs font-bold text-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Zürich 8050 Active Service</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: COMPANY INTRODUCTION */}
      {/* ========================================================================= */}
      <section id="home-intro" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>About Clean Clean Services</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              A Disciplined Approach to Cleanliness in Zürich
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Located at <strong>Neunbrunnenstrasse 52, 8050 Zürich</strong>, Clean Clean Services was established to bring reliable, structured cleaning to residential households and commercial workplaces throughout the city. We believe true cleanliness is rooted in disciplined methodology, careful surface treatment, and consistent punctuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 hover:bg-white hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Zürich Local Presence
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Centrally positioned in Zürich 8050, we provide dependable local service with rapid response times and close familiarity with Swiss residential layouts and corporate requirements.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 hover:bg-white hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Dual Domain Focus
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specialized in both residential apartment care and commercial office hygiene, tailoring techniques, products, and schedules specifically to the nature of each environment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 hover:bg-white hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                4.9-Star Reputation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consistently rated 4.9 out of 5 across 70 Google customer reviews, demonstrating verified client satisfaction across private and business clients in Switzerland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: RESIDENTIAL CLEANING */}
      {/* ========================================================================= */}
      <section id="home-residential" className="py-20 bg-slate-50/70 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5" />
                <span>Residential Cleaning Zürich</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Immaculate Living Spaces Tailored to Your Home Routine
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Your home is your sanctuary. Our residential cleaning service is designed to free up your valuable personal time while ensuring every corner of your apartment or house remains in pristine condition. We methodically dust, sanitize, scrub, and polish all living areas with utmost care for your furnishings and materials.
              </p>

              {/* Room By Room Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Kitchen Sanitization
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Countertops, stovetops, sinks, cupboard exteriors, backsplash degreasing, and trash disposal.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Bathrooms & Fixtures
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Deep descaling of shower glass, tubs, toilet disinfection, mirror polishing, and chrome detailing.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Flooring Care
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Gentle vacuuming and damp mopping of hardwood parquet, tiles, and high-traffic entrance ways.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Bedrooms & Living Areas
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Surface dusting, table wiping, cushion straightening, bed tidying, and door handle sanitization.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote('residential')}
                  className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                >
                  Book Residential Service
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-all cursor-pointer"
                >
                  View Residential Checklist
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src={detailCleaningImg}
                  alt="Spotless kitchen countertop and faucet with microfiber cleaning tools in modern Zurich home"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Clean Clean Services Standard</span>
                    <span className="text-emerald-600 font-semibold">Residential Focus</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    Methodical surface treatment preserving delicate parquet and modern kitchen materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: COMMERCIAL CLEANING */}
      {/* ========================================================================= */}
      <section id="home-commercial" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src={commercialOfficeImg}
                  alt="Immaculate modern Zurich commercial office with reflective clean floors and pristine workstations"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Corporate & Retail Solutions</span>
                    <span className="text-sky-600 font-semibold">Commercial Maintenance</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    Creating an organized, hygienic, and professional atmosphere for teams and visitors.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Commercial Cleaning Zürich</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Professional Office & Workplace Maintenance
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                A clean workspace directly influences productivity, team morale, and client impressions. Clean Clean Services delivers thorough commercial cleaning tailored to your company's schedule and physical setup in Zürich. We sanitize shared equipment, keep meeting rooms spotless, and ensure high hygienic standards across all facilities.
              </p>

              {/* Scope Points */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: 'Workstations & Shared Desks',
                    desc: 'Careful wiping of surfaces, keyboard surrounds, monitors, and telephones to reduce workplace allergens and dust.',
                  },
                  {
                    title: 'Boardrooms & Conference Areas',
                    desc: 'Polished conference tables, neat chair alignment, spotless glass partitions, and clear whiteboard surfaces.',
                  },
                  {
                    title: 'Kitchenettes & Restrooms',
                    desc: 'Hygienic cleaning of coffee points, sinks, microwave exteriors, and commercial sanitary facilities with replenishing support.',
                  },
                  {
                    title: 'Floor Care & Waste Management',
                    desc: 'Regular vacuuming of carpeted zones, mopping of corridors, and prompt emptying and sorting of recycling bins.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote('commercial')}
                  className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                >
                  Request Commercial Quotation
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-sky-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: QUALITY & ATTENTION TO DETAIL */}
      {/* ========================================================================= */}
      <section id="home-quality" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-bold uppercase tracking-wider border border-slate-700">
              <Eye className="w-3.5 h-3.5 text-sky-400" />
              <span>Meticulous Standard</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Quality in Every Corner and High-Touch Zone
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We focus on the areas that define true cleanliness: streak-free glass, sanitized handles, lime-free taps, and pristine baseboards that average services overlook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {QUALITY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 hover:border-sky-500/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Clean Assurance Strip */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-sky-900/60 via-slate-800 to-slate-900 border border-sky-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 stroke-3" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Reliable Execution in Zürich 8050
                </h3>
                <p className="text-slate-300 text-xs">
                  We bring structured methodology to every property on Neunbrunnenstrasse and throughout the city.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer"
            >
              Inquire About Quality Service
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CLEANING APPROACH & METHODOLOGY */}
      {/* ========================================================================= */}
      <section id="home-approach" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Our Structured Process</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              A 4-Stage Methodical Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From your initial inquiry to the final walk-through, our workflow is organized and transparent so you always know what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {CLEANING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-200 hover:shadow-md transition-all relative group"
              >
                <span className="block font-display font-black text-3xl text-sky-600/30 group-hover:text-sky-600 transition-colors mb-2">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: SERVICE EXPERIENCE & RELIABILITY */}
      {/* ========================================================================= */}
      <section id="home-experience" className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Customer Experience</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What It Feels Like to Work With Clean Clean Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We prioritize respectful service delivery, reliable scheduling, and effortless communication from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Punctual & Scheduled
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We respect your calendar. Appointments are coordinated accurately so you can plan your day or business operations without disruption.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Direct Contact Person
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach us directly by telephone (+41 78 256 40 17) for updates, specific room notes, or schedule adjustments without call center delays.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Respectful of Your Space
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether inside your private living quarters or corporate office, we handle all furniture, devices, and personal belongings with care and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: TRUST & REPUTATION (4.9/5 RATING & 70 REVIEWS) */}
      {/* ========================================================================= */}
      <section id="home-reputation" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
                  <Award className="w-3.5 h-3.5 text-sky-600" />
                  <span>Verified Customer Feedback</span>
                </div>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Trusted by Residential & Commercial Clients in Zürich
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Clean Clean Services has earned an outstanding <strong>4.9 out of 5 rating</strong> on Google based on <strong>70 customer reviews</strong>. This track record reflects our ongoing commitment to thoroughness, consistency, and customer service across every property in Zürich.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
                    <div className="font-black text-2xl text-slate-900">4.9 / 5</div>
                    <div className="text-xs text-slate-500 mt-0.5">Average Google Rating</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80">
                    <div className="font-black text-2xl text-slate-900">70</div>
                    <div className="text-xs text-slate-500 mt-0.5">Verified Reviews</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 col-span-2 sm:col-span-1">
                    <div className="font-black text-2xl text-emerald-600">8050</div>
                    <div className="text-xs text-slate-500 mt-0.5">Zürich Location</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <RatingBadge variant="card" className="w-full max-w-sm" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section id="home-faq" className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <span>FAQ</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding our residential and commercial cleaning services in Zürich.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: STRONG CONTACT & BOOKING CTA */}
      {/* ========================================================================= */}
      <section id="home-cta" className="py-20 bg-gradient-to-r from-sky-700 via-sky-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Ready for Immaculate Spaces in Zürich?</span>
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Request Your Residential or Commercial Quote Today
            </h2>

            <p className="text-sky-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Contact Clean Clean Services at Neunbrunnenstrasse 52, 8050 Zürich. We provide tailored proposals for private homes, apartments, and corporate offices.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-request-quote-button"
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-base shadow-lg transition-all cursor-pointer"
              >
                <span>Request a Quote Online</span>
                <ArrowRight className="w-5 h-5 text-sky-700" />
              </button>

              <a
                id="cta-phone-call-button"
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-base border border-sky-400/40 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            <p className="text-xs text-sky-200/80 pt-2">
              Based at Neunbrunnenstrasse 52, 8050 Zürich • Rated 4.9/5 from 70 Google reviews
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
