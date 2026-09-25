import { createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms of Service", "The rules for using Spaces1, including accounts, content, payments and creator fees."),
  component: () => (
    <InfoPage eyebrow="Legal" title="Terms of Service" updated="September 2026" intro="By using Spaces1 you agree to these terms. Please read them carefully.">
      <Section title="1. Your account">
        <p>You must be at least 13 years old. You're responsible for activity on your account and for keeping your sign-in details safe.</p>
      </Section>
      <Section title="2. Your content">
        <p>You own what you post. You give Spaces1 permission to show it to the audience you choose. Don't post content that is illegal, hateful, harassing or that infringes someone else's rights.</p>
      </Section>
      <Section title="3. Payments and fees">
        <p>Subscriptions and tips are processed by our payment partner. A platform fee is deducted from tips before withdrawal: 5% (Free), 3% (Creator), 1% (Studio). The fee is shown before you confirm.</p>
      </Section>
      <Section title="4. Moderation">
        <p>We may remove content or suspend accounts that break our Community Guidelines. You can appeal any decision by contacting support.</p>
      </Section>
      <Section title="5. Changes">
        <p>We'll notify you of meaningful changes to these terms before they take effect.</p>
      </Section>
    </InfoPage>
  ),
});
