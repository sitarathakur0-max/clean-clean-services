import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Check, 
  Layers, 
  HelpCircle,
  Sliders,
  Calendar
} from 'lucide-react';
import { Page, ServiceCategory } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import heroApartmentImg from '../assets/images/hero_clean_apartment_1789907406872.jpg';
import commercialOfficeImg from '../assets/images/commercial_office_1789907422570.jpg';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: (category?: ServiceCategory) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('residential');

  // Interactive Scope Configurator state
  const [configType, setConfigType] = useState<ServiceCategory>('residential');
  const [configRooms, setConfigRooms] = useState('3.5');
  const [configFrequency, setConfigFrequency] = useState('weekly');
  const [includeWindows, setIncludeWindows] = useState(true);
  const [includeKitchenDeep, setIncludeKitchenDeep] = useState(true);

  return (
    <div id="services-page" className="w-full pt-28 pb-20">
      {/* Services Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Clean Clean Services • Zürich</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
              Residential & Commercial Cleaning Services
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore our structured cleaning solutions tailored for private apartments, houses, and corporate offices in Zürich. High attention to detail, transparent scheduling, and methodical execution.
            </p>

            {/* Quick Category Toggle Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'residential'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Residential Cleaning
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'commercial'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Commercial Cleaning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'residential' ? (
            /* RESIDENTIAL VIEW */
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                    <Home className="w-3.5 h-3.5" />
                    <span>Private Residences & Apartments</span>
                  </span>

                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900">
                    Residential Cleaning Service
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed">
                    Our residential cleaning service maintains high standards of cleanliness, hygiene, and freshness throughout your home. We treat your personal living quarters with the utmost respect and care, ensuring every room is thoroughly tended to.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Residential Inclusions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_DATA[0].features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuote('residential')}
                      className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                    >
                      Book Residential Service
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneTel}`}
                      className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-sky-700 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>{COMPANY_INFO.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
                    <img
                      src={heroApartmentImg}
                      alt="Pristine residential apartment in Zurich"
                      referrerPolicy="no-referrer"
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600">
                      <strong>Best for:</strong> Apartments, family flats, and private houses in Zürich 8050 and surrounding districts.
                    </div>
                  </div>
                </div>
              </div>

              {/* Residential Room-by-Room Detail */}
              <div className="pt-6">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  Detailed Room-by-Room Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      room: 'Living Room & Dining',
                      items: ['Dusting all surfaces and tables', 'Vacuuming upholstered furniture surrounds', 'Hardwood / carpet floor care', 'Baseboard wiping'],
                    },
                    {
                      room: 'Kitchen & Meal Prep',
                      items: ['Countertop degreasing & disinfection', 'Sink and faucet limescale removal', 'Cooktop & exterior appliance wipe', 'Cabinet doors exterior cleaning'],
                    },
                    {
                      room: 'Bathrooms & WC',
                      items: ['Sanitizing toilet bowl and rim', 'Descaling shower screens and tubs', 'Mirror & glass streak-free shine', 'Tiling and floor disinfection'],
                    },
                    {
                      room: 'Bedrooms & Corridors',
                      items: ['Surface dusting & tidy alignment', 'Bed linen straightening', 'Entrance floor vacuum & mop', 'Light switches & door handle hygiene'],
                    },
                  ].map((block, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                      <h4 className="font-display font-bold text-base text-sky-900">
                        {block.room}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* COMMERCIAL VIEW */
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Offices & Commercial Premises</span>
                  </span>

                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900">
                    Commercial Cleaning Service
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed">
                    Clean Clean Services provides meticulous commercial cleaning to create a clean, healthy, and professional atmosphere for your employees, clients, and visitors. We customize cleaning schedules to integrate seamlessly with your operational workflow.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Commercial Inclusions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_DATA[1].features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuote('commercial')}
                      className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                    >
                      Book Commercial Service
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneTel}`}
                      className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-sky-700 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>{COMPANY_INFO.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
                    <img
                      src={commercialOfficeImg}
                      alt="Commercial office cleaning in Zurich"
                      referrerPolicy="no-referrer"
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600">
                      <strong>Best for:</strong> Corporate offices, commercial studios, practices, and retail locations in Zürich.
                    </div>
                  </div>
                </div>
              </div>

              {/* Commercial Zones Breakdown */}
              <div className="pt-6">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  Commercial Facility Zones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      zone: 'Workstations & Open Office',
                      items: ['Surface sanitizing of desks', 'Dusting monitor edges & phones', 'Emptying paper & desk bins', 'Floor vacuuming between desks'],
                    },
                    {
                      zone: 'Meeting & Boardrooms',
                      items: ['Polishing conference tables', 'Glass partitions spot-cleaning', 'Arranging chairs neatly', 'Whiteboard surface wiping'],
                    },
                    {
                      zone: 'Staff Kitchen & Breakroom',
                      items: ['Countertop & sink sanitation', 'Exterior cleaning of coffee machines', 'Microwave & fridge exterior wipe', 'Waste & recycling disposal'],
                    },
                    {
                      zone: 'Commercial Restrooms',
                      items: ['Total sanitization of toilets & urinals', 'Basins and mirror polishing', 'Soap & towel dispenser restocking support', 'Floor mopping with disinfectant'],
                    },
                  ].map((block, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                      <h4 className="font-display font-bold text-base text-sky-900">
                        {block.zone}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Scope Configurator / Inquiry Assistant */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Scope Configurator</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Customize Your Cleaning Specifications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select your property parameters to generate a clear summary for your upcoming service in Zürich.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
              {/* Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  1. Property Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setConfigType('residential')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      configType === 'residential'
                        ? 'bg-sky-50 border-sky-600 text-sky-800 ring-2 ring-sky-500/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    onClick={() => setConfigType('commercial')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      configType === 'commercial'
                        ? 'bg-sky-50 border-sky-600 text-sky-800 ring-2 ring-sky-500/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  {configType === 'residential' ? '2. Number of Rooms' : '2. Office Area'}
                </label>
                <select
                  value={configRooms}
                  onChange={(e) => setConfigRooms(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {configType === 'residential' ? (
                    <>
                      <option value="1.5 - 2">1.5 – 2.0 Rooms</option>
                      <option value="2.5 - 3.5">2.5 – 3.5 Rooms</option>
                      <option value="4.0 - 4.5">4.0 – 4.5 Rooms</option>
                      <option value="5.0+">5.0+ Rooms / House</option>
                    </>
                  ) : (
                    <>
                      <option value="Under 100 m²">Under 100 m²</option>
                      <option value="100 - 250 m²">100 – 250 m²</option>
                      <option value="250 - 500 m²">250 – 500 m²</option>
                      <option value="500+ m²">500+ m²</option>
                    </>
                  )}
                </select>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  3. Frequency
                </label>
                <select
                  value={configFrequency}
                  onChange={(e) => setConfigFrequency(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="one-off">One-Time Clean</option>
                  <option value="weekly">Weekly Routine</option>
                  <option value="bi-weekly">Bi-Weekly Routine</option>
                  <option value="monthly">Monthly Deep Clean</option>
                </select>
              </div>
            </div>

            {/* Scope inclusions toggles */}
            <div className="py-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={includeWindows}
                    onChange={(e) => setIncludeWindows(e.target.checked)}
                    className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                  />
                  <span>Include interior window & glass polishing</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={includeKitchenDeep}
                    onChange={(e) => setIncludeKitchenDeep(e.target.checked)}
                    className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                  />
                  <span>Include intensive kitchen / kitchenette descaling</span>
                </label>
              </div>

              <div className="text-xs text-slate-500">
                Service location: <strong>Zürich Area</strong>
              </div>
            </div>

            {/* Summary & Submit Action */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Configured Request
                </div>
                <div className="text-sm font-extrabold text-slate-900">
                  {configType === 'residential' ? 'Residential' : 'Commercial'} • {configRooms} {configType === 'residential' ? 'Rooms' : ''} ({configFrequency})
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(configType)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Request Quote for This Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Scope Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Scope Comparison: Residential vs Commercial
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Compare common tasks performed across our two core service sectors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Cleaning Task</th>
                  <th className="p-4 sm:p-5 text-center">Residential</th>
                  <th className="p-4 sm:p-5 text-center">Commercial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { task: 'Floor Vacuuming & Damp Mopping', res: true, com: true },
                  { task: 'Bathroom & Sanitary Descaling/Disinfection', res: true, com: true },
                  { task: 'Kitchen Worktops & Sinks Degreasing', res: true, com: true },
                  { task: 'Personal Bedrooms & Living Room Tidying', res: true, com: false },
                  { task: 'Workstations, Desks & Office Phone Wiping', res: false, com: true },
                  { task: 'Conference Table & Boardroom Polishing', res: false, com: true },
                  { task: 'Interior Mirror & Glass Cleaning', res: true, com: true },
                  { task: 'Commercial Restroom Sanitizing & Replenishing', res: false, com: true },
                  { task: 'High-Contact Door Handle & Light Switch Hygiene', res: true, com: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-900">{row.task}</td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.res ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="w-3.5 h-3.5 stroke-3" />
                        </span>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.com ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-100 text-sky-700">
                          <Check className="w-3.5 h-3.5 stroke-3" />
                        </span>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
