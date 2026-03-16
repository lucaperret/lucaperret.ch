import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luca Perret";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#1c1917",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "14px",
            backgroundColor: "#fafaf9",
            marginBottom: "40px",
            fontSize: "36px",
            fontWeight: 700,
            color: "#1c1917",
          }}
        >
          LP
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#fafaf9",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Luca Perret
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a8a29e",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Builder at the intersection of technology, knowledge management, and digital transformation.
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#78716c",
            marginTop: "auto",
          }}
        >
          lucaperret.ch
        </div>
      </div>
    ),
    { ...size }
  );
}
