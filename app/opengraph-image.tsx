import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);

  if (match?.[1]) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Não foi possível carregar a fonte ${family}`);
}

export default async function Image() {
  const headline = siteConfig.name;
  const playfair = await loadGoogleFont("Playfair Display", 600, headline);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17141a",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(198,180,222,0.35) 0%, rgba(23,20,26,0) 55%)",
        }}
      >
        <span
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Praia Grande
        </span>
        <span
          style={{
            marginTop: 28,
            fontFamily: "Playfair Display",
            fontSize: 88,
            color: "#ffffff",
          }}
        >
          {headline}
        </span>
        <span
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {siteConfig.tagline}
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair Display", data: playfair, style: "normal", weight: 600 }],
    },
  );
}
