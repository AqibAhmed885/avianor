export interface ProductApplication {
  title: string;
  description?: string;
}

export interface ProductCapability {
  title: string;
  description: string;
}

export interface ProductConfigOption {
  label: string;
  description: string;
}

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  overview: string;
  iconName: string;
  applications: ProductApplication[];
  capabilities: ProductCapability[];
  configOptions: ProductConfigOption[];
  engineeringProcess: string;
  testingAndDocumentation: string;
  disclaimer: string;
  relatedServiceSlugs: string[];
  metaDescription: string;
}

