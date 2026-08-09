import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Anish Kumar | Full Stack & Systems Developer",
  description:
    "Portfolio of Anish Kumar, Full Stack & Systems Developer at IIIT Naya Raipur. Building scalable systems from scratch with minimal third-party dependencies.",
};

export default function Home() {
  return <Hero />;
}
