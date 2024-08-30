import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './../components/navbar/Navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flash | Helping Indian Brand Scale Globally | Flash Checkout for 30+ Countries |", // Replace with your website title
  description: "Borderless Commerce", // Replace with your website description
  icons: {
    icon: "/fav.png", // Replace with your favicon, should be in the public directory
  },
  metadataBase: new URL("https://www.goflash.in"),
  openGraph: {
    title: "Flash | Helping Indian Brand Scale Globally | Flash Checkout for 30+ Countries |",
    description: "Borderless Commerce",
    images: [
      {
        url: "/fav.png", // Path to your resized image in the public directory
        width: 600, // Set your preferred width
        height: 315, // Set your preferred height
        alt: "Flash Checkout",
      },
    ],
    url: "https://www.goflash.in",
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
