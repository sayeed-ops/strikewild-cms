import { defineField, defineType } from "sanity";

export const educationSection = defineType({
  name: "educationSection",
  title: "Education section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow text", type: "string" }),
    defineField({ name: "title", title: "Section title", type: "string" }),
    defineField({
      name: "cards",
      title: "Cards",
      description: "Two info cards. Each has its own eyebrow, title, paragraphs, and stat row.",
      type: "array",
      of: [
        {
          type: "object",
          name: "eduCard",
          fields: [
            { name: "eyebrow", title: "Card eyebrow", type: "string" },
            { name: "title", title: "Card title", type: "string", validation: (r) => r.required() },
            {
              name: "paragraphs",
              title: "Body paragraphs",
              type: "array",
              of: [{ type: "text", rows: 4 }],
              validation: (r) => r.required().min(1),
            },
            {
              name: "stats",
              title: "Stat row",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "stat",
                  fields: [
                    { name: "value", title: "Value", type: "string", validation: (r) => r.required() },
                    { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
                    {
                      name: "highlight",
                      title: "Highlight value in yellow",
                      type: "boolean",
                      initialValue: false,
                    },
                  ],
                  preview: { select: { title: "label", subtitle: "value" } },
                },
              ],
            },
          ],
          preview: { select: { title: "title", subtitle: "eyebrow" } },
        },
      ],
      validation: (r) => r.length(2).warning("Designed for exactly 2 cards."),
    }),
  ],
  preview: { prepare: () => ({ title: "Education section" }) },
});
