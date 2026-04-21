import ServicePage from "@/components/ServicePage";
import { Users, Headphones, Phone, ClipboardList, FileText, UserCheck } from "lucide-react";

const BPO = () => (
  <ServicePage
    variant="bpo"
    ctaBtn="bpo"
    eyebrow="BPO Services"
    title={<>Dedicated remote teams,<br />trained for your business.</>}
    subtitle="Outsource operations, support, and execution with managed teams that feel like an extension of your company."
    intro="We recruit, train, and manage remote talent so you can scale without the overhead. From single hires to full departments, every team is led by an account manager and accountable to outcomes."
    services={[
      { icon: Headphones, title: "Customer Support", desc: "Email, chat, and phone support agents trained on your product and tone." },
      { icon: Phone, title: "Sales & SDR Teams", desc: "Outbound callers and appointment setters that book qualified meetings." },
      { icon: ClipboardList, title: "Back Office Ops", desc: "Data entry, order processing, scheduling, and admin handled at scale." },
      { icon: UserCheck, title: "Virtual Assistants", desc: "Senior EAs supporting executives with calendar, inbox, and project management." },
      { icon: FileText, title: "Content Operations", desc: "Editors, designers, and content coordinators embedded in your workflow." },
      { icon: Users, title: "Custom Teams", desc: "Build your own department — recruited, trained, and managed end-to-end." },
    ]}
    useCases={[
      { title: "High-Volume Support", desc: "Scale to 24/7 multilingual customer support without hiring or training in-house." },
      { title: "Outbound Sales", desc: "Book hundreds of qualified calls per month with dedicated SDR teams." },
      { title: "Operations Scale-Up", desc: "Offload back-office work and free your core team to focus on strategy and growth." },
    ]}
    benefits={[
      "60–70% lower than local hiring costs",
      "Vetted, English-fluent professionals",
      "Account manager on every team",
      "Replace agents within 48h if needed",
      "Full transparency on KPIs and SLAs",
      "Scale up or down month-to-month",
    ]}
  />
);

export default BPO;
