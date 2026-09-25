import { createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

export const Route = createFileRoute("/guidelines")({
  head: () => pageHead("Community Guidelines", "How to be a great member of the Spaces1 community."),
  component: () => (
    <InfoPage eyebrow="Community" title="Community Guidelines" intro="Spaces1 works when people feel safe to show up as themselves. These are the basics.">
      <Section title="Be respectful">
        <p>No harassment, hate speech, threats or targeted abuse — in posts, comments, messages or live spaces.</p>
      </Section>
      <Section title="Be authentic">
        <p>Don't impersonate others, run fake accounts, or manipulate engagement.</p>
      </Section>
      <Section title="Keep it safe">
        <p>No illegal content, sexual content involving minors, or promotion of self-harm. Report anything that worries you — our moderators review every report.</p>
      </Section>
    </InfoPage>
  ),
});
