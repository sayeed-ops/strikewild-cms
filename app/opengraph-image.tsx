import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StrikeWild — Best Free Spins Offers 2026";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 20% 0%, #1a1a1a 0%, #0a0a0a 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              background: "#EBFF3C",
              borderRadius: 4,
              transform: "rotate(15deg)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: "#EBFF3C",
            }}
          >
            STRIKEWILD
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#9a9a9a",
              fontWeight: 500,
              letterSpacing: -0.3,
            }}
          >
            UK · UKGC-licensed · 2026 wagering-cap compliant
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "white",
            }}
          >
            <div style={{ display: "flex" }}>Best Free Spins</div>
            <div style={{ display: "flex" }}>Offers 2026</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#cccccc",
              fontWeight: 400,
              maxWidth: 950,
              lineHeight: 1.3,
            }}
          >
            Verified offers from UKGC-licensed casinos. Ranked by real
            payout performance.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#7a7a7a",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <div style={{ display: "flex" }}>No wagering</div>
            <div style={{ display: "flex", color: "#444" }}>·</div>
            <div style={{ display: "flex" }}>No deposit</div>
            <div style={{ display: "flex", color: "#444" }}>·</div>
            <div style={{ display: "flex" }}>Exclusive deals</div>
          </div>
          <div style={{ display: "flex", color: "#EBFF3C", fontWeight: 600 }}>
            strikewild.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
