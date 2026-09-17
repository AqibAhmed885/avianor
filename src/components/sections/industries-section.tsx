import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";

const industries = [
  { title: "Commercial Aviation", iconName: "Navigation" },
  { title: "Business Aviation", iconName: "Settings" },
  { title: "Special-Mission Aircraft", iconName: "ScanEye" },
  { title: "Helicopter Operations", iconName: "MoonStar" },
  { title: "Air Ambulance", iconName: "HeartPulse" },
  { title: "Government Aviation", iconName: "ShieldCheck" },
  { title: "Maintenance Organizations", iconName: "Wrench" },
  { title: "Aircraft Modernization Programs", iconName: "Gauge" },
];

export function IndustriesSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="industries-section-heading"
    >
      <Container>
        <SectionHeading
          id="industries-section-heading"
          label="Markets Served"
          heading="Industries We Support"
          body="Avianor Engineering works with a range of aviation operators and organizations — from commercial fleets and business aviation to specialized mission operators."
          align="center"
          className="mb-12"
        />

        <ul
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4"
         
        >
          {industries.map((industry) => (
            <li
              key={industry.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-mist bg-brand-ice p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-indigo shadow-card">
                <IconRenderer
                  name={industry.iconName}
                  className="h-5 w-5"
                  strokeWidth={1.75}
                />
              </div>
              <span className="text-sm font-semibold text-brand-midnight">
                {industry.title}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

