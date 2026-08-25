export interface OrganizationInfo {
  name: string;
  acronym: string;
  tagline: string;
  motto: string;
  foundingYear: number;
  location: {
    town: string;
    subRegion: string;
    district: string;
    country: string;
    address: string;
    landmark: string;
    poBox: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    generalEmail: string;
    officialPhones: string[];
    whatsAppNumber: string;
    whatsAppDefaultMessage: string;
    officeHours: string;
    publicNotice: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  registration: {
    statusNotice: string;
    knownRegistrations: {
      type: string;
      body: string;
      verified: boolean;
      reference?: string;
    }[];
  };
  vision: string;
  mission: string;
  coreValues: {
    name: string;
    letter: string;
    description: string;
  }[];
  strategicPillars: string[];
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  iconName: string;
  heroTagline: string;
  summary: string;
  description: string;
  keyAreas: string[];
  targetGroups: string[];
  approaches: string[];
  featuredHighlight?: {
    title: string;
    badge: string;
    summary: string;
    stats?: { label: string; value: string; note?: string }[];
  };
  sampleActivities: string[];
  image: string;
  accentColor: 'forest' | 'ochre' | 'terracotta';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  programmeId: string;
  programmeName: string;
  status: 'Active' | 'Completed' | 'Historical Framework';
  timeframe: string;
  location: string;
  leadFunderPartner?: string;
  verificationStatus: 'Documented Grantee Record' | 'Documented Network Project' | 'Historical Reference' | 'Requires ARYA Review';
  objectives: string[];
  keyActivities: string[];
  outcomesReached?: string[];
  verificationNote?: string;
  image: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Programmes' | 'Advocacy' | 'Community' | 'Announcements' | 'Health & SRHR';
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  image: string;
  tags: string[];
  isFeatured?: boolean;
  statusNotice?: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
  category: string;
  isVerified: boolean;
  sourceNote: string;
}

export interface ImpactStory {
  id: string;
  slug: string;
  title: string;
  category: 'Health' | 'Education' | 'Young Women' | 'Livelihoods' | 'Advocacy' | 'Community';
  excerpt: string;
  storyNarrative: string[];
  theme: string;
  location: string;
  image: string;
  date: string;
  isDraftSample: boolean;
  ethicalNote: string;
}

export interface PartnerNetwork {
  id: string;
  name: string;
  category: 'Strategic Grantor & Network' | 'Civil Society Coalition' | 'Local Coordination' | 'Accountability Ecosystem';
  relationship: string;
  description: string;
  verified: boolean;
  website?: string;
}

export interface HistoricalPartner {
  name: string;
  era: string;
  thematicFocus: string;
  disclaimer: string;
}

export interface ResourceDocument {
  id: string;
  title: string;
  category: 'Reports' | 'Policy Briefs' | 'Programme Briefs' | 'Publications' | 'Strategic Documents' | 'Media';
  year: string;
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  fileSize: string;
  description: string;
  status: 'Available on Request' | 'Sample Template' | 'Published';
  downloadUrl?: string;
}
