import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const SITE_LINKS = [
  { to: "/about", label: "About" },
  { to: "/help", label: "Help Center" },
  { to: "/guidelines", label: "Guidelines" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/cookies", label: "Cookies" },
] as const;

export function InfoPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link to="/" className="text-xl font-black tracking-tight">
            Spaces<span className="text-brand">1</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/feed" className="hidden min-h-11 items-center rounded-full px-4 text-sm font-semibold text-muted-foreground hover:text-foreground sm:inline-flex">
              Open app
            </Link>
            <Link to="/auth" className="inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-bold text-white hover:opacity-90">
              Join Spaces1
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        {updated ? <p className="mt-3 text-xs text-muted-foreground">Last updated {updated}</p> : null}
        <div className="prose-info mt-12 space-y-10">{children}</div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Spaces1</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {SITE_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Spaces1` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Spaces1` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
