import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Mintrix Trading",
  description: "Connect with our global trade desk in Dubai. Get a wholesale quote or reach out to our trade team today.",
};

export default function ContactPage() {
  return <ContactClient />;
}