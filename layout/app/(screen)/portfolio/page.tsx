import { Metadata } from "next";
import React from "react";
const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  keywords: ["Next.js", "React", "JavaScript"],
};

export { metadata };
export default function Portfolio() {
  return <div>Portfolio</div>;
}
