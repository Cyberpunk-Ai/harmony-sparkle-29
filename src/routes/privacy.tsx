import { createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Policy", "What Spaces1 collects, why, and how you stay in control of your data."),
  component: () => (
    <InfoPage eyebrow="Legal" title="Privacy Policy" updated="September 2026" intro="We collect only what's needed to run Spaces1, and we never sell your personal data.">
      <Section title="What we collect">
        <p>Your profile details, the content you post, who you follow, and basic activity (likes, views) used to personalise your feed.</p>
      </Section>
      <Section title="What we don't collect">
        <p>We never store card numbers, bank credentials or wallet keys. Payments are handled entirely by our payment partner.</p>
      </Section>
      <Section title="Who can see what">
        <p>Posts are public. Stories are visible only to people you follow or who follow you, and expire after 24 hours. Messages are visible only to the people in the conversation.</p>
      </Section>
      <Section title="Your choices">
        <p>You can edit your profile, change preferences in Settings, or ask us to delete your account at any time.</p>
      </Section>
    </InfoPage>
  ),
});
