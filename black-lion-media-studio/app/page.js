import Link from "next/link";
import {
  LandingFeatureMarquee,
  ShortcutRail
} from "../components/shared-ui";
import { businessLines } from "../lib/business-lines";

const nextSteps = [
  {
    href: "/services",
    label: "Estimate",
    value: "Compare service scope",
    note: "Use the estimator and full service directory after choosing a branch."
  },
  {
    href: "/book",
    label: "Book",
    value: "Appointment calendar",
    note: "Use Square appointment routing and booking-window guidance."
  },
  {
    href: "/support",
    label: "Support",
    value: "Route an issue",
    note: "Use support for account, billing, booking, merch, or delivery questions."
  },
  {
    href: "/legal",
    label: "Legal",
    value: "Policy and compliance",
    note: "Review privacy, terms, copyright, accessibility, and compliance posture."
  }
];

export default function HomePage() {
  return (
    <div className="page-shell homepage-shell">
      <main className="stack">
        <section className="panel hero-stage splash-landing" style={{ backgroundImage: "url('/ai/hero-editorial.png')" }}>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Multimedia / Tech Development / Fashion</p>
              <h1 className="brand-signature">Black Lion Studios</h1>
              <p>
                A splash entry for three branches: Black Lion Multimedia for photos, video, sound,
                and events; Black Lion Tech Development for software, web, and PC support; and
                Black Lion Lion Fashion for merch, fashion content, and the modeling sub-site.
              </p>
              <div className="hero-actions">
                <Link href="/multimedia" className="button">Photos & Video</Link>
                <Link href="/tech-development" className="button button-secondary">Software & Web</Link>
                <Link href="/fashion" className="button button-secondary">Fashion</Link>
              </div>
            </div>

            <div className="splash-branch-grid" aria-label="Black Lion Studios branches">
              {businessLines.map((line) => (
                <Link className="splash-branch-card" href={line.href} key={line.slug}>
                  <span>{line.eyebrow}</span>
                  <strong>{line.name}</strong>
                  <p>{line.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LandingFeatureMarquee
          items={businessLines.map((line) => line.name)}
        />

        <section className="panel" id="branches">
          <p className="label">Choose a branch</p>
          <h2 className="editorial-heading">Start with the part of Black Lion Studios that matches the work.</h2>
          <ShortcutRail
            items={businessLines.map((line) => ({
              href: line.href,
              label: line.eyebrow,
              value: line.name,
              note: line.summary
            }))}
            className="ui-shortcut-tight"
          />
        </section>

        <section className="panel">
          <p className="label">Need something specific?</p>
          <h2 className="editorial-heading">Detailed tools moved to the pages built for that job.</h2>
          <ShortcutRail items={nextSteps} className="ui-shortcut-tight" />
        </section>
      </main>
    </div>
  );
}
