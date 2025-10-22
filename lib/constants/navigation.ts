/**
 * Navigation configuration for the 2A Construction website
 */

export interface NavLink {
  name: string;
  href: string;
  description?: string;
}

export const mainNavigation: NavLink[] = [
  {
    name: "Home",
    href: "/",
    description: "Welcome to 2A Construction",
  },
  {
    name: "Services",
    href: "/services",
    description: "Our construction services",
  },
  {
    name: "Projects",
    href: "/projects",
    description: "View our completed projects",
  },
  {
    name: "About",
    href: "/about",
    description: "Learn about our company",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
];

export const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  services: [
    { name: "Residential", href: "/services#residential" },
    { name: "Commercial", href: "/services#commercial" },
    { name: "Renovation", href: "/services#renovation" },
    { name: "Consulting", href: "/services#consulting" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Case Studies", href: "/projects" },
    { name: "Safety", href: "/safety" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
];
