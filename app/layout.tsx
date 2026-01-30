import Preloader from "./components/Preloader";
import Providers from './components/theme-provider';
import { ControlDock } from './components/ControlDock';
import type { ReactNode } from "react";
import "./globals.css";
import { Barrio } from "next/font/google";

// Import Barrio font
const barrio = Barrio({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={barrio.className}>
        {/* Wrap everything in ThemeProvider */}
        <Providers>
          <Preloader>
            {children}
          </Preloader>
          <ControlDock/>
        </Providers>
      </body>
    </html>
  );
}
