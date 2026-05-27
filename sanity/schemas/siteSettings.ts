import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  // Singleton: only one document of this type exists.
  fields: [
    defineField({
      name: "siteName",
      title: "Site name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "defaultTitle",
      title: "Default page title",
      type: "string",
      description: "Used for the homepage <title>.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "defaultDescription",
      title: "Default meta description",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "ogImage",
      title: "Default OG image",
      type: "image",
      description:
        "Falls back to the auto-generated OG image if not provided.",
    }),
    defineField({
      name: "navStat",
      title: "Header live-stat text",
      type: "string",
      description: "e.g. '86,345 claimed today'",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site settings" };
    },
  },
});
