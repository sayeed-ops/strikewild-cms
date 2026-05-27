import { defineField, defineType } from "sanity";

export const responsibleSection = defineType({
  name: "responsibleSection",
  title: "Responsible gaming section",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro paragraph", type: "text", rows: 3 }),
    defineField({
      name: "tools",
      title: "Tools",
      description: "Responsible-gambling tools listed under the intro.",
      type: "array",
      of: [
        {
          type: "object",
          name: "tool",
          fields: [
            { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
            { name: "description", title: "Description", type: "string", validation: (r) => r.required() },
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
    defineField({
      name: "bodyParagraphs",
      title: "Right column paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({
      name: "supportLine",
      title: "Support line above resource links",
      type: "string",
      description: "e.g. 'If gambling is affecting you or someone you know, support is available 24/7:'",
    }),
    defineField({
      name: "resources",
      title: "Resource links",
      type: "array",
      of: [
        {
          type: "object",
          name: "resource",
          fields: [
            {
              name: "kind",
              title: "Style",
              type: "string",
              options: {
                list: [
                  { title: "Age (18+)", value: "age" },
                  { title: "GambleAware (green)", value: "ga" },
                  { title: "GamCare (red)", value: "gc" },
                  { title: "GAMSTOP (blue)", value: "gs" },
                  { title: "UKGC (neutral)", value: "ukgc" },
                ],
              },
              validation: (r) => r.required(),
            },
            { name: "label", title: "Label", type: "string" },
            { name: "sublabel", title: "Sub-label", type: "string" },
            { name: "href", title: "Link URL", type: "url" },
          ],
          preview: { select: { title: "label", subtitle: "kind" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Responsible gaming section" }) },
});
