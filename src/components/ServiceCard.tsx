import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  to: string;
  icon: LucideIcon;
  variant: "ai" | "marketing" | "bpo";
  index?: number;
}

const variantMap = {
  ai: {
    gradient: "bg-gradient-ai",
    soft: "bg-ai-soft",
    text: "text-ai",
    ring: "group-hover:ring-ai/30",
    btn: "ai" as const,
  },
  marketing: {
    gradient: "bg-gradient-marketing",
    soft: "bg-marketing-soft",
    text: "text-marketing",
    ring: "group-hover:ring-marketing/30",
    btn: "marketing" as const,
  },
  bpo: {
    gradient: "bg-gradient-bpo",
    soft: "bg-bpo-soft",
    text: "text-bpo",
    ring: "group-hover:ring-bpo/30",
    btn: "bpo" as const,
  },
};

const ServiceCard = ({
  eyebrow,
  title,
  description,
  features,
  ctaLabel,
  to,
  icon: Icon,
  variant,
  index = 0,
}: ServiceCardProps) => {
  const v = variantMap[variant];
  return (
    <Link
      to={to}
      style={{ animationDelay: `${index * 100}ms` }}
      className="group relative flex flex-col surface-card p-8 ring-1 ring-transparent hover:ring-2 transition-all animate-fade-in-up overflow-hidden"
    >
      <div
        className={`absolute -top-24 -right-24 h-48 w-48 rounded-full ${v.soft} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
        aria-hidden
      />

      <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ${v.gradient} shadow-elevated`}>
        <Icon className="h-6 w-6 text-white" />
      </div>

      <p className={`relative mt-6 text-xs font-semibold uppercase tracking-wider ${v.text}`}>{eyebrow}</p>
      <h3 className="relative mt-2 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="relative mt-3 text-sm text-ink-muted leading-relaxed">{description}</p>

      <ul className="relative mt-6 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${v.gradient}`} />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
        <span className="text-sm font-semibold">{ctaLabel}</span>
        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${v.gradient} text-white transition-transform group-hover:translate-x-1`}>
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
