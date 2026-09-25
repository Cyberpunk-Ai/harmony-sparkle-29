import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { InfoPage, Section, pageHead } from "@/components/site/InfoPage";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)").max(2000),
});

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact", "Get in touch with the Spaces1 team for support, press or partnerships."),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:support@spaces1.app?subject=${encodeURIComponent("Spaces1 enquiry")}&body=${body}`;
    toast.success("Opening your email app…");
  }

  const field = "mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand";

  return (
    <InfoPage eyebrow="Contact" title="We'd love to hear from you" intro="Questions, feedback, press or partnerships — send us a note. Signed-in members can also open a ticket from Settings for faster help.">
      <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl border border-border bg-card/50 p-6">
        {(["name", "email"] as const).map((k) => (
          <label key={k} className="block text-sm font-semibold capitalize">
            {k}
            <input type={k === "email" ? "email" : "text"} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className={field} />
            {errors[k] ? <span className="mt-1 block text-xs text-destructive">{errors[k]}</span> : null}
          </label>
        ))}
        <label className="block text-sm font-semibold">
          Message
          <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
          {errors["message"] ? <span className="mt-1 block text-xs text-destructive">{errors["message"]}</span> : null}
        </label>
        <button type="submit" className="min-h-11 rounded-full bg-brand px-6 text-sm font-bold text-white hover:opacity-90">
          Send message
        </button>
      </form>
      <Section title="Email">
        <p>support@spaces1.app</p>
      </Section>
    </InfoPage>
  );
}
