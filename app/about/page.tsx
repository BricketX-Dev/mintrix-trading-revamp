import type { Metadata } from "next";
import AboutClient from "./AboutClient.tsx";

export const metadata: Metadata = {
  title: "About Us | Mintrix Trading Dubai",
  description: "Mintrix Trading is a UAE-registered global food trading company sourcing agricultural commodities worldwide and delivering with absolute confidence.",
};

export default function AboutPage() {
  return <AboutClient />;
}