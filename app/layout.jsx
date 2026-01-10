import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";
import HomePage from "@/app/page";
import Footer from "./Components/Footer";

const poppins = Poppins({
  variable: "--font-proxima-nova",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "TemplateHub – Website Templates Marketplace",
  description: "Browse, preview, and download professional website templates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-50 font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
