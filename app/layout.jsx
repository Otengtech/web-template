import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";
import HomePage from "@/app/Pages/HomePage";

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
        <HomePage />
        <main className="min-h-screen">{children}</main>
        <footer className="p-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TemplateHub. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
