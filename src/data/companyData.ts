import { FAQItem, ServiceDetail } from '../types';

export const COMPANY_INFO = {
  name: 'Clean Clean Services',
  tagline: 'Professional Residential & Commercial Cleaning',
  phone: '+41 78 256 40 17',
  phoneFormatted: '+41 78 256 40 17',
  phoneTel: '+41782564017',
  address: {
    street: 'Neunbrunnenstrasse 52',
    postalCode: '8050',
    city: 'Zürich',
    country: 'Switzerland',
    full: 'Neunbrunnenstrasse 52, 8050 Zürich, Switzerland',
  },
  rating: {
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 70,
    platform: 'Google Reviews',
  },
  serviceArea: 'Zürich & Surrounding Areas',
  primaryServices: [
    'Residential Cleaning',
    'Commercial Cleaning',
  ] as const,
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'residential-cleaning',
    category: 'residential',
    title: 'Residential Cleaning',
    shortDesc: 'Thorough, methodical cleaning designed for private apartments, flats, and houses across Zürich.',
    description: 'Our residential cleaning service maintains high standards of cleanliness and hygiene in your home. From routine upkeep to intensive deep cleaning, every room receives detailed attention, leaving your living space pristine, fresh, and welcoming.',
    features: [
      'Comprehensive dusting & surface wiping across all rooms',
      'Vacuuming and damp mopping of hardwood, tile, and stone floors',
      'Sanitization of kitchen worktops, sinks, and exterior appliances',
      'Thorough disinfection and descaling of bathrooms, toilets, and showers',
      'Interior mirror and glass polishing',
      'Bed making and tidying of general living quarters',
    ],
    scopeItems: [
      'Living Rooms & Bedrooms: Dusting surfaces, furniture wiping, floor care',
      'Kitchen: Counters, cooktop surface, sink disinfection, waste removal',
      'Bathrooms: Toilet, basin, shower stall, tub, chrome fittings, tiles',
      'Entryways & Hallways: Footwear zones, baseboard dusting, mirror shine',
    ],
    bestFor: 'Apartments, family homes, and private residences in Zürich requiring dependable, high-standard maintenance.',
    badge: 'Popular Residential',
  },
  {
    id: 'commercial-cleaning',
    category: 'commercial',
    title: 'Commercial Cleaning',
    shortDesc: 'Professional cleaning solutions tailored for corporate offices, business premises, and retail spaces in Zürich.',
    description: 'Clean Clean Services provides meticulous commercial cleaning to create a clean, healthy, and professional environment for your employees and clients. We adapt to your business requirements to keep your workspace immaculate.',
    features: [
      'Desks, conference tables, and workstation surface wiping',
      'High-touch point disinfection (door handles, light switches, elevator buttons)',
      'Office floor vacuuming, mopping, and hard surface maintenance',
      'Kitchenette, breakroom, and coffee station sanitation',
      'Commercial restroom sanitization and restocking',
      'Waste bin emptying and recycling sorting support',
    ],
    scopeItems: [
      'Workstations & Open Plan: Desk sanitizing, screen frame dusting, cable tidy',
      'Meeting & Boardrooms: Presentation table polishing, seating arrangement',
      'Restrooms: Complete commercial disinfection, mirror and sink hygiene',
      'Reception & Lobby: Spotless glass doors, entrance floor care, pristine first impression',
    ],
    bestFor: 'Corporate offices, creative agencies, retail shops, and commercial premises across 8050 Zürich and the city.',
    badge: 'Enterprise & Office',
  },
];

export const QUALITY_PILLARS = [
  {
    title: 'Swiss Precision Cleaning',
    description: 'Every task is completed with structured methodology and attention to detail, ensuring consistently immaculate results across every room.',
  },
  {
    title: 'High-Touch Disinfection',
    description: 'Special care is given to high-contact surfaces such as handles, switches, fixtures, and countertops for superior everyday hygiene.',
  },
  {
    title: 'Care for Delicate Surfaces',
    description: 'Appropriate, gentle cleaning techniques applied to parquet, polished stone, glass, and modern interior fixtures without damage.',
  },
  {
    title: 'Clear & Direct Communication',
    description: 'Simple scheduling, prompt phone response (+41 78 256 40 17), and reliable service delivered on time at your Zürich property.',
  },
];

export const CLEANING_STEPS = [
  {
    step: '01',
    title: 'Scope Definition',
    desc: 'You contact us via phone or online inquiry to outline your residential or commercial property needs, layout, and preferred timing.',
  },
  {
    step: '02',
    title: 'Tailored Service Plan',
    desc: 'We organize the cleaning scope according to your specific property requirements, key focus areas, and scheduled date.',
  },
  {
    step: '03',
    title: 'Methodical Execution',
    desc: 'Our cleaning professionals arrive punctually at your address in Zürich with systematic checklists covering all agreed areas.',
  },
  {
    step: '04',
    title: 'Quality Verification',
    desc: 'A final walk-through inspection ensures all surfaces, floors, and facilities meet the 4.9-star clean standard before handover.',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Where is Clean Clean Services located and what areas do you serve?',
    answer: 'Clean Clean Services is based at Neunbrunnenstrasse 52, 8050 Zürich, Switzerland. We provide professional residential and commercial cleaning services across Zürich and nearby districts.',
    category: 'general',
  },
  {
    question: 'How do I request a quote or book a cleaning service?',
    answer: 'You can request a quote directly through our online contact and booking form on this website, or call us directly at +41 78 256 40 17 to discuss your property requirements.',
    category: 'booking',
  },
  {
    question: 'What is included in residential cleaning?',
    answer: 'Residential cleaning includes comprehensive dusting, vacuuming and mopping of all floors, thorough cleaning and disinfection of bathrooms (toilets, basins, showers, tubs), kitchen counter and sink sanitation, waste disposal, and overall living area tidying.',
    category: 'residential',
  },
  {
    question: 'What does commercial cleaning cover for businesses?',
    answer: 'Commercial cleaning covers office desks and workstations, meeting rooms, reception areas, staff kitchenettes, commercial restrooms, floor vacuuming/mopping, emptying waste receptacles, and disinfecting high-touch points throughout your premises.',
    category: 'commercial',
  },
  {
    question: 'Can you accommodate both one-off and recurring cleanings?',
    answer: 'Yes, we provide both one-time thorough cleanings and scheduled recurring visits (such as weekly, bi-weekly, or monthly) for both private residences and commercial offices in Zürich.',
    category: 'booking',
  },
  {
    question: 'What reputation and customer feedback does Clean Clean Services have?',
    answer: 'Clean Clean Services holds a 4.9 out of 5 rating from 70 verified Google reviews, reflecting our consistent dedication to high cleaning standards and customer satisfaction in Zürich.',
    category: 'general',
  },
];
