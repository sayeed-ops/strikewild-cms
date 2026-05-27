import { defineField, defineType } from "sanity";

export const footerSection = defineType({
  name: "footerSection",
  title: "Footer section",
  type: "document",
  fields: [
    defineField({
      name: "aboutText",
      title: "About paragraph",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "columns",
      title: "Link columns",
      description: "Right-side columns of navigation links (typically 3).",
      type: "array",
      of: [
        {
          type: "object",
          name: "footerColumn",
          fields: [
            { name: "heading", title: "Heading", type: "string", validation: (r) => r.required() },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "footerLink",
                  fields: [
                    { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
                    { name: "href", title: "URL", type: "string", validation: (r) => r.required() },
                  ],
                  preview: { select: { title: "label", subtitle: "href" } },
                },
              ],
            },
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    }),
    defineField({
      name: "copyright",
      title: "Copyright line",
      type: "string",
    }),
    defineField({
      name: "regulatorBadges",
      title: "Regulator badges",
      description: "Plain-text badges shown at the bottom (e.g. UKGC, GAMBLEAWARE, GAMCARE, GAMSTOP).",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Footer section" }) },
});
