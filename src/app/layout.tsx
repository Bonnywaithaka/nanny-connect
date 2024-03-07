import React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import DefaultClientConfigs from "../components/DefaultClientConfigs";

export const metadata: Metadata = {
  title: "Nanny Connect",
  description:
    "Nanny connect helps build trust for the employer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicons/72x72.png" />
        <link rel="apple-touch-icon" href="/favicons/114x114.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="emotion-insertion-point" content="" />
      </head>
      <DefaultClientConfigs>
        <body>{children}</body>
      </DefaultClientConfigs>
    </html>
  );
}
