import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "24b80e88-e29e-470b-a335-fa03e39683d6",
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img/uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [

      // ─── GRUNDLAGEN ───────────────────────────────────────────────────────────
      {
        name: "grundlagen",
        label: "Grundlagen",
        path: "content/grundlagen",
        format: "md",
        templates: [
          {
            name: "artikel",
            label: "Grundlagen-Artikel",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "image", name: "image", label: "Teaserbild" },
              { type: "string", name: "image_credit", label: "Bild-Credit" },
              { type: "datetime", name: "date", label: "Datum" },
              { type: "string", name: "lesezeit", label: "Lesezeit" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "lead", label: "Hero-Untertitel" },
              { type: "rich-text", name: "body", label: "Inhalt", isBody: true },
              { type: "string", name: "tags", label: "Tags", list: true },
              { type: "string", name: "kapitel", label: "Kapitel", options: ["golfplatz", "ausruestung", "regeln"] },
              { type: "number", name: "weight", label: "Reihenfolge" },
              { type: "string", name: "stand", label: "Stand (z. B. Nov. 2020)" },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
          {
            name: "uebersicht",
            label: "Grundlagen-Übersicht",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "eyebrow", label: "Eyebrow-Text" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "lead", label: "Lead-Text (unter H1)" },
              {
                type: "object",
                name: "kapitel_liste",
                label: "Kapitel-Liste",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID (z. B. golfplatz)" },
                  { type: "string", name: "label", label: "Kurzbezeichnung (Nav)" },
                  { type: "string", name: "title", label: "Titel" },
                  { type: "string", name: "desc", label: "Beschreibung (Teaser)" },
                  { type: "string", name: "nav_desc", label: "Nav-Beschreibung" },
                ],
              },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── GLOSSAR ─────────────────────────────────────────────────────────────
      {
        name: "glossar",
        label: "Glossar",
        path: "content/glossar",
        format: "md",
        templates: [
          {
            name: "eintrag",
            label: "Glossar-Eintrag",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf (nicht öffentlich)" },
              { type: "string", name: "title", label: "Begriff", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "term_alt", label: "Zusatz (z. B. EN: Foursome)" },
              { type: "string", name: "synonyme", label: "Such-Synonyme (Leerzeichen-getrennt)" },
              { type: "rich-text", name: "body", label: "Definition", isBody: true },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
          {
            name: "uebersicht",
            label: "Glossar-Übersicht",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "eyebrow", label: "Eyebrow-Text" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "lead", label: "Lead-Text (unter H1)" },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── MAGAZIN ─────────────────────────────────────────────────────────────
      {
        name: "magazin",
        label: "Magazin",
        path: "content/magazin",
        format: "md",
        templates: [
          {
            name: "artikel",
            label: "Magazin-Artikel",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description", ui: { component: "textarea" } },
              { type: "string", name: "teaser", label: "Teaser (sichtbarer Kartentext)", ui: { component: "textarea" } },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "image", name: "image", label: "Teaserbild" },
              { type: "datetime", name: "date", label: "Datum", required: true },
              { type: "string", name: "lesezeit", label: "Lesezeit (manuell überschreiben)" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "rubrik", label: "Rubrik" },
              { type: "string", name: "author", label: "Autor" },
              { type: "rich-text", name: "body", label: "Inhalt", isBody: true },
              { type: "string", name: "tags", label: "Tags", list: true },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
          {
            name: "uebersicht",
            label: "Magazin-Übersicht",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description", ui: { component: "textarea" } },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "eyebrow", label: "Eyebrow-Text" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "lead", label: "Lead-Text (unter H1)" },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── BUNDESLAND ──────────────────────────────────────────────────────────
      {
        name: "bundesland",
        label: "Bundesländer",
        path: "content/bundesland",
        format: "md",
        fields: [
          { type: "boolean", name: "draft", label: "Entwurf" },
          { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Meta-Description" },
          { type: "string", name: "slug", label: "URL (Slug)" },
          { type: "string", name: "canonical", label: "Canonical-URL" },
          { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
          { type: "string", name: "hreflang", label: "hreflang-Tag" },
          { type: "string", name: "bundesland", label: "Bundesland (Wert)" },
          { type: "string", name: "type", label: "Type (nicht ändern)" },
          { type: "string", name: "lead", label: "Lead" },
          { type: "rich-text", name: "body", label: "Text", isBody: true },
          { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
        ],
      },

      // ─── GOLF-KATEGORIEN ─────────────────────────────────────────────────────
      {
        name: "golf_kategorien",
        label: "Golf-Kategorien",
        path: "content/golf-kategorien",
        format: "md",
        fields: [
          { type: "boolean", name: "draft", label: "Entwurf" },
          { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Meta-Description" },
          { type: "string", name: "slug", label: "URL (Slug)" },
          { type: "string", name: "canonical", label: "Canonical-URL" },
          { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
          { type: "string", name: "hreflang", label: "hreflang-Tag" },
          { type: "string", name: "kategorie", label: "Kategorie (Wert)" },
          { type: "string", name: "type", label: "Type (nicht ändern)" },
          { type: "string", name: "lead", label: "Lead" },
          { type: "rich-text", name: "body", label: "Text", isBody: true },
          { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
        ],
      },

      // ─── LOCATIONS ───────────────────────────────────────────────────────────
      {
        name: "locations",
        label: "Locations (Golfplätze)",
        path: "content/locations",
        format: "md",
        templates: [
          {
            name: "artikel",
            label: "Location-Eintrag",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "image", label: "Bild-URL" },
              { type: "datetime", name: "date", label: "Datum" },
              { type: "string", name: "bundesland", label: "Bundesland", options: ["Burgenland","Kärnten","Niederösterreich","Oberösterreich","Salzburg","Steiermark","Tirol","Vorarlberg","Wien"] },
              { type: "string", name: "untertitel", label: "Untertitel" },
              { type: "string", name: "kategorien", label: "Kategorien", list: true, options: ["Öffentliche Anlage","Keine ÖGV-Platzreife nötig","Keine Platzerlaubnis (PE) nötig","Platzerlaubnis (PE) nötig","ÖGV-Platzreife nötig","Golfhotel für Anfänger"] },
              { type: "number", name: "greenfee_ab", label: "Greenfee ab (€)" },
              { type: "string", name: "lochzahl", label: "Lochzahl" },
              { type: "string", name: "schwierigkeit", label: "Schwierigkeit" },
              { type: "string", name: "leihausruestung", label: "Leihausrüstung" },
              { type: "string", name: "uebungsplatz", label: "Übungsplatz" },
              { type: "string", name: "driving_range", label: "Driving Range" },
              { type: "string", name: "restaurant", label: "Restaurant" },
              { type: "string", name: "hunde", label: "Hunde erlaubt" },
              { type: "string", name: "adresse", label: "Adresse" },
              { type: "string", name: "website", label: "Website" },
              { type: "string", name: "email", label: "E-Mail" },
              { type: "string", name: "telefon", label: "Telefon" },
              { type: "rich-text", name: "body", label: "Beschreibung", isBody: true },
              { type: "string", name: "tags", label: "Tags", list: true },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
          {
            name: "uebersicht",
            label: "Locations-Übersicht",
            fields: [
              { type: "boolean", name: "draft", label: "Entwurf" },
              { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "slug", label: "URL (Slug)" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "eyebrow", label: "Eyebrow-Text" },
              { type: "string", name: "h1", label: "Titel (H1)" },
              { type: "string", name: "lead", label: "Lead-Text (unter H1)" },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── GLOBALE EINSTELLUNGEN ────────────────────────────────────────────────
      {
        name: "global",
        label: "Globale Einstellungen",
        path: "content/settings",
        format: "md",
        templates: [
          {
            name: "homepage",
            label: "Homepage",
            fields: [
              { type: "string", name: "title", label: "Seitentitel (intern)", isTitle: true, required: true },
              { type: "string", name: "description", label: "Meta-Description" },
              { type: "string", name: "canonical", label: "Canonical-URL" },
              { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
              { type: "string", name: "hreflang", label: "hreflang-Tag" },
              { type: "string", name: "hero_tag", label: "Hero Eyebrow-Text" },
              { type: "string", name: "hero_title", label: "Hero Titel (H1)" },
              { type: "string", name: "hero_sub", label: "Hero Subtext" },
              { type: "string", name: "cta_primary_text", label: "CTA 1 – Text" },
              { type: "string", name: "cta_primary_url", label: "CTA 1 – URL" },
              { type: "string", name: "cta_secondary_text", label: "CTA 2 – Text" },
              { type: "string", name: "cta_secondary_url", label: "CTA 2 – URL" },
              {
                type: "object", name: "quotes", label: "Zitate", list: true,
                fields: [
                  { type: "string", name: "text", label: "Zitat-Text" },
                  { type: "string", name: "cite", label: "Person" },
                ],
              },
              { type: "string", name: "grundlagen_label", label: "Grundlagen – Label" },
              { type: "string", name: "grundlagen_title", label: "Grundlagen – H2" },
              { type: "string", name: "grundlagen_intro", label: "Grundlagen – Intro" },
              {
                type: "object", name: "grundlagen_karten", label: "Grundlagen-Karten", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon (Emoji)" },
                  { type: "string", name: "titel", label: "Kartentitel" },
                  { type: "string", name: "text", label: "Kartentext" },
                  { type: "string", name: "url", label: "URL" },
                ],
              },
              { type: "string", name: "locations_label", label: "Locations – Label" },
              { type: "string", name: "locations_title", label: "Locations – H2" },
              { type: "string", name: "locations_intro", label: "Locations – Intro" },
              { type: "string", name: "magazin_label", label: "Magazin – Label" },
              { type: "string", name: "magazin_title", label: "Magazin – H2" },
              { type: "string", name: "magazin_intro", label: "Magazin – Intro" },
              { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── LEGAL & SEITEN ──────────────────────────────────────────────────────
      {
        name: "legal",
        label: "Legal & Seiten",
        path: "content/seiten",
        format: "md",
        fields: [
          { type: "boolean", name: "draft", label: "Entwurf" },
          { type: "string", name: "title", label: "Meta-Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Meta-Description" },
          { type: "string", name: "slug", label: "URL (Slug)" },
          { type: "string", name: "canonical", label: "Canonical-URL" },
          { type: "string", name: "robots", label: "Robots", options: ["index, follow", "noindex, follow"] },
          { type: "string", name: "hreflang", label: "hreflang-Tag" },
          { type: "string", name: "type", label: "Type (nicht ändern)" },
          { type: "string", name: "meta", label: "Meta-Zeile (z. B. Stand-Datum)" },
          { type: "rich-text", name: "body", label: "Inhalt", isBody: true },
          { type: "string", name: "json_ld", label: "Rich Snippets (JSON-LD)", ui: { component: "textarea" } },
        ],
      },

    ],
  },
});