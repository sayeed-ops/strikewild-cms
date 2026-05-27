import { defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  { title: "House", value: "house" },
  { title: "Shopping bag", value: "bag" },
  { title: "Fork", value: "fork" },
  { title: "Globe", value: "globe" },
  { title: "Clock", value: "clock" },
  { title: "Card", value: "card" },
];

export const otherDealsSection = defineType({
  name: "otherDealsSection",
  title: "Other deals section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow text", type: "string" }),
    defineField({
      name: "titlePrefix",
      title: "Title — before highlight",
      type: "string",
      description: "Text before the yellow highlighted word.",
    }),
    defineField({
      name: "titleHighlight",
      title: "Title — highlighted word",
      type: "string",
    }),
    defineField({ name: "body", title: "Body paragraph", type: "text", rows: 3 }),
    defineField({
      name: "items",
      title: "Category items",
      type: "array",
      of: [
        {
          type: "object",
          name: "dealItem",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICON_OPTIONS, layout: "dropdown" },
              validation: (r) => r.required(),
            },
            { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        },
      ],
    }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Other deals section" }) },
});
