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
      {
  name: "grundlagen", label: "Grundlagen", path: "content/grundlagen", format: "md",
  fields: [
    { type: "string", name: "title", label: "Titel", isTitle: true, required: true },
    { type: "string", name: "lead", label: "Lead (Hero-Untertitel)" },
    { type: "string", name: "description", label: "Meta-Beschreibung" },
    { type: "string", name: "image", label: "Bild-URL" },
    { type: "string", name: "image_credit", label: "Bild-Credit" },
    { type: "string", name: "kapitel", label: "Kapitel", options: ["golfplatz","ausruestung","regeln"] },
    { type: "number", name: "weight", label: "Reihenfolge" },
    { type: "string", name: "lesezeit", label: "Lesezeit" },
    { type: "string", name: "stand", label: "Stand (z. B. Nov. 2020)" },
    { type: "string", name: "tags", label: "Tags", list: true },
    { type: "boolean", name: "draft", label: "Entwurf" },
    { type: "rich-text", name: "body", label: "Artikeltext", isBody: true },
  ],
},
      {
  name: "glossar",
  label: "Glossar",
  path: "content/glossar",
  format: "md",
  fields: [
    { type: "string",  name: "title",    label: "Begriff", isTitle: true, required: true },
    { type: "string",  name: "term_alt", label: "Zusatz (z. B. \"EN: Foursome\")" },
    { type: "string",  name: "synonyme", label: "Such-Synonyme (Leerzeichen-getrennt)" },
    { type: "boolean", name: "draft",    label: "Entwurf (nicht öffentlich)" },
    { type: "rich-text", name: "body", label: "Definition", isBody: true },
  ],
},
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Entwurf",
          },
          {
            type: "string",
            name: "description",
            label: "Beschreibung (SEO)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhalt",
            isBody: true,
          },
        ],
      },
    ],
  },
});