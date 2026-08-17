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
          background: "#1e2b30",
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
            color: "#e2a530",
          }}
        >
          {COMPANY.city} · {COMPANY.district}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#faf7f0", lineHeight: 1.05 }}>
            {COMPANY.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "rgba(250,247,240,0.7)", maxWidth: 900 }}>
            Endüstriyel ölçekte, günlük 30.000 öğün üretim kapasitesiyle güvenilir toplu yemek hizmeti.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "rgba(250,247,240,0.45)", letterSpacing: 2 }}>
          mekasyemek.com
        </div>
      </div>
    ),
    { ...size }
  );
}
