import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-surface mt-32">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-ai flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-display font-bold text-lg">Nexifier</span>
          </Link>
          <p className="mt-4 text-sm text-ink-muted max-w-sm leading-relaxed">
            Three independent practices. One trusted partner. Choose the solution that fits how you want to scale.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/services/ai-automation" className="hover:text-foreground transition-colors">AI Automation</Link></li>
            <li><Link to="/services/marketing" className="hover:text-foreground transition-colors">Marketing</Link></li>
            <li><Link to="/services/bpo" className="hover:text-foreground transition-colors">BPO Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Book a Call</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-tight py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Nexifier. All rights reserved.</p>
          <p>Built for businesses that move fast.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
