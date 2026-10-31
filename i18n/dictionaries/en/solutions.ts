export const solutions = {
  hero: {
    eyebrow: "Solutions",
    titleLines: ["One operation, the right tools", "for every role."],
    intro:
      "TransferLinkz gives tour operators, transfer suppliers, drivers and guests exactly what they need, all working from the same live transfer plan.",
    exploreByRole: "Explore by role",
  },
  navLabel: "Solutions by role",
  // Keyed by role id (see features/solutions/roles.ts)
  roles: {
    operators: {
      navLabel: "Tour operators",
      eyebrow: "For tour operators and DMCs",
      heading: "Plan every transfer from one manifest.",
      paragraph:
        "Upload the Excel transfer list you already use. TransferLinkz turns it into structured records, guest links and supplier assignments, then keeps every journey connected from the first assignment to the final drop-off.",
      cards: [
        {
          title: "Manifest to plan",
          description:
            "Upload your existing Excel manifest and skip the manual rebuild. In busy periods, manifest work can drop from hours to minutes.",
        },
        {
          title: "Only what needs you",
          description:
            "The dashboard separates transfers that are at risk from those that need intervention, with a clear timeline of what has happened.",
        },
        {
          title: "Every destination, one view",
          description:
            "Organise transfers and manifests by destination while keeping a single overview across airports and countries.",
        },
      ],
      alt: "Tour operator app showing a destination's arrivals and activity feed",
    },
    suppliers: {
      navLabel: "Transfer suppliers",
      eyebrow: "For transfer suppliers",
      heading: "Keep your dispatch. Add a clearer handoff.",
      paragraph:
        "See every transfer assigned to you in one place. Accept jobs, assign vehicles and drivers, and keep the operator updated without replacing the dispatch system you already run.",
      cards: [
        {
          title: "Assignments with the details attached",
          description:
            "Each job arrives with what you need to run it, in one place.",
        },
        {
          title: "Vehicles and drivers in a few clicks",
          description:
            "Assign the vehicle and driver to each job so the operator can see who is on it.",
        },
        {
          title: "Status as it happens",
          description:
            "Update job status as each transfer progresses, so the operator stays informed.",
        },
      ],
      alt: "Transfer supplier view with today's active jobs and pending assignments",
    },
    drivers: {
      navLabel: "Drivers",
      eyebrow: "For drivers",
      heading: "Know the trip before you leave.",
      paragraph:
        "Drivers see the vehicle, the pickup points and the timing for each transfer, with one tap to open the trip and keep everyone updated as it progresses.",
      cards: [
        {
          title: "Today at a glance",
          description:
            "See today’s trips and pickup points, with the guest count and flight before you set off.",
        },
        {
          title: "One tap to update",
          description:
            "Update progress as the trip moves. The platform prompts you when a status update is due.",
        },
        {
          title: "A controlled channel",
          description:
            "Reach the guest through a controlled channel, so meeting-point questions get answered at arrivals.",
        },
      ],
      alt: "Driver app showing an assigned vehicle and the trip to open",
    },
    guests: {
      navLabel: "Guests",
      eyebrow: "For guests",
      heading: "Know who’s collecting you.",
      paragraph:
        "Each guest gets a simple trip link with their pickup details and live transfer status, so there is no guesswork at arrivals and no app to download.",
      cards: [
        {
          title: "Everything in one link",
          description:
            "The meeting point, driver details and live status, on a temporary mobile link.",
        },
        {
          title: "Expires after the transfer",
          description:
            "The link closes automatically once the transfer window ends.",
        },
        {
          title: "In their language",
          description:
            "Clear instructions in a language guests understand. Multiple languages, including Spanish, are planned from early access.",
        },
      ],
      alt: "",
    },
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "From spreadsheet to drop-off in three steps.",
    steps: [
      {
        title: "Upload your manifest",
        description:
          "Drop in your existing Excel transfer list. TransferLinkz creates the transfer records, guest links and supplier assignments.",
      },
      {
        title: "Assign and share",
        description:
          "Suppliers confirm jobs and assign vehicles and drivers. Guests receive their temporary trip link.",
      },
      {
        title: "Track on the day",
        description:
          "Drivers update status, guests follow along, and your team sees only the transfers that need action.",
      },
    ],
  },
  worksAlongside: {
    eyebrow: "Works alongside what you already use",
    heading: "Start with what you already have.",
    items: [
      {
        title: "Your suppliers",
        description:
          "Keep the transfer partners you trust. TransferLinkz adds a clearer handoff between suppliers, drivers and guests.",
      },
      {
        title: "Your dispatch system",
        description:
          "Suppliers confirm assignments and update status without replacing their own dispatch system.",
      },
      {
        title: "Your manifest",
        description: "Start from the Excel transfer list you already use.",
      },
    ],
  },
};
