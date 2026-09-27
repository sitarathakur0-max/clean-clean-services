import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Phone, Calendar, Home, Building2, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ServiceCategory } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: ServiceCategory;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'residential',
}) => {
  const [category, setCategory] = useState<ServiceCategory>(defaultCategory);
  const [propertyType, setPropertyType] = useState('apartment');
  const [sizeDetail, setSizeDetail] = useState('3.5 rooms');
  const [frequency, setFrequency] = useState('one-off');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="quote-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-6 sm:p-8 text-white relative">
          <button
            id="quote-modal-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Clean Clean Services • Zürich</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Request a Cleaning Quote
          </h2>
          <p className="text-sky-100 text-sm mt-1 max-w-lg">
            Tell us about your property in Zürich. We review your specifications and get in touch promptly.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div id="quote-success-view" className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Your request for{' '}
                  <span className="font-semibold text-sky-700">
                    {category === 'residential' ? 'Residential Cleaning' : 'Commercial Cleaning'}
                  </span>{' '}
                  has been submitted to Clean Clean Services.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left max-w-md mx-auto text-xs space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Property Details:</span>
                  <span className="font-semibold text-slate-800">{sizeDetail} ({propertyType})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-800">{address || 'Zürich Area'}</span>
                </div>
                {preferredDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Requested Date:</span>
                    <span className="font-semibold text-slate-800">{preferredDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone Contact:</span>
                  <span className="font-semibold text-slate-800">{phone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {COMPANY_INFO.phoneFormatted}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selector Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  1. Select Cleaning Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setCategory('residential');
                      setPropertyType('apartment');
                      setSizeDetail('3.5 rooms');
                    }}
                    className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                      category === 'residential'
                        ? 'border-sky-600 bg-sky-50 text-sky-800 shadow-xs ring-2 ring-sky-500/20'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <Home className="w-4 h-4 text-sky-600" />
                    <span>Residential Cleaning</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCategory('commercial');
                      setPropertyType('office');
                      setSizeDetail('150 m² office');
                    }}
                    className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                      category === 'commercial'
                        ? 'border-sky-600 bg-sky-50 text-sky-800 shadow-xs ring-2 ring-sky-500/20'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Commercial Cleaning</span>
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    {category === 'residential' ? (
                      <>
                        <option value="apartment">Apartment / Flat</option>
                        <option value="house">Single Family House</option>
                        <option value="studio">Studio Apartment</option>
                        <option value="duplex">Duplex / Penthouse</option>
                      </>
                    ) : (
                      <>
                        <option value="office">Corporate Office</option>
                        <option value="retail">Retail Store / Shop</option>
                        <option value="practice">Medical / Therapy Practice</option>
                        <option value="studio">Studio / Creative Agency</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {category === 'residential' ? 'Number of Rooms' : 'Approximate Area'}
                  </label>
                  <select
                    value={sizeDetail}
                    onChange={(e) => setSizeDetail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    {category === 'residential' ? (
                      <>
                        <option value="1 - 2 rooms">1 – 2 Rooms</option>
                        <option value="2.5 - 3.5 rooms">2.5 – 3.5 Rooms</option>
                        <option value="4 - 5 rooms">4 – 5 Rooms</option>
                        <option value="5.5+ rooms / House">5.5+ Rooms / Entire House</option>
                      </>
                    ) : (
                      <>
                        <option value="Up to 100 m²">Up to 100 m²</option>
                        <option value="100 - 250 m²">100 – 250 m²</option>
                        <option value="250 - 500 m²">250 – 500 m²</option>
                        <option value="500+ m²">500+ m²</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Cleaning Frequency */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Desired Frequency
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'one-off', label: 'One-Time' },
                    { id: 'weekly', label: 'Weekly' },
                    { id: 'bi-weekly', label: 'Bi-Weekly' },
                    { id: 'monthly', label: 'Monthly' },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                        frequency === freq.id
                          ? 'bg-sky-500 text-white border-sky-500 font-semibold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-slate-100 pt-4 space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  2. Contact & Address Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thomas Keller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +41 79 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. thomas@example.ch"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Street & Number (Zürich)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Schaffhauserstrasse 12, 8050 Zürich"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Specific Requirements / Special Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Key handover details, balcony windows, pet in apartment..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Or call directly: <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
