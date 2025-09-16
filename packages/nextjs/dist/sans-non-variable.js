import localFont from "next/font/local";

export const HikasamiSansNonVariable = localFont({
  src: [
    {
      path: "./fonts/Hikasami-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Hikasami-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Hikasami-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Hikasami-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hikasami-sans",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Inter",
    "Segoe UI",
    "Roboto",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});
