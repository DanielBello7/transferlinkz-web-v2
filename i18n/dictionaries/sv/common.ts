import type { Dictionary } from "../types";

export const common: Dictionary["common"] = {
  announcement: "Vi tar nu in en liten grupp pilotpartner inför 2026",
  nav: {
    label: "Huvudmeny",
    contact: "Kontakta oss",
    about: "Om oss",
  },
  joinWaitlist: "Väntelista",
  seeFeatures: "Se funktioner",
  backToHome: "Tillbaka till startsidan",
  logoLabel: "TransferLinkz startsida",
  language: {
    en: "English",
    es: "Español",
    sv: "Svenska",
    label: "Språk",
  },
  footer: {
    label: "Sidfot",
    tagline:
      "Samordning av flygplatstransfers för researrangörer och resebyråer.",
    about: "Om oss",
    solutions: "Lösningar",
    legal: "Juridik",
    twitter: "Twitter (X)",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    opensInNewTab: "(öppnas i en ny flik)",
  },
  cta: {
    heading: "Redo att ta er verksamhet till nästa nivå?",
    body: "Samla bokningar, leverantörer, förare, manifest och gästernas resor på en enda sammankopplad plattform.",
  },
  faq: {
    eyebrow: "Några saker du kanske undrar över",
    headingLines: ["Bra frågor.", "Tydliga svar."],
    items: [
      {
        question: "Vilket problem löser TransferLinkz?",
        answer:
          "TransferLinkz minskar onödiga eskaleringar vid ankomster och gör det snabbare att ta fram manifest. Du kan ladda upp din befintliga transferlista i Excel och automatiskt skapa strukturerade poster, gästlänkar och leverantörstilldelningar. Gäster och förare använder sedan en tillfällig kommunikationskanal med tydliga instruktioner om mötesplatsen och realtidsstatus, medan ert driftteam bara ser de transfers som verkligen behöver ett ingripande.",
      },
      {
        question: "Vem är TransferLinkz till för?",
        answer:
          "TransferLinkz är utvecklat för researrangörer, DMC:er och mottagande resebyråer som samordnar gästtransfers med flera leverantörer eller på flera destinationer. Transferleverantörer och förare använder plattformen för att bekräfta uppdrag, uppdatera status och kommunicera med gäster via en kontrollerad kanal.",
      },
      {
        question: "Behöver jag byta ut mina nuvarande transferleverantörer?",
        answer:
          "Nej. TransferLinkz fungerar vid sidan av ert nuvarande leverantörsnätverk. Ni fortsätter att använda de transferpartner ni litar på; plattformen skapar bara en tydligare överlämning mellan era leverantörer, förare och gäster.",
      },
      {
        question: "Kan jag använda TransferLinkz på flera destinationer?",
        answer:
          "Ja. Du kan organisera transfers och manifest per destination och ändå ha en samlad överblick över verksamheten. Det är särskilt användbart för aktörer som hanterar ankomster på flera flygplatser eller i flera länder.",
      },
      {
        question: "Hur mycket tid sparar TransferLinkz på transfermanifest?",
        answer:
          "Med TransferLinkz kan du ladda upp ditt befintliga Excel-manifest och automatiskt skapa strukturerade transferposter, gästlänkar och leverantörstilldelningar. På livliga destinationer och under högsäsong kan det korta det manuella manifestarbetet från timmar till minuter, samtidigt som verksamheten förblir enhetlig och spårbar.",
      },
      {
        question: "Måste gäster ladda ner en app?",
        answer:
          "Nej. Gästerna får tillgång till sina transferuppgifter via en tillfällig mobillänk. Länken visar mötesplatsen, förarens uppgifter, realtidsstatus och en kontrollerad kommunikationskanal. Länken slutar gälla automatiskt när transferfönstret har passerat.",
      },
      {
        question: "Hur minskar TransferLinkz antalet eskaleringar i driften?",
        answer:
          "Plattformen ger gästerna tydliga instruktioner om mötesplatsen och förarens status i realtid, vilket förhindrar många ”jag hittar inte min förare”-situationer. Om något ändå inträffar kan gästen och föraren kommunicera via en kontrollerad kanal, och ert team larmas bara när ett mänskligt ingripande verkligen behövs.",
      },
      {
        question: "Vad händer om något går fel med en transfer?",
        answer:
          "TransferLinkz skiljer mellan ”i riskzonen” och ”kräver ingripande”. Systemet uppmanar föraren att uppdatera status, guidar gästen till mötesplatsen och möjliggör kontrollerad kommunikation. Er driftöversikt visar bara de undantag som kräver åtgärd, med en tydlig tidslinje över vad som har hänt.",
      },
      {
        question:
          "Kan transferleverantörer använda TransferLinkz med sina befintliga arbetssätt?",
        answer:
          "Ja. Leverantörer kan bekräfta uppdrag, tilldela förare och uppdatera status utan att ersätta sitt dispatchsystem. Plattformen är utformad för att komplettera befintliga verktyg, inte ersätta dem.",
      },
      {
        question: "Hur kommer jag igång?",
        answer:
          "Du kan begära tidig åtkomst genom att gå med i väntelistan på vår webbplats. Därefter kontaktar vi dig för att diskutera om TransferLinkz passar er och, i så fall, hur en pilot kan läggas upp.",
      },
      {
        question: "Finns TransferLinkz på flera språk?",
        answer:
          "Ja. Plattformen byggs för att stödja flera språk, inklusive spanska, från fasen med tidig åtkomst. Det gör att researrangörer och leverantörer kan arbeta på sitt föredragna språk, samtidigt som gästerna får tydliga instruktioner på ett språk de förstår.",
      },
    ],
  },
  guestMockup: {
    label: "Gästens reselänk med förare, upphämtningstid och realtidsstatus",
    status: "Föraren är på väg",
    reference: "TRF-1001",
    title: "Upphämtning på Dubai flygplats",
    pickup: "Upphämtning",
    pickupValue: "17:20",
    driver: "Förare",
    driverValue: "Omar H.",
    vehicle: "Fordon",
    vehicleValue: "Toyota-van",
    arrives: "Framme om 12 min",
    flight: "Flyg EK204",
    landed: "landade 14:05",
    meet: "Mötesplats: Ankomsthallen, dörr 4",
    place: "Marina Gulf Hotel",
    contactDriver: "Kontakta föraren",
  },
};
