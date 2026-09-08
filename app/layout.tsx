import type { Metadata } from "next";
import { Montserrat, Sacramento } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food Trading Company Dubai | Wholesale Supplier | Mintrix",
  description:
    "Mintrix Trading is a Dubai-based global food trading company. We source agricultural commodities worldwide and deliver bulk orders in 24h. Get a quote.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sacramento.variable} font-sans text-[16px] md:text-[18px] antialiased bg-[#0b0b0a] text-white flex flex-col min-h-screen`}
      >
        <ScrollToTop />
        <SmoothScrolling>
          <Topbar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}