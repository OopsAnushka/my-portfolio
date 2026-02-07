import type { Metadata } from "next";
import { Pompiere, Inter } from "next/font/google"; 
import ClientLayout from "./components/ClientLayout"; // Import the new wrapper
import "./globals.css";

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-pompiere',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anushka's Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pompiere.variable} ${inter.variable} antialiased bg-black text-white`}>
        {/* Pass children to the ClientLayout to handle interactivity */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}