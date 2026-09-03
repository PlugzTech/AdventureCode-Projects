import { BusinessLinePage } from "../../components/business-line-page";
import { findBusinessLine } from "../../lib/business-lines";

const line = findBusinessLine("tech-development");

export const metadata = {
  title: "Black Lion Tech Development",
  description:
    "Black Lion Tech Development handles software, web development, membership sites, maintenance, PC support, setup, upgrades, and troubleshooting.",
  alternates: { canonical: "/tech-development" }
};

export default function TechDevelopmentPage() {
  return <BusinessLinePage line={line} />;
}
