import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, SINGLETON_TYPES } from "./sanity/schemas";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "your-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

const SINGLETONS: { id: string; type: string; title: string }[] = [
  { id: "siteSettings", type: "siteSettings", title: "Site settings" },
  { id: "navSection", type: "navSection", title: "Navigation" },
  { id: "heroSection", type: "heroSection", title: "Hero" },
  { id: "educationSection", type: "educationSection", title: "Education" },
  { id: "explainerSection", type: "explainerSection", title: "Explainer" },
  { id: "otherDealsSection", type: "otherDealsSection", title: "Other deals" },
  { id: "responsibleSection", type: "responsibleSection", title: "Responsible gaming" },
  { id: "footerSection", type: "footerSection", title: "Footer" },
];

export default defineConfig({
  name: "default",
  title: "StrikeWild",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site content")
              .child(
                S.list()
                  .title("Site content")
                  .items(
                    SINGLETONS.map((s) =>
                      S.listItem()
                        .title(s.title)
                        .id(s.id)
                        .child(
                          S.editor()
                            .id(s.id)
                            .schemaType(s.type)
                            .documentId(s.id)
                        )
                    )
                  )
              ),
            S.divider(),
            S.documentTypeListItem("offer").title("Offers"),
            S.documentTypeListItem("faq").title("FAQ"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter((t) => !SINGLETON_TYPES.includes(t.schemaType)),
  },
  document: {
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.includes(schemaType)
        ? prev.filter((a) => a.action !== "duplicate" && a.action !== "delete")
        : prev,
  },
});
