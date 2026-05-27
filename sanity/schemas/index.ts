import { offer } from "./offer";
import { faq } from "./faq";
import { siteSettings } from "./siteSettings";
import { heroSection } from "./heroSection";
import { educationSection } from "./educationSection";
import { explainerSection } from "./explainerSection";
import { otherDealsSection } from "./otherDealsSection";
import { responsibleSection } from "./responsibleSection";
import { footerSection } from "./footerSection";
import { navSection } from "./navSection";

export const schemaTypes = [
  offer,
  faq,
  siteSettings,
  heroSection,
  educationSection,
  explainerSection,
  otherDealsSection,
  responsibleSection,
  footerSection,
  navSection,
];

export const SINGLETON_TYPES = [
  "siteSettings",
  "heroSection",
  "educationSection",
  "explainerSection",
  "otherDealsSection",
  "responsibleSection",
  "footerSection",
  "navSection",
];
