export const contact = {
  hero: {
    eyebrow: "Contact us",
    title: "Let’s talk about your transfers.",
    intro:
      "Tell us about your business, transfer volumes and destinations. We reply within one working day.",
  },
  form: {
    title: "Send us a message",
    name: { label: "Full Name", placeholder: "Smith" },
    email: { label: "Work email", placeholder: "you@companymail.com" },
    company: { label: "Company", placeholder: "Company name" },
    role: {
      label: "I am a",
      // Keyed by the role's id (see features/contact/roles.ts)
      options: {
        "tour-operator": "Tour Operator",
        "transfer-supplier": "Transfer Supplier",
        driver: "Driver",
        "travel-agency": "Travel Agency",
        other: "Other",
      },
    },
    message: {
      label: "How can we help?",
      placeholder: "Tell us about your operations",
      hint: "Share your transfer volumes, destinations and any dates you have in mind.",
    },
    note: "We’ll only use your details to reply to your message.",
    submit: "Send message",
    sending: "Sending…",
    websiteTrap: "Website",
  },
  success: {
    title: "Message sent",
    body: "Thanks for getting in touch. We’ll get back to you as soon as possible.",
  },
};
