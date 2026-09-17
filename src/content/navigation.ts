export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "NVG Modifications", href: "/services/nvg-modifications" },
      { label: "Flight Recorder & AVCR", href: "/services/flight-recorder-avcr" },
      { label: "Air Ambulance Solutions", href: "/services/air-ambulance-solutions" },
      { label: "Avionics Repair & Wiring", href: "/services/avionics-repair-wiring" },
      { label: "Weather Radar", href: "/services/weather-radar-installation" },
      { label: "GPS Installation", href: "/services/gps-installation" },
      { label: "Analog-to-Digital Modernization", href: "/services/analog-to-digital-modernization" },
      { label: "Parts Manufacturing", href: "/services/aircraft-parts-manufacturing" },
      { label: "Avionics Test Benches", href: "/services/avionics-test-bench" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products & Solutions", href: "/products" },
      { label: "Wiring Harnesses", href: "/products/avionics-wiring-harnesses" },
      { label: "Electrical Panels", href: "/products/aircraft-electrical-panels" },
      { label: "Mounting Solutions", href: "/products/equipment-mounting-solutions" },
      { label: "Test Bench Solutions", href: "/products/avionics-test-benches" },
      { label: "Breakout & Interface Boxes", href: "/products/breakout-interface-boxes" },
      { label: "Medical Mounting Hardware", href: "/products/medical-equipment-mounting" },
      { label: "Modification Kits", href: "/products/aircraft-modification-kits" },
      { label: "A/D Interface Solutions", href: "/products/analog-to-digital-interface-solutions" },
    ],
  },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality & Safety", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Engineering Capabilities", href: "/capabilities" },
    { label: "Quality & Safety", href: "/quality" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "NVG Modifications", href: "/services/nvg-modifications" },
    { label: "Flight Recorder & AVCR", href: "/services/flight-recorder-avcr" },
    { label: "Air Ambulance Solutions", href: "/services/air-ambulance-solutions" },
    { label: "Avionics Repair & Wiring", href: "/services/avionics-repair-wiring" },
    { label: "Weather Radar", href: "/services/weather-radar-installation" },
    { label: "GPS Installation", href: "/services/gps-installation" },
    { label: "Analog-to-Digital", href: "/services/analog-to-digital-modernization" },
    { label: "All Services", href: "/services" },
  ],
  products: [
    { label: "Wiring Harnesses", href: "/products/avionics-wiring-harnesses" },
    { label: "Electrical Panels", href: "/products/aircraft-electrical-panels" },
    { label: "Mounting Solutions", href: "/products/equipment-mounting-solutions" },
    { label: "Test Bench Solutions", href: "/products/avionics-test-benches" },
    { label: "Medical Mounting Hardware", href: "/products/medical-equipment-mounting" },
    { label: "All Products", href: "/products" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

