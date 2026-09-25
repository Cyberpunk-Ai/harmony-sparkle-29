import { createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

export const Route = createFileRoute("/cookies")({
  head: () => pageHead("Cookie Policy", "How Spaces1 uses cookies and browser storage to keep you signed in."),
  component: () => (
    <InfoPage eyebrow="Legal" title="Cookie Policy" updated="September 2026" intro="We keep this simple: we only store what's needed to keep you signed in.">
      <Section title="Essential only">
        <p>Spaces1 stores a sign-in session in your browser so you stay logged in. Your preferences and settings are saved to your account, not your device.</p>
      </Section>
      <Section title="No ad tracking">
        <p>We don't use third-party advertising cookies or sell browsing data.</p>
      </Section>
    </InfoPage>
  ),
});
