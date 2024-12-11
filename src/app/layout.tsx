import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-3 sm:mx-10 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
