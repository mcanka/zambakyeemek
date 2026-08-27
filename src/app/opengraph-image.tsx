import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a192f",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#ea424a",
          }}
        >
          {COMPANY.shortName} · {COMPANY.tagline}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
            {COMPANY.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "rgba(255,255,255,0.7)", maxWidth: 900 }}>
            Endüstriyel ölçekte, günlük binlerce öğün üretim kapasitesiyle güvenilir toplu yemek hizmeti.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.45)", letterSpacing: 2 }}>
          zambakyemek.com
        </div>
      </div>
    ),
    { ...size }
  );
}
