import ServicePage from "@/components/ServicePage";
import { Bot, Workflow, Database, MessageSquare, BarChart3, Zap } from "lucide-react";

const AIAutomation = () => (
  <ServicePage
    variant="ai"
    ctaBtn="ai"
    eyebrow="AI Automation"
    title={<>Automate the work that<br />slows your team down.</>}
    subtitle="Custom AI systems, agents, and workflows that handle repetitive operations — so your team can focus on growth."
    intro="We design and ship production-grade AI systems tailored to your business. From chat agents to multi-step workflows, every build is owned, documented, and measurable."
    services={[
      { icon: Bot, title: "AI Agents", desc: "Custom GPT-powered agents for support, sales, research, and internal Q&A — trained on your data." },
      { icon: Workflow, title: "Workflow Automation", desc: "Connect tools with intelligent automations using n8n, Make, or custom pipelines." },
      { icon: Database, title: "Data & RAG Systems", desc: "Build knowledge bases and retrieval systems your AI can query reliably and securely." },
      { icon: MessageSquare, title: "Conversational AI", desc: "WhatsApp, Instagram, and web chatbots that book, qualify, and respond 24/7." },
      { icon: BarChart3, title: "Internal Tools", desc: "Custom dashboards and admin panels powered by AI to speed up internal operations." },
      { icon: Zap, title: "AI Strategy", desc: "Audits and roadmaps to identify the highest-leverage automations in your business." },
    ]}
    useCases={[
      { title: "Lead Qualification", desc: "AI chats with inbound leads, scores them, and books qualified calls into your calendar automatically." },
      { title: "Customer Support", desc: "Resolve 60–80% of tickets instantly with an agent trained on your help docs and history." },
      { title: "Internal Operations", desc: "Automate reporting, document processing, onboarding, and repetitive back-office tasks." },
    ]}
    benefits={[
      "Save 20–40 hours per week on repetitive work",
      "24/7 always-on, never-tired execution",
      "Faster response times for customers",
      "Built on your stack — you own the system",
      "Transparent metrics and dashboards",
      "Senior engineers, not no-code generalists",
    ]}
  />
);

export default AIAutomation;
