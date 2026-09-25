import { Link, createFileRoute } from "@tanstack/react-router";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

const FAQ = [
  ["How do I start a live space?", "Open Spaces from the menu, tap “Start a space”, add a title and go live. You join as host automatically."],
  ["Who can see my stories?", "Only people you follow and people who follow you. Stories disappear after 24 hours."],
  ["How do tips and withdrawals work?", "Supporters tip through our payment partner. A small fee (5% Free, 3% Creator, 1% Studio) is deducted, and you can withdraw the rest from your earnings page."],
  ["How do I report something?", "Use the ••• menu on any post or profile and choose Report. Moderators review every report."],
  ["How do I delete my account?", "Contact us and we'll remove your account and data."],
];

export const Route = createFileRoute("/help")({
  head: () => pageHead("Help Center", "Answers to common questions about Spaces1: spaces, stories, tips and your account."),
  component: () => (
    <InfoPage eyebrow="Support" title="Help Center" intro="Quick answers to the questions we hear most.">
      {FAQ.map(([q, a]) => (
        <Section key={q} title={q}>
          <p>{a}</p>
        </Section>
      ))}
      <Section title="Still stuck?">
        <p>
          <Link to="/contact" className="font-semibold text-brand hover:underline">Contact our team</Link> and we'll get back to you.
        </p>
      </Section>
    </InfoPage>
  ),
});
