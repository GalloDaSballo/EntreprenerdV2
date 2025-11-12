import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex the Entreprenerd | Smart Contract Security Expert",
  description: "Security researcher, smart contract auditor, and founder of Recon. Top Code4rena judge specializing in invariant testing and blockchain security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
