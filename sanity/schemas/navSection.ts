import { defineField, defineType } from "sanity";

export const navSection = defineType({
  name: "navSection",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Nav links",
      type: "array",
      of: [
        {
          type: "object",
          name: "navLink",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
            { name: "href", title: "URL", type: "string", validation: (r) => r.required() },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "liveStat",
      title: "Live stat text",
      type: "string",
      description: "e.g. '86,345 claimed today'",
    }),
    defineField({ name: "ctaLabel", title: "CTA button label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA button href", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Navigation" }) },
});
