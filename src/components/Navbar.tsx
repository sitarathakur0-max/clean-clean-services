import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-sky-100 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-sky-100/50 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              id="brand-logo-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
              aria-label="Clean Clean Services Homepage"
            >
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight">
                  Clean Clean <span className="text-sky-600 font-semibold">Services</span>
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Zürich • Neunbrunnenstrasse
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Phone quick link */}
              <a
                id="header-phone-link"
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs lg:text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 transition-colors"
                title={`Call ${COMPANY_INFO.phoneFormatted}`}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-100/70 text-sky-600">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold">{COMPANY_INFO.phoneFormatted}</span>
              </a>

              {/* Quote CTA Button */}
              <button
                id="header-quote-button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs lg:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="p-2 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors"
                aria-label={`Call ${COMPANY_INFO.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                id="mobile-menu-toggle-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-slate-900 text-base">
                    Clean Clean
                  </span>
                </div>
                <button
                  id="mobile-close-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col gap-1.5 mt-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      id={`mobile-nav-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-left transition-all ${
                        isActive
                          ? 'bg-sky-50 text-sky-700 border-l-4 border-sky-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </button>
                  );
                })}
              </nav>

              {/* Verified rating summary in mobile */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Customer Reputation
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-slate-900 text-lg">
                    {COMPANY_INFO.rating.score.toFixed(1)}/5
                  </span>
                  <span className="text-xs text-slate-600">
                    ({COMPANY_INFO.rating.reviewCount} Google reviews)
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  8050 Zürich, Switzerland
                </div>
              </div>
            </div>

            {/* Bottom Contact Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                id="mobile-drawer-call-button"
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-200 text-sky-700 font-semibold text-sm hover:bg-sky-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <button
                id="mobile-drawer-quote-button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
