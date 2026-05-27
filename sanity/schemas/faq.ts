import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ entry",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (r) => r.required().integer(),
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 5,
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "question", subtitle: "order" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle != null ? `#${subtitle}` : undefined,
      };
    },
  },
});
