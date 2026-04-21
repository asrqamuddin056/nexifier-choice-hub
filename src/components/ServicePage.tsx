import { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

export interface ServicePageProps {
  variant: "ai" | "marketing" | "bpo";
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  intro: string;
  services: { icon: LucideIcon; title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  benefits: string[];
  ctaBtn: "ai" | "marketing" | "bpo";
}

const accentMap = {
  ai: { gradient: "bg-gradient-ai", soft: "bg-ai-soft", text: "text-ai", border: "border-ai/20" },
  marketing: { gradient: "bg-gradient-marketing", soft: "bg-marketing-soft", text: "text-marketing", border: "border-marketing/20" },
  bpo: { gradient: "bg-gradient-bpo", soft: "bg-bpo-soft", text: "text-bpo", border: "border-bpo/20" },
};

const ServicePage = ({
  variant,
  eyebrow,
  title,
  subtitle,
  intro,
  services,
  useCases,
  benefits,
  ctaBtn,
}: ServicePageProps) => {
  const a = accentMap[variant];
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className={`absolute inset-x-0 top-0 h-[500px] ${a.soft} opacity-60`} aria-hidden />
        <div className="container-tight relative pt-20 pb-20 md:pt-28 md:pb-24">
          <Link to="/" className="text-sm text-ink-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
            ← All services
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className={`inline-flex items-center gap-2 rounded-full border ${a.border} bg-surface-elevated px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${a.text} animate-fade-in`}>
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] animate-fade-in-up">
              {title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-muted leading-relaxed animate-fade-in-up [animation-delay:120ms]">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up [animation-delay:240ms]">
              <Button asChild variant={ctaBtn} size="xl">
                <Link to="/contact">Get In Touch <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#services">See what we do</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Services breakdown */}
      <section id="services" className="container-tight py-20 md:py-28 scroll-mt-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>What we do</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">A complete breakdown</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">{intro}</p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="surface-card p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${a.gradient}`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface border-y border-border/60">
        <div className="container-tight py-20 md:py-28">
          <div className="max-w-2xl">
            <p className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>Use cases</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Where this fits</h2>
            <p className="mt-3 text-ink-muted">Real applications we deliver across teams and industries.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className="rounded-2xl bg-surface-elevated border border-border/60 p-6 hover:shadow-elevated transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`text-xs font-mono ${a.text}`}>0{i + 1}</div>
                <h3 className="mt-2 font-semibold text-lg">{u.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>Benefits</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Why teams choose us</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Senior expertise, transparent process, and outcomes you can measure from week one.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-elevated p-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${a.gradient}`}>
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-sm font-medium leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-tight pb-24">
        <div className={`relative overflow-hidden rounded-3xl ${a.gradient} p-10 md:p-16 shadow-premium`}>
          <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay" aria-hidden />
          <div className="relative max-w-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Book a call and we'll map out exactly how this can work for your business.
            </p>
            <div className="mt-8">
              <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServicePage;
