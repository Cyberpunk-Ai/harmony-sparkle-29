import { createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About", "Spaces1 is a social home for creators: live audio spaces, stories, messaging and fair creator earnings."),
  component: () => (
    <InfoPage
      eyebrow="About us"
      title="A social home built around creators"
      intro="Spaces1 brings posts, stories, live audio spaces and direct messages together, with simple ways for creators to earn from the people who value their work."
    >
      <Section title="What we believe">
        <p>Great communities form around people, not algorithms alone. Your feed blends who you follow with what you genuinely engage with, and no single account is allowed to crowd everyone else out.</p>
      </Section>
      <Section title="Fair earnings">
        <p>Tips go straight through our payment partner. We never hold card or bank details. A small, clearly shown platform fee applies: 5% on Free, 3% on Creator and 1% on Studio.</p>
      </Section>
      <Section title="Safety first">
        <p>Stories are visible only to your circle and disappear after 24 hours. Reports are reviewed by real moderators, and every staff action is logged.</p>
      </Section>
    </InfoPage>
  ),
});
