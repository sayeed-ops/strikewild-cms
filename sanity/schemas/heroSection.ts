import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow text",
      type: "string",
      description: "Small label above headline, e.g. 'UKGC Licensed · Updated 26 May 2026'.",
    }),
    defineField({
      name: "headlinePrefix",
      title: "Headline — before highlight",
      type: "string",
      description: "Text before the yellow highlighted phrase.",
    }),
    defineField({
      name: "headlineHighlight",
      title: "Headline — highlighted phrase",
      type: "string",
      description: "Phrase shown in yellow.",
    }),
    defineField({
      name: "headlineSuffix",
      title: "Headline — after highlight",
      type: "text",
      rows: 2,
      description: "Text after the highlighted phrase. Use a real line break for the second line.",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA label",
      type: "string",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA href",
      type: "string",
      description: "Use # anchors like '#offers' for in-page jumps, or a full URL.",
    }),
    defineField({
      name: "ghostCtaLabel",
      title: "Secondary CTA label",
      type: "string",
    }),
    defineField({
      name: "ghostCtaHref",
      title: "Secondary CTA href",
      type: "string",
    }),
    defineField({
      name: "legal",
      title: "Legal line",
      type: "string",
      description: "Small comma-separated regulatory line, e.g. '// 18+ · BeGambleAware.org'.",
    }),
    defineField({
      name: "ticker",
      title: "Ticker items",
      description: "Animated stats strip below the hero.",
      type: "array",
      of: [
        {
          type: "object",
          name: "tickerItem",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
            { name: "value", title: "Value", type: "string", validation: (r) => r.required() },
            {
              name: "highlight",
              title: "Highlight value in yellow",
              type: "boolean",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "trustCards",
      title: "Trust cards",
      description: "The 4 stat cards below the ticker.",
      type: "array",
      of: [
        {
          type: "object",
          name: "trustCard",
          fields: [
            { name: "value", title: "Big number / value", type: "string", validation: (r) => r.required() },
            { name: "label", title: "Label", type: "string", validation: (r) => r.required() },
            { name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() },
            {
              name: "highlightValue",
              title: "Highlight value in yellow",
              type: "boolean",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Hero section" }) },
});
