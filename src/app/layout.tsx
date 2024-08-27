import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './../components/navbar/Navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flash", // Replace with your website title
  description: "Your Website Description", // Replace with your website description
  icons: {
    icon: "/fav.png", // Replace with your favicon, should be in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
