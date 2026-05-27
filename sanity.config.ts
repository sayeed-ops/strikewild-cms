import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "your-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

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
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.editor()
                  .id("siteSettings")
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("offer").title("Offers"),
            S.documentTypeListItem("faq").title("FAQ"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    schemaTypes,
    // Hide the singleton from the global "Create new" menu so editors
    // don't accidentally create a second siteSettings document.
    templates: (prev) => prev.filter((t) => t.schemaType !== "siteSettings"),
  },
  document: {
    actions: (prev, { schemaType }) =>
      schemaType === "siteSettings"
        ? prev.filter((a) => a.action !== "duplicate" && a.action !== "delete")
        : prev,
  },
});
