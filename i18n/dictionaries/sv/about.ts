import type { Dictionary } from "../types";

export const about: Dictionary["about"] = {
  hero: {
    eyebrow: "Om oss",
    titleLines: ["Gästtransfers förtjänar", "något bättre än kalkylblad."],
    intro:
      "TransferLinkz är det sammankopplade driftlagret för gästtransfers. Vi samlar researrangörer, transferleverantörer, förare och gäster i ett enda arbetsflöde i realtid, från det första manifestet till sista avlämningen.",
  },
  story: {
    eyebrow: "Vår historia",
    heading: "Därför finns TransferLinkz",
    paragraphs: [
      "Varje dag landar tusentals gäster på en obekant flygplats och förväntar sig att någon väntar på dem. Bakom det enkla löftet ligger en förvånansvärt skör kedja: ett Excel-manifest, en rad mejl till leverantörer, en förare med en namnskylt och ett driftteam i beredskap ifall något går snett.",
      "När en länk brister – ett flyg landar tidigare, en förare står vid fel utgång eller en leverantör aldrig bekräftade – ringer gästen researrangören, researrangören ringer leverantören, och ett problem på fem minuter blir en eskalering. De flesta av dessa situationer går att undvika. Informationen finns helt enkelt på för många ställen.",
      "TransferLinkz samlar informationen på ett ställe. Researrangörerna laddar upp det manifest de redan använder, leverantörerna bekräftar och tilldelar förare, gästerna får en tillfällig länk med mötesplats och realtidsstatus, och driftteamen ser bara de transfers som verkligen behöver en människa.",
    ],
  },
  audiences: {
    eyebrow: "Vem det är för",
    heading: "Byggt för alla som ingår i resan",
    items: [
      {
        title: "Researrangörer och DMC:er",
        description:
          "Driftteam bör lägga sin tid på de transfers som kräver ett beslut, inte på att kontrollera de som fungerar.",
      },
      {
        title: "Transferleverantörer",
        description:
          "Bekräfta uppdrag, tilldela förare och uppdatera status utan att byta ut ditt eget dispatchsystem.",
      },
      {
        title: "Förare",
        description:
          "Få varje upphämtning med mötesplatsen, uppdatera status under dagen och nå gästerna via en kontrollerad kanal.",
      },
      {
        title: "Gäster",
        description:
          "Se mötesplatsen, förarens uppgifter och realtidsstatus på en tillfällig länk som slutar gälla efter transfern.",
      },
    ],
  },
};
