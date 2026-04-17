export const WHATSAPP_NUMBER = "447700900123";
export const PRIMARY_PHONE = "+44 7700 900 123";
export const SECONDARY_PHONE = "+44 7700 900 456";
export const BUSINESS_EMAIL = "info@call2train.co.uk";

export const availableTrainingDates = [
  "2026-04-15",
  "2026-04-22",
  "2026-05-06",
  "2026-05-20",
  "2026-06-03",
];

export const heroContent = {
  headline: "Train Individuals or Entire Care Teams in Just 1 Day",
  subheadline:
    "Theory and practical healthcare training in Leicester for personal growth and workforce development",
  trustLine: "Compliant with UK healthcare standards",
};

export const trainingOverviewPoints = [
  "Infection control and hygiene",
  "Patient care and support",
  "Mobility assistance",
  "Health and safety",
  "Safeguarding",
  "Communication skills",
];

export const whatYouWillLearnPoints = [
  "Understanding healthcare environments",
  "Legal and ethical responsibilities",
  "Patient care techniques",
  "Infection prevention",
  "Communication in care settings",
  "Health and safety procedures",
];

export const whoItsForPoints = [
  "New healthcare assistants",
  "Care workers needing refresher training",
  "People entering the healthcare sector",
  "Support workers",
  "Care agencies onboarding new staff",
  "Care home and domiciliary care teams",
];

export const whyChooseUsPoints = [
  "Experienced trainers",
  "Practical hands-on sessions",
  "Small class sizes",
  "Industry-relevant training",
  "Fast certification",
  "Team cohort support for employers",
];

export const companyOverview = {
  title: "About CALL2TRAIN LTD",
  description:
    "CALL2TRAIN LTD is a Leicester-based healthcare training provider focused on preparing carers, support workers, and care teams for real care settings.",
  mission:
    "Our mission is to train healthcare workers and organisational teams with quality, compliance-focused, practical instruction aligned to CQC and NHS-style expectations.",
};

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Healthcare Assistant Trainee",
    quote:
      "The trainer made everything clear and practical. I felt confident applying for care shifts straight after training.",
  },
  {
    name: "David K.",
    role: "Support Worker",
    quote:
      "Small class size, hands-on practice, and no fluff. The WhatsApp booking process was very easy.",
  },
  {
    name: "Aisha B.",
    role: "Care Coordinator",
    quote:
      "Excellent refresher for our new starters and existing carers. It covered safeguarding, communication, and moving support in one focused day.",
  },
];

export const trainingPageCourseContent = [
  "Infection control",
  "Safeguarding adults and children",
  "Moving and handling",
  "Basic life support",
  "Health and safety",
  "Communication in care",
];

export const trainingOutcomePoints = [
  "Certification on completion",
  "Job-ready practical confidence",
  "Stronger compliance awareness for care environments",
];

export const pricing = {
  deposit: 50,
  note: "Pay GBP 50 deposit per learner to secure seats. Remaining balance is paid on the training day. Team packages are available via enquiry.",
};

export const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookies" },
];

export function getWhatsAppBookingLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getUpcomingTrainingDate() {
  const today = new Date();
  const upcoming = availableTrainingDates.find(
    (date) => new Date(date) >= today,
  );
  return upcoming ?? availableTrainingDates[0];
}
