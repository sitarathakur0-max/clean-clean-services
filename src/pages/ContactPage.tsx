import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Navigation, 
  Home, 
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { RatingBadge } from '../components/RatingBadge';

export const ContactPage: React.FC = () => {
  const [formType, setFormType] = useState<'residential' | 'commercial'>('residential');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quick callback tab state
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  return (
    <div id="contact-page" className="w-full pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Contact Clean Clean Services</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
              Get in Touch or Request a Quote
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We are located at <strong>Neunbrunnenstrasse 52, 8050 Zürich</strong>. Reach out to arrange residential apartment cleaning or commercial office maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Details, Map & Reputation */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Info Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-slate-900">
                  Direct Company Details
                </h2>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Phone Call & Inquiries
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneTel}`}
                        className="block font-display font-extrabold text-lg text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        {COMPANY_INFO.phoneFormatted}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct line for scheduling and service details.
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Zürich Location
                      </span>
                      <p className="font-semibold text-slate-900 text-sm">
                        Clean Clean Services
                      </p>
                      <p className="text-xs text-slate-600">
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="pt-2 border-t border-slate-200/60">
                  <RatingBadge variant="card" />
                </div>
              </div>

              {/* Interactive Zürich Location Map Representation */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 text-white relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-sky-400" />
                    <span className="font-bold text-sm">Zürich 8050 Service Hub</span>
                  </div>
                  <span className="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-full font-medium">
                    Neunbrunnenstrasse 52
                  </span>
                </div>

                {/* Stylized Local Visual Blueprint */}
                <div className="h-44 rounded-2xl bg-slate-800/80 border border-slate-700 relative overflow-hidden flex items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 opacity-20 swiss-grid-subtle" />
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="font-display font-bold text-sm text-white">
                      Neunbrunnenstrasse 52
                    </div>
                    <div className="text-xs text-slate-300">
                      8050 Zürich • Oerlikon / Seebach Area
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span>Serving All Greater Zürich</span>
                  <a
                    href="https://maps.google.com/?q=Neunbrunnenstrasse+52,+8050+Z%C3%BCrich,+Switzerland"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-semibold underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Callback Request Box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  Request a Quick Callback
                </h3>
                {callbackSubmitted ? (
                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Callback request received. We will contact {callbackPhone} shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (+41...)"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Request Callback
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Full Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md">
                <div className="mb-6 space-y-1">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Send a Service Inquiry
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Fill out your details below and we will get back to you with a tailored cleaning solution.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-slate-900">
                        Inquiry Submitted Successfully!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-900">{name}</strong>. Clean Clean Services has received your request for{' '}
                        <strong className="text-sky-700">
                          {formType === 'residential' ? 'Residential Cleaning' : 'Commercial Cleaning'}
                        </strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
                      <div><strong>Contact:</strong> {phone} | {email}</div>
                      {address && <div><strong>Property:</strong> {address}</div>}
                      {date && <div><strong>Requested Date:</strong> {date}</div>}
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName('');
                          setPhone('');
                          setEmail('');
                          setAddress('');
                          setMessage('');
                        }}
                        className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Type Choice */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Service Category
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormType('residential')}
                          className={`flex items-center justify-center gap-2.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                            formType === 'residential'
                              ? 'border-sky-600 bg-sky-50 text-sky-800 ring-2 ring-sky-500/20'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Home className="w-4 h-4 text-sky-600" />
                          <span>Residential Cleaning</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormType('commercial')}
                          className={`flex items-center justify-center gap-2.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                            formType === 'commercial'
                              ? 'border-sky-600 bg-sky-50 text-sky-800 ring-2 ring-sky-500/20'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Building2 className="w-4 h-4 text-blue-600" />
                          <span>Commercial Cleaning</span>
                        </button>
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Maya Steiner"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +41 78 123 45 67"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    {/* Email & Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. maya@example.ch"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Property Address in Zürich
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street, number, postal code"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Cleaning Requirements & Notes
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the property size (rooms / m²), special requirements, key handover, or timing..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-500 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-sky-600" />
                        <span>Direct call: <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all active:scale-98 disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Submitting...' : 'Send Inquiry'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
