import PageShell from "@/components/layout/PageShell";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Megaphone, Users, Sparkles, Calendar } from "lucide-react";

const stats = [
  { value: "200+", label: "Businesses served" },
  { value: "450+", label: "Systems built" },
  { value: "1.2K+", label: "Campaigns managed" },
  { value: "30+", label: "Industries covered" },
];

const Index = () => {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-hero pointer-events-none" aria-hidden />

        <div className="container-tight relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-elevated px-4 py-1.5 text-xs font-medium text-ink-muted shadow-soft animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Three practices. One partner.
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up">
              Choose How You Want to{" "}
              <span className="text-gradient">Scale Your Business</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:120ms]">
              AI Systems, Marketing, or Execution Teams — pick the solution that fits your needs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up [animation-delay:240ms]">
              <Button asChild variant="premium" size="xl">
                <a href="#services">
                  Explore Services <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="https://wa.me/918143710924" target="_blank" rel="noopener noreferrer">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-tight pb-24 md:pb-32 scroll-mt-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Our Services</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Pick the path that fits your business
          </h2>
          <p className="mt-3 text-ink-muted">
            Each service is a dedicated practice with its own team, process, and outcomes — explore them independently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard
            index={0}
            variant="ai"
            eyebrow="Service 01"
            title="AI Automation"
            description="Automate workflows, decisions, and internal systems with custom AI agents that work 24/7."
            features={[
              "Custom AI agents & workflows",
              "Process & data automation",
              "Internal tools and dashboards",
            ]}
            ctaLabel="Explore AI Automation"
            to="/services/ai-automation"
            icon={Bot}
          />
          <ServiceCard
            index={1}
            variant="marketing"
            eyebrow="Service 02"
            title="Marketing"
            description="Generate qualified leads with paid ads, content, and conversion-driven campaigns."
            features={[
              "Paid ads on Meta & Google",
              "Lead generation funnels",
              "Branding & creative production",
            ]}
            ctaLabel="Explore Marketing"
            to="/services/marketing"
            icon={Megaphone}
          />
          <ServiceCard
            index={2}
            variant="bpo"
            eyebrow="Service 03"
            title="BPO Services"
            description="Outsource operations and execution with dedicated remote teams trained for your business."
            features={[
              "Customer support & sales teams",
              "Back-office operations",
              "Dedicated remote staff",
            ]}
            ctaLabel="Explore BPO Services"
            to="/services/bpo"
            icon={Users}
          />
        </div>
      </section>

      {/* Credibility */}
      <section className="border-y border-border/60 bg-surface">
        <div className="container-tight py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center md:text-left animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-tight py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16 shadow-premium">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-marketing/20 blur-3xl" aria-hidden />

          <div className="relative max-w-2xl">
            <Calendar className="h-8 w-8 opacity-80" />
            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-lg text-background/70 leading-relaxed">
              Book a 30-minute consultation. We'll help you identify the right service — no pressure, no pitch.
            </p>
            <div className="mt-8">
              <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
                <a href="https://wa.me/918143710924" target="_blank" rel="noopener noreferrer">
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Index;
