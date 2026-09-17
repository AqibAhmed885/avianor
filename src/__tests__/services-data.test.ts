import { services, getServiceBySlug, getRelatedServices } from "@/content/services";

describe("Service data integrity", () => {
  test("all services have required fields", () => {
    for (const service of services) {
      expect(service.slug).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.shortTitle).toBeTruthy();
      expect(service.tagline).toBeTruthy();
      expect(service.overview).toBeTruthy();
      expect(service.iconName).toBeTruthy();
      expect(service.metaDescription).toBeTruthy();
      expect(Array.isArray(service.capabilities)).toBe(true);
      expect(Array.isArray(service.applications)).toBe(true);
      expect(Array.isArray(service.processSteps)).toBe(true);
      expect(Array.isArray(service.relatedServiceSlugs)).toBe(true);
      expect(service.installationNotes).toBeTruthy();
      expect(service.testingAndDocumentation).toBeTruthy();
    }
  });

  test("all service slugs are unique", () => {
    const slugs = services.map((s) => s.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  test("all service slugs are valid URL segments", () => {
    for (const service of services) {
      expect(service.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  test("all services have at least 2 capabilities", () => {
    for (const service of services) {
      expect(service.capabilities.length).toBeGreaterThanOrEqual(2);
    }
  });

  test("all services have at least 1 application", () => {
    for (const service of services) {
      expect(service.applications.length).toBeGreaterThanOrEqual(1);
    }
  });

  test("all services have at least 1 process step", () => {
    for (const service of services) {
      expect(service.processSteps.length).toBeGreaterThanOrEqual(1);
    }
  });

  test("process steps are sequential starting at 1", () => {
    for (const service of services) {
      const steps = service.processSteps.map((p) => p.step);
      steps.forEach((step, index) => {
        expect(step).toBe(index + 1);
      });
    }
  });

  test("getServiceBySlug returns correct service", () => {
    const slug = services[0].slug;
    const found = getServiceBySlug(slug);
    expect(found).toBeDefined();
    expect(found?.slug).toBe(slug);
  });

  test("getServiceBySlug returns undefined for unknown slug", () => {
    expect(getServiceBySlug("this-slug-does-not-exist")).toBeUndefined();
  });

  test("getRelatedServices returns valid services", () => {
    for (const service of services) {
      const related = getRelatedServices(service);
      // All related services should be valid
      for (const rel of related) {
        expect(rel.slug).toBeTruthy();
        expect(services.find((s) => s.slug === rel.slug)).toBeDefined();
      }
    }
  });

  test("no service has lorem ipsum", () => {
    const loremRegex = /lorem ipsum/i;
    for (const service of services) {
      expect(service.overview).not.toMatch(loremRegex);
      expect(service.tagline).not.toMatch(loremRegex);
      expect(service.metaDescription).not.toMatch(loremRegex);
    }
  });

  test("no service makes unsupported certification claims", () => {
    const bannedPhrases = [
      /fully certified/i,
      /guaranteed compliance/i,
      /approved for every/i,
      /trusted by thousands/i,
      /world-leading/i,
      /best in the industry/i,
    ];
    for (const service of services) {
      for (const phrase of bannedPhrases) {
        expect(service.overview).not.toMatch(phrase);
        expect(service.tagline).not.toMatch(phrase);
      }
    }
  });
});

