import type { ReactNode } from "react";

export type IconKey =
  | "clock"
  | "menu"
  | "card"
  | "warning"
  | "house"
  | "bag"
  | "fork"
  | "globe";

const ICONS: Record<IconKey, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  menu: (
    <>
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
      <path d="M7 3l-4 9 4 9" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 15h3" />
    </>
  ),
  warning: (
    <>
      <path d="M12 2L2 19h20L12 2z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r=".8" fill="currentColor" />
    </>
  ),
  house: (
    <>
      <path d="M2 12l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
    </>
  ),
  bag: (
    <>
      <path d="M3 7h18l-2 13H5L3 7z" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </>
  ),
  fork: (
    <>
      <path d="M4 4v6a4 4 0 008 0V4" />
      <path d="M8 12v8" />
      <path d="M16 4v16M16 14c2 0 4-1 4-4s-2-4-4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18" />
      <path d="M12 3a14 14 0 000 18" />
    </>
  ),
};

interface Props {
  name: IconKey;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 22, className }: Props) {
  const children = ICONS[name];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ICON_OPTIONS: { title: string; value: IconKey }[] = [
  { title: "Clock", value: "clock" },
  { title: "Menu lines", value: "menu" },
  { title: "Card", value: "card" },
  { title: "Warning triangle", value: "warning" },
  { title: "House (travel)", value: "house" },
  { title: "Shopping bag", value: "bag" },
  { title: "Fork (dining)", value: "fork" },
  { title: "Globe", value: "globe" },
];
