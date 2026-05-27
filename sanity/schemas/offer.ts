import { defineField, defineType } from "sanity";

export const offer = defineType({
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    defineField({
      name: "rank",
      title: "Rank",
      type: "number",
      description: "Position in the list (1 = top). Lower numbers appear first.",
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: "brand",
      title: "Brand name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Brand logo",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Offer title",
      type: "string",
      description: "e.g. '300 Cash Spins'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "desc",
      title: "Short description",
      type: "text",
      rows: 2,
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "slots",
      title: "Total slots available",
      type: "number",
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: "rating",
      title: "Rating (out of 10)",
      type: "number",
      validation: (r) => r.required().min(0).max(10),
    }),
    defineField({
      name: "ribbon",
      title: "Ribbon badge",
      type: "string",
      options: {
        list: [
          { title: "None", value: "" },
          { title: "New", value: "new" },
          { title: "Exclusive", value: "exclusive" },
          { title: "Best choice", value: "choice" },
          { title: "Code", value: "code" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "tags",
      title: "Pill tags",
      description: "Small colored badges shown on the card.",
      type: "array",
      of: [
        {
          type: "object",
          name: "tag",
          fields: [
            {
              name: "color",
              title: "Color",
              type: "string",
              options: {
                list: [
                  { title: "Neutral (gray)", value: "" },
                  { title: "Green", value: "green" },
                  { title: "Yellow", value: "yellow" },
                  { title: "Pink", value: "pink" },
                  { title: "Blue", value: "blue" },
                  { title: "Orange", value: "orange" },
                ],
              },
              validation: (r) => r.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            },
          ],
          preview: {
            select: { title: "label", subtitle: "color" },
          },
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "filters",
      title: "Filter categories",
      description: "Which filter chips this offer appears under.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "No deposit", value: "no-deposit" },
          { title: "No wagering", value: "no-wagering" },
          { title: "Exclusive", value: "exclusive" },
          { title: "New", value: "new" },
        ],
      },
    }),
    defineField({
      name: "payoutDays",
      title: "Payout days",
      type: "number",
      description: "Typical withdrawal time in days.",
      validation: (r) => r.required().integer().min(0),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA / affiliate URL",
      type: "url",
      description: "Where the Play / Claim button links to.",
    }),
  ],
  orderings: [
    {
      title: "Rank (low to high)",
      name: "rankAsc",
      by: [{ field: "rank", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "brand", subtitle: "title", media: "logo" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});
