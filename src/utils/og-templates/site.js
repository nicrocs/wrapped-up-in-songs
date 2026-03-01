import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// Color scheme
// Background: #141417  Primary text: #E8E6E1
// Secondary:  #9CA3AF  Accent:       #D4963A

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#141417",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Lora",
        },
        children: [
          // Amber glow bottom-left
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-120px",
                left: "-80px",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(194,130,42,0.18) 0%, transparent 70%)",
              },
            },
          },

          // Top rule
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "48px",
                left: "80px",
                right: "80px",
                height: "1px",
                background: "rgba(212,150,58,0.3)",
              },
            },
          },

          // Bottom rule
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "48px",
                left: "80px",
                right: "80px",
                height: "1px",
                background: "rgba(212,150,58,0.3)",
              },
            },
          },

          // Main content — centered
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                padding: "80px 96px",
                gap: "0px",
              },
              children: [
                // Eyebrow dash
                {
                  type: "div",
                  props: {
                    style: {
                      width: "40px",
                      height: "2px",
                      background: "#D4963A",
                      marginBottom: "40px",
                      opacity: "0.8",
                    },
                  },
                },

                // Title line 1 — italic light
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 80,
                      fontWeight: "400",
                      fontStyle: "italic",
                      color: "#E8E6E1",
                      margin: "0",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                      textAlign: "center",
                    },
                    children: "Wrapped Up",
                  },
                },

                // Title line 2 — bold amber
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 80,
                      fontWeight: "600",
                      color: "#D4963A",
                      margin: "0",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                      textAlign: "center",
                    },
                    children: "in Songs",
                  },
                },

                // Tagline / desc
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 22,
                      fontWeight: "400",
                      color: "#9CA3AF",
                      marginTop: "32px",
                      textAlign: "center",
                      letterSpacing: "0.02em",
                    },
                    children: SITE.desc,
                  },
                },

                // Hostname
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#6B7280",
                      marginTop: "48px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    },
                    children: new URL(SITE.website).hostname,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        SITE.title + SITE.desc + SITE.website + "Wrapped Up in Songs"
      ),
    }
  );
};