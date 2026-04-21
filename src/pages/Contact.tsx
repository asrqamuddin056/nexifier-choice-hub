import { useState } from "react";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Calendar, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [interest, setInterest] = useState<string>("Not sure yet");
  const options = ["AI Automation", "Marketing", "BPO Services", "Not sure yet"];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks — we'll be in touch.",
      description: "We typically respond within one business day.",
    });
  };

  return (
    <PageShell>
      <section className="container-tight py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Let's talk about what you need.
            </h1>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              Tell us a bit about your business and we'll point you to the right service — or set up a call if it's a fit.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <Calendar className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-sm">30-min consultation</p>
                  <p className="text-sm text-ink-muted">No pressure, no pitch.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-sm">hello@nexifier.com</p>
                  <p className="text-sm text-ink-muted">Replies within 1 business day.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-sm">Direct chat</p>
                  <p className="text-sm text-ink-muted">Available Mon–Fri, 9am–6pm.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="surface-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Jane Cooper" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" required placeholder="jane@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>

              <div className="space-y-2">
                <Label>I'm interested in</Label>
                <div className="flex flex-wrap gap-2">
                  {options.map((o) => (
                    <button
                      type="button"
                      key={o}
                      onClick={() => setInterest(o)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        interest === o
                          ? "bg-foreground text-background border-foreground"
                          : "bg-surface-elevated border-border hover:border-foreground/30"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your business</Label>
                <Textarea id="message" rows={5} placeholder="What are you trying to solve?" />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
