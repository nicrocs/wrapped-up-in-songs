import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// Color scheme
// Background: #141417  Primary text: #E8E6E1
// Secondary:  #9CA3AF  Accent:       #D4963A
// Border:     #2C2C30

export default async post => {
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

          // Main content
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "80px 96px",
                width: "100%",
                height: "100%",
              },
              children: [
                // Site name / eyebrow
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            width: "28px",
                            height: "2px",
                            background: "#D4963A",
                            display: "flex",
                          },
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 16,
                            fontWeight: "400",
                            color: "#9CA3AF",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                          },
                          children: SITE.title,
                        },
                      },
                    ],
                  },
                },

                // Post title (center)
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 72,
                      fontWeight: "600",
                      color: "#E8E6E1",
                      lineHeight: 1.15,
                      maxHeight: "340px",
                      overflow: "hidden",
                      margin: "0",
                      letterSpacing: "-0.01em",
                    },
                    children: post.data.title,
                  },
                },

                // Footer row: author + accent bar
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 22,
                            color: "#9CA3AF",
                            fontWeight: "400",
                          },
                          children: [
                            "by ",
                            {
                              type: "span",
                              props: {
                                style: {
                                  color: "#D4963A",
                                  fontWeight: "600",
                                },
                                children: post.data.author,
                              },
                            },
                          ],
                        },
                      },
                      // Small decorative dot in amber
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#D4963A",
                            opacity: "0.6",
                          },
                        },
                      },
                    ],
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
        post.data.title + post.data.author + SITE.title + "by"
      ),
    }
  );
};