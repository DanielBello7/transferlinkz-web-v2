import type { Dictionary } from "../types";

export const solutions: Dictionary["solutions"] = {
  hero: {
    eyebrow: "Lösningar",
    titleLines: ["En verksamhet, rätt verktyg", "för varje roll."],
    intro:
      "TransferLinkz ger researrangörer, transferleverantörer, förare och gäster precis det de behöver, alla med utgångspunkt i samma transferplan i realtid.",
    exploreByRole: "Utforska per roll",
  },
  navLabel: "Lösningar per roll",
  roles: {
    operators: {
      navLabel: "Researrangörer",
      eyebrow: "För researrangörer och DMC:er",
      heading: "Planera varje transfer utifrån ett enda manifest.",
      paragraph:
        "Ladda upp den Excel-lista över transfers som du redan använder. TransferLinkz gör om den till strukturerade poster, gästlänkar och leverantörstilldelningar och håller varje resa sammankopplad från första tilldelningen till sista avlämningen.",
      cards: [
        {
          title: "Från manifest till plan",
          description:
            "Ladda upp ditt befintliga Excel-manifest och slipp bygga om det för hand. Under hektiska perioder kan manifestarbetet gå från timmar till minuter.",
        },
        {
          title: "Bara det som behöver dig",
          description:
            "Översikten skiljer transfers som är i riskzonen från dem som kräver ingripande, med en tydlig tidslinje över vad som har hänt.",
        },
        {
          title: "Alla destinationer, en vy",
          description:
            "Organisera transfers och manifest per destination och behåll samtidigt en samlad överblick över flygplatser och länder.",
        },
      ],
      alt: "App för researrangörer som visar en destinations ankomster och aktivitetsflöde",
    },
    suppliers: {
      navLabel: "Transferleverantörer",
      eyebrow: "För transferleverantörer",
      heading: "Behåll ditt dispatchsystem. Få en tydligare överlämning.",
      paragraph:
        "Se alla transfers som tilldelats dig på ett ställe. Ta emot jobb, tilldela fordon och förare och håll researrangören uppdaterad utan att byta ut det dispatchsystem du redan kör.",
      cards: [
        {
          title: "Uppdrag med alla uppgifter bifogade",
          description:
            "Varje jobb kommer med det du behöver för att utföra det, på ett ställe.",
        },
        {
          title: "Fordon och förare med några klick",
          description:
            "Tilldela fordon och förare till varje jobb så att researrangören kan se vem som har det.",
        },
        {
          title: "Status i realtid",
          description:
            "Uppdatera jobbstatus allt eftersom varje transfer fortskrider, så att researrangören hålls informerad.",
        },
      ],
      alt: "Vy för transferleverantörer med dagens pågående jobb och väntande uppdrag",
    },
    drivers: {
      navLabel: "Förare",
      eyebrow: "För förare",
      heading: "Känn till turen innan du åker.",
      paragraph:
        "Förare ser fordonet, upphämtningsplatserna och tiderna för varje transfer, med ett tryck för att öppna turen och hålla alla uppdaterade medan den pågår.",
      cards: [
        {
          title: "Dagen i en överblick",
          description:
            "Se dagens turer och upphämtningsplatser, med antal gäster och flyg innan du ger dig av.",
        },
        {
          title: "Ett tryck för att uppdatera",
          description:
            "Uppdatera förloppet medan turen pågår. Plattformen påminner dig när det är dags för en statusuppdatering.",
        },
        {
          title: "En kontrollerad kanal",
          description:
            "Nå gästen via en kontrollerad kanal, så att frågor om mötesplatsen blir besvarade i ankomsthallen.",
        },
      ],
      alt: "Förarapp som visar ett tilldelat fordon och turen som ska öppnas",
    },
    guests: {
      navLabel: "Gäster",
      eyebrow: "För gäster",
      heading: "Vet vem som hämtar dig.",
      paragraph:
        "Varje gäst får en enkel reselänk med uppgifter om upphämtningen och transferns status i realtid, så det blir ingen gissning vid ankomsten och ingen app att ladda ner.",
      cards: [
        {
          title: "Allt i en länk",
          description:
            "Mötesplatsen, förarens uppgifter och realtidsstatus, på en tillfällig mobillänk.",
        },
        {
          title: "Slutar gälla efter transfern",
          description:
            "Länken stängs automatiskt när transferfönstret har passerat.",
        },
        {
          title: "På deras språk",
          description:
            "Tydliga instruktioner på ett språk gästerna förstår. Flera språk, inklusive spanska, är planerade från tidig åtkomst.",
        },
      ],
      alt: "",
    },
  },
  howItWorks: {
    eyebrow: "Så fungerar det",
    heading: "Från kalkylblad till avlämning i tre steg.",
    steps: [
      {
        title: "Ladda upp ditt manifest",
        description:
          "Släpp in din befintliga Excel-lista över transfers. TransferLinkz skapar transferposterna, gästlänkarna och leverantörstilldelningarna.",
      },
      {
        title: "Tilldela och dela",
        description:
          "Leverantörerna bekräftar jobben och tilldelar fordon och förare. Gästerna får sin tillfälliga reselänk.",
      },
      {
        title: "Följ dagen i realtid",
        description:
          "Förarna uppdaterar status, gästerna följer med, och ert team ser bara de transfers som kräver åtgärd.",
      },
    ],
  },
  worksAlongside: {
    eyebrow: "Fungerar vid sidan av det du redan använder",
    heading: "Börja med det du redan har.",
    items: [
      {
        title: "Dina leverantörer",
        description:
          "Behåll de transferpartner du litar på. TransferLinkz skapar en tydligare överlämning mellan leverantörer, förare och gäster.",
      },
      {
        title: "Ditt dispatchsystem",
        description:
          "Leverantörerna bekräftar uppdrag och uppdaterar status utan att byta ut sitt eget dispatchsystem.",
      },
      {
        title: "Ditt manifest",
        description:
          "Utgå från den Excel-lista över transfers som du redan använder.",
      },
    ],
  },
};
