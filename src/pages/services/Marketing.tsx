import ServicePage from "@/components/ServicePage";
import { Megaphone, Target, PenTool, TrendingUp, Mail, Video } from "lucide-react";

const Marketing = () => (
  <ServicePage
    variant="marketing"
    ctaBtn="marketing"
    eyebrow="Marketing"
    title={<>Generate qualified leads,<br />predictably.</>}
    subtitle="Performance marketing, content, and creative built to drive real pipeline — not just impressions."
    intro="We run growth like a system. Paid acquisition, conversion-driven funnels, and creative production designed to turn ad spend into measurable revenue."
    services={[
      { icon: Target, title: "Paid Ads", desc: "Meta, Google, TikTok and LinkedIn campaigns managed by experienced media buyers." },
      { icon: TrendingUp, title: "Lead Generation", desc: "End-to-end funnels: landing pages, offers, lead magnets, and nurture sequences." },
      { icon: PenTool, title: "Brand & Creative", desc: "Identity systems, ad creatives, and visuals that convert and look premium." },
      { icon: Video, title: "Video Production", desc: "UGC-style ads, reels, and short-form video built to perform on paid channels." },
      { icon: Mail, title: "Email & CRM", desc: "Automated nurture flows and broadcast campaigns to convert leads into customers." },
      { icon: Megaphone, title: "Strategy", desc: "Positioning, offer design, and full-funnel growth strategy from day one." },
    ]}
    useCases={[
      { title: "Local Service Businesses", desc: "Fill calendars with booked consultations through targeted Meta and Google ads." },
      { title: "Coaches & Agencies", desc: "Build evergreen lead pipelines with high-ticket funnels and qualified discovery calls." },
      { title: "E-commerce Brands", desc: "Scale paid acquisition with creative testing, ROAS-focused buying, and email automation." },
    ]}
    benefits={[
      "Lower cost per lead, month over month",
      "Conversion-tested creative and copy",
      "Weekly performance reporting",
      "Senior media buyers, not interns",
      "Full-funnel ownership from ad to CRM",
      "Transparent spend and pipeline metrics",
    ]}
  />
);

export default Marketing;
