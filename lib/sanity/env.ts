function required(name: string, value: string | undefined): string {
  if (!value || value === "your-project-id") {
    throw new Error(
      `Missing environment variable: ${name}. Set it in .env.local — see .env.local.example.`
    );
  }
  return value;
}

export const projectId = required(
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
