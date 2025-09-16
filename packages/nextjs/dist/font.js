import localFont from "next/font/local";

export const HikasamiSans = localFont({
  src: "./fonts/Hikasami-VF.woff2",
  variable: "--font-hikasami-sans",
  weight: "100 900",
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
