import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: "Portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
