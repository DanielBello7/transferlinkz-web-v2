import type { Dictionary } from "../types";

export const home: Dictionary["home"] = {
  hero: {
    eyebrow: "En sammankopplad transferverksamhet",
    titleLines: ["En sammankopplad verksamhet", "bakom varje gästresa"],
    intro:
      "TransferLinkz samlar researrangörer, transferleverantörer, fordon, förare och gäster i ett enda arbetsflöde i realtid – från manifest till sista avlämning.",
    dashboardAlt:
      "TransferLinkz översikt för researrangörer med väntande uppdrag, pågående jobb och en livekarta",
  },
  ticker: {
    heading: "Säg adjö till",
    words: [
      "Excel-manifest",
      "Borttappade mejltrådar",
      "Timmar av sortering",
      "Missade transfers",
      "Noll insyn",
    ],
  },
  features: {
    heading: "Flexibelt för alla sätt som gästresor kan börja på",
    intro:
      "Använd samma sammankopplade arbetsflöde för olika transportknutpunkter, transferriktningar och tjänstetyper.",
    cards: [
      {
        title: "Byggt för att vara organiserat",
        description:
          "Samla manifest, gästgrupper och driftplatser i en tydlig vy.",
      },
      {
        title: "Byggt för att hålla ihop",
        description:
          "Samla manifest, gästgrupper och driftplatser i en tydlig vy.",
      },
      {
        title: "Byggt för hela resan",
        description:
          "Samla manifest, gästgrupper och driftplatser i en tydlig vy.",
      },
    ],
  },
  roles: {
    eyebrow: "Skräddarsydda upplevelser",
    headingLines: ["En verksamhet.", "Rätt vy för varje roll."],
    tabsLabel: "Välj en roll",
    items: {
      operators: {
        label: "App för researrangörer",
        eyebrow: "För researrangörer",
        headingLines: ["Fler gästresor med", "mindre administration."],
        paragraph:
          "Förvandla ditt manifest till en organiserad transferplan. Håll varje plats, leverantör och gäst sammankopplad från första tilldelningen till sista avlämningen.",
        bullets: [
          "Gruppera gäster efter datum, flyg och destination",
          "Tilldela transfers till ditt nätverk av betrodda leverantörer",
          "Håll ändringar och problem knutna till rätt resa",
        ],
        alt: "App för researrangörer som visar en destinations ankomster och aktivitetsflöde",
      },
      suppliers: {
        label: "Transferleverantörer",
        eyebrow: "För transferleverantörer",
        headingLines: [
          "Varje uppdrag tydligt,",
          "varje transfer under kontroll.",
        ],
        paragraph:
          "Se alla transfers som tilldelats dig på ett ställe. Ta emot jobb, tilldela fordon och förare och håll researrangören uppdaterad utan att lämna skärmen.",
        bullets: [
          "Ta emot uppdrag med alla uppgifter bifogade",
          "Tilldela fordon och förare med några få klick",
          "Uppdatera jobbstatus allt eftersom varje transfer fortskrider",
        ],
        alt: "Vy för transferleverantörer med dagens pågående jobb och väntande uppdrag",
      },
      drivers: {
        label: "Förare",
        eyebrow: "För förare",
        headingLines: ["Varje tur, tydlig och", "redo i mobilen."],
        paragraph:
          "Förare ser fordonet, upphämtningsplatserna och tiderna för varje transfer, med ett tryck för att öppna turen och hålla alla uppdaterade medan den pågår.",
        bullets: [
          "Se dagens turer och upphämtningsplatser med en överblick",
          "Känn till antalet gäster och flyget innan du åker",
          "Uppdatera förloppet med ett tryck medan turen pågår",
        ],
        alt: "Förarapp som visar ett tilldelat fordon och turen som ska öppnas",
      },
      guests: {
        label: "Gäster",
        eyebrow: "För gäster",
        headingLines: ["Gästerna vet alltid", "vem som hämtar dem."],
        paragraph:
          "Varje gäst får en enkel reselänk med uppgifter om upphämtningen och transferns status i realtid, så det blir ingen gissning vid ankomsten och ingen app att ladda ner.",
        bullets: [
          "Upphämtningsplats, tid och förare i en och samma länk",
          "Realtidsstatus medan föraren är på väg till ankomsten",
          "Snabb kontakt om planerna ändras",
        ],
        alt: "",
      },
    },
    destinations: {
      eyebrow: "Var resan än börjar",
      headingLines: ["Olika destinationer.", "Ett sammankopplat arbetsflöde."],
      rows: [
        [
          "Flygplatsankomster och avgångar",
          "Transfers från tågstationer",
          "Transfers till hotell och arenor",
        ],
        [
          "Transfers till småbåtshamnar och kryssningar",
          "Upphämtning med buss och turistbuss",
          "Gästresor med flera stopp",
        ],
      ],
    },
  },
  pricing: {
    eyebrow: "Priser",
    heading: "Enkla priser, inga överraskningar",
    intro:
      "Alla planer inkluderar obegränsat antal användare, full API-åtkomst och dedikerat introduktionsstöd.",
    includedEachMonth: "Ingår varje månad",
    plans: [
      {
        name: "Core",
        price: "$199",
        unit: "/mån",
        transfers: "150 transfers",
        description:
          "För aktörer som kommer igång med strukturerade transfers.",
        cta: "Begär tidig åtkomst",
      },
      {
        name: "Growth",
        price: "$499",
        unit: "/mån",
        transfers: "500 transfers",
        description: "För team som kör transfers på flera destinationer.",
        cta: "Begär tidig åtkomst",
      },
      {
        name: "Scale",
        price: "$999",
        unit: "/mån",
        transfers: "1 500 transfers",
        description: "För aktörer och DMC:er med stora volymer.",
        cta: "Begär tidig åtkomst",
      },
      {
        name: "Enterprise",
        price: "Enligt offert",
        unit: "",
        transfers: "Obegränsat antal transfers",
        description: "För stora verksamheter med särskilda behov.",
        cta: "Prata med oss",
      },
    ],
    enterpriseEmail: {
      subject: "Förfrågan om TransferLinkz Enterprise",
      greeting: "Hej TransferLinkz-teamet,",
      intro: "Jag skulle vilja prata om en Enterprise-plan.",
      businessName: "Företagsnamn:",
      volumes: "Transfervolym (per månad):",
      destinations: "Destinationer:",
      thanks: "Tack!",
    },
    includedHeading: "Alla planer inkluderar",
    included: [
      "Manifestuppladdning och automatisk sortering",
      "Arbetsflöde för leverantörstilldelning",
      "Reselänkar för gäster",
      "Transferstatus i realtid",
      "Ärendeuppföljning",
      "Introduktionsstöd",
      "Full API-åtkomst",
    ],
  },
};
