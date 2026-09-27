export type Page = 'home' | 'about' | 'services' | 'contact';

export type ServiceCategory = 'residential' | 'commercial';

export interface ServiceDetail {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  scopeItems: string[];
  bestFor: string;
  badge?: string;
}

export interface QuoteRequest {
  serviceType: ServiceCategory;
  propertyType: string;
  roomsOrArea: string;
  frequency: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  preferredDate?: string;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'residential' | 'commercial' | 'booking';
}
