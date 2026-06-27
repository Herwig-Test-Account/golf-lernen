// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "24b80e88-e29e-470b-a335-fa03e39683d6",
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "img/uploads",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "grundlagen",
        label: "Grundlagen",
        path: "content/grundlagen",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titel", isTitle: true, required: true },
          { type: "string", name: "lead", label: "Lead (Hero-Untertitel)" },
          { type: "string", name: "description", label: "Meta-Beschreibung" },
          { type: "string", name: "image", label: "Bild-URL" },
          { type: "string", name: "image_credit", label: "Bild-Credit" },
          { type: "string", name: "kapitel", label: "Kapitel", options: ["golfplatz", "ausruestung", "regeln"] },
          { type: "number", name: "weight", label: "Reihenfolge" },
          { type: "string", name: "lesezeit", label: "Lesezeit" },
          { type: "string", name: "stand", label: "Stand (z. B. Nov. 2020)" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "boolean", name: "draft", label: "Entwurf" },
          { type: "rich-text", name: "body", label: "Artikeltext", isBody: true }
        ]
      },
      {
        name: "glossar",
        label: "Glossar",
        path: "content/glossar",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Begriff", isTitle: true, required: true },
          { type: "string", name: "term_alt", label: 'Zusatz (z. B. "EN: Foursome")' },
          { type: "string", name: "synonyme", label: "Such-Synonyme (Leerzeichen-getrennt)" },
          { type: "boolean", name: "draft", label: "Entwurf (nicht \xF6ffentlich)" },
          { type: "rich-text", name: "body", label: "Definition", isBody: true }
        ]
      },
      {
        name: "magazin",
        label: "Magazin",
        path: "content/magazin",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
            required: true
          },
          {
            type: "boolean",
            name: "draft",
            label: "Entwurf"
          },
          {
            type: "string",
            name: "description",
            label: "Beschreibung (SEO)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhalt",
            isBody: true
          }
        ]
      },
      {
        name: "bundesland",
        label: "Bundesl\xE4nder",
        path: "content/bundesland",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titel", isTitle: true, required: true },
          { type: "string", name: "bundesland", label: "Bundesland (Wert)" },
          { type: "string", name: "type", label: "Type (nicht \xE4ndern)" },
          { type: "string", name: "lead", label: "Lead" },
          { type: "string", name: "description", label: "Meta-Beschreibung" },
          { type: "rich-text", name: "body", label: "Text", isBody: true }
        ]
      },
      {
        name: "golf_kategorien",
        label: "Golf-Kategorien",
        path: "content/golf-kategorien",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titel", isTitle: true, required: true },
          { type: "string", name: "kategorie", label: "Kategorie (Wert)" },
          { type: "string", name: "type", label: "Type (nicht \xE4ndern)" },
          { type: "string", name: "lead", label: "Lead" },
          { type: "string", name: "description", label: "Meta-Beschreibung" },
          { type: "rich-text", name: "body", label: "Text", isBody: true }
        ]
      },
      {
        name: "locations",
        label: "Locations (Golfpl\xE4tze)",
        path: "content/locations",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Name", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Datum" },
          { type: "boolean", name: "draft", label: "Entwurf" },
          { type: "string", name: "bundesland", label: "Bundesland", options: ["Burgenland", "K\xE4rnten", "Nieder\xF6sterreich", "Ober\xF6sterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"] },
          { type: "string", name: "untertitel", label: "Untertitel" },
          { type: "string", name: "image", label: "Bild-URL" },
          { type: "string", name: "kategorien", label: "Kategorien", list: true, options: ["\xD6ffentliche Anlage", "Keine \xD6GV-Platzreife n\xF6tig", "Keine Platzerlaubnis (PE) n\xF6tig", "Platzerlaubnis (PE) n\xF6tig", "\xD6GV-Platzreife n\xF6tig", "Golfhotel f\xFCr Anf\xE4nger"] },
          { type: "number", name: "greenfee_ab", label: "Greenfee ab (\u20AC)" },
          { type: "string", name: "lochzahl", label: "Lochzahl" },
          { type: "string", name: "schwierigkeit", label: "Schwierigkeit" },
          { type: "string", name: "leihausruestung", label: "Leihausr\xFCstung" },
          { type: "string", name: "uebungsplatz", label: "\xDCbungsplatz" },
          { type: "string", name: "driving_range", label: "Driving Range" },
          { type: "string", name: "restaurant", label: "Restaurant" },
          { type: "string", name: "hunde", label: "Hunde erlaubt" },
          { type: "string", name: "adresse", label: "Adresse" },
          { type: "string", name: "website", label: "Website" },
          { type: "string", name: "email", label: "E-Mail" },
          { type: "string", name: "telefon", label: "Telefon" },
          { type: "rich-text", name: "body", label: "Beschreibung", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
