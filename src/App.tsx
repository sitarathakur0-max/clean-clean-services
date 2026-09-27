import React, { useState, useEffect } from 'react';
import { Page, ServiceCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<ServiceCategory>('residential');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (category?: ServiceCategory) => {
    if (category) {
      setQuoteCategory(category);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Global Quote / Booking Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        defaultCategory={quoteCategory}
      />

      {/* Mobile Floating Quick Contact Dock */}
      <div 
        id="mobile-quick-dock"
        className="fixed bottom-4 left-4 right-4 z-30 sm:hidden flex items-center gap-2 p-2 rounded-2xl clean-glass border border-sky-200/80 shadow-lg"
      >
        <a
          href={`tel:${COMPANY_INFO.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs transition-transform active:scale-95"
          aria-label={`Call Clean Clean Services at ${COMPANY_INFO.phoneFormatted}`}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-xs transition-transform active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}
