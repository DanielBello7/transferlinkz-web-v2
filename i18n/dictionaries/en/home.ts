export const home = {
  hero: {
    eyebrow: "One connected transfer operation",
    titleLines: ["One connected operation", "behind every guest journey"],
    intro:
      "TransferLinkz brings tour operators, transfer suppliers, vehicles, drivers and guests into one live workflow — from manifest to final drop-off.",
    dashboardAlt:
      "TransferLinkz operator dashboard showing pending assignments, active jobs and a live map",
  },
  ticker: {
    heading: "Wave goodbye to",
    words: [
      "Excel manifest",
      "Lost email threads",
      "Hours wasted sorting",
      "Missed transfers",
      "Zero visibility",
    ],
  },
  features: {
    heading: "Flexible for the many ways guest journeys begin",
    intro:
      "Use the same connected workflow across different transportation hubs, transfer directions and service types.",
    cards: [
      {
        title: "Built to be organised",
        description:
          "Bring manifests, guest groups and operating locations into one clear view.",
      },
      {
        title: "Built to stay connected",
        description:
          "Bring manifests, guest groups and operating locations into one clear view.",
      },
      {
        title: "Built for the whole journey",
        description:
          "Bring manifests, guest groups and operating locations into one clear view.",
      },
    ],
  },
  roles: {
    eyebrow: "Purpose-built experiences",
    headingLines: ["One operation.", "The right view for every role."],
    tabsLabel: "Choose a role",
    // Keyed by role id (see features/home/section5/roles.ts)
    items: {
      operators: {
        label: "Tour operator app",
        eyebrow: "For tour operators",
        headingLines: ["More guest journeys with", "less administrative work."],
        paragraph:
          "Turn your manifest into an organised transfer plan. Keep every location, supplier and guest connected from the first assignment to the final drop-off.",
        bullets: [
          "Group guests by date, flight and destination",
          "Assign transfers to your trusted supplier network",
          "Keep changes and issues attached to the right journey",
        ],
        alt: "Tour operator app showing a destination's arrivals and activity feed",
      },
      suppliers: {
        label: "Transfer Suppliers",
        eyebrow: "For transfer suppliers",
        headingLines: ["Every assignment clear,", "every transfer on track."],
        paragraph:
          "See every transfer assigned to you in one place. Accept jobs, assign vehicles and drivers, and keep the operator updated without leaving the screen.",
        bullets: [
          "Receive assignments with every detail attached",
          "Assign vehicles and drivers in a few clicks",
          "Update job status as each transfer progresses",
        ],
        alt: "Transfer supplier view with today's active jobs and pending assignments",
      },
      drivers: {
        label: "Drivers",
        eyebrow: "For drivers",
        headingLines: ["Every trip, clear and", "ready on the phone."],
        paragraph:
          "Drivers see the vehicle, the pickup points and the timing for each transfer, with one tap to open the trip and keep everyone updated as it progresses.",
        bullets: [
          "See today's trips and pickup points at a glance",
          "Know the guest count and flight before you leave",
          "Update progress with one tap as the trip moves",
        ],
        alt: "Driver app showing an assigned vehicle and the trip to open",
      },
      guests: {
        label: "Guests",
        eyebrow: "For guests",
        headingLines: ["Guests always know", "who is collecting them."],
        paragraph:
          "Each guest gets a simple trip link with their pickup details and live transfer status, so there is no guesswork at arrivals and no app to download.",
        bullets: [
          "Pickup point, time and driver in one link",
          "Live status as the driver heads to arrivals",
          "Quick contact if plans change",
        ],
        // The guest phone mockup's own label is common.guestMockup.label
        alt: "",
      },
    },
    destinations: {
      eyebrow: "Wherever the journey begins",
      headingLines: ["Different destinations.", "One connected workflow."],
      rows: [
        [
          "Airport arrivals & departure",
          "Train-station transfers",
          "Hotel & venue transfers",
        ],
        [
          "Marina & cruise transfers",
          "Coach & bus collection",
          "Multi-stop guest journeys",
        ],
      ],
    },
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing, no surprises",
    intro:
      "All plans include unlimited users, full API access, and dedicated onboarding support.",
    includedEachMonth: "Included for each month",
    plans: [
      {
        name: "Core",
        price: "$199",
        unit: "/mo",
        transfers: "150 transfers",
        description: "For operators getting started with structured transfers.",
        cta: "Request early access",
      },
      {
        name: "Growth",
        price: "$499",
        unit: "/mo",
        transfers: "500 transfers",
        description: "For teams running transfers across several destinations.",
        cta: "Request early access",
      },
      {
        name: "Scale",
        price: "$999",
        unit: "/mo",
        transfers: "1,500 transfers",
        description: "For high-volume operators and DMCs.",
        cta: "Request early access",
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "",
        transfers: "Unlimited transfers",
        description: "For large operations with custom needs.",
        cta: "Talk to Us",
      },
    ],
    // The email draft the Enterprise plan's button opens
    enterpriseEmail: {
      subject: "TransferLinkz enterprise enquiry",
      greeting: "Hi TransferLinkz team,",
      intro: "I'd like to talk about an enterprise plan.",
      businessName: "Business name:",
      volumes: "Transfer volumes (per month):",
      destinations: "Destinations:",
      thanks: "Thanks!",
    },
    includedHeading: "Every Plan Includes",
    included: [
      "Manifest upload & auto-sort",
      "Supplier assignment flow",
      "Guest trip links",
      "Live transfer status",
      "Issue tracking",
      "Onboarding Support",
      "Full API Access",
    ],
  },
};
