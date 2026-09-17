import type { LucideIcon } from "lucide-react";

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceApplication {
  title: string;
  description?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  overview: string;
  iconName: string;
  capabilities: ServiceCapability[];
  applications: ServiceApplication[];
  processSteps: ServiceProcessStep[];
  installationNotes: string;
  testingAndDocumentation: string;
  disclaimer?: string;
  relatedServiceSlugs: string[];
  metaDescription: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

