import { defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  { title: "Clock", value: "clock" },
  { title: "Menu lines", value: "menu" },
  { title: "Card", value: "card" },
  { title: "Warning triangle", value: "warning" },
  { title: "House", value: "house" },
  { title: "Shopping bag", value: "bag" },
  { title: "Fork", value: "fork" },
  { title: "Globe", value: "globe" },
];

export const explainerSection = defineType({
  name: "explainerSection",
  title: "Explainer section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow text", type: "string" }),
    defineField({ name: "title", title: "Section title", type: "string" }),
    defineField({ name: "rightMeta", title: "Right-side label", type: "string" }),
    defineField({
      name: "cards",
      title: "Explainer cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "explainerCard",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICON_OPTIONS, layout: "dropdown" },
              validation: (r) => r.required(),
            },
            { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
            { name: "body", title: "Body", type: "text", rows: 5, validation: (r) => r.required() },
            { name: "tag", title: "Tag label", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "tag" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Explainer section" }) },
});
