import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e3e3e1",
          color: "#18181b",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#2724d1",
          }}
        >
          notebook
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: "#474645", maxWidth: 800 }}>
            {site.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
