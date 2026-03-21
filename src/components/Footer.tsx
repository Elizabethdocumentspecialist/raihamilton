import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const footerNav = [
  {
    heading: "Intelligence",
    links: [
      { label: "Overview", path: "/" },
      { label: "Biography", path: "/biography" },
      { label: "Initiatives", path: "/initiatives" },
      { label: "Publications", path: "/publications" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Walton Castle HQ", path: "/walton-castle" },
      { label: "Advisory Services", path: "/advisory" },
      { label: "Speaking Engagements", path: "/advisory#speaking" },
      { label: "Inquiry Form", path: "/advisory#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-border/50">

          {/* Col 1: Identity */}
          <div className="md:col-span-2 lg:col-span-1 space-y-5">
            <div>
              <h2 className="font-serif text-xl text-foreground leading-tight">
                Hamilton<br />Strategy Group
              </h2>
              <div className="gold-rule w-16 mt-3" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Advising on the intersection of geopolitical risk, advanced technology,
              and environmental systems infrastructure.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={10} className="text-gold/50" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold/40">
                London · Walton Castle · Riyadh · Dhaka
              </span>
            </div>
          </div>

          {/* Col 2 & 3: Nav links */}
          {footerNav.map((col) => (
            <div key={col.heading} className="space-y-5">
              <h3 className="font-mono text-[9px] uppercase tracking-widest text-gold/60 border-b border-border pb-2">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Governance */}
          <div className="space-y-5">
            <h3 className="font-mono text-[9px] uppercase tracking-widest text-gold/60 border-b border-border pb-2">
              Governance
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider block mb-0.5">Charity Registration</span>
                Planetary Green · No. 1119453
              </li>
              <li>
                <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider block mb-0.5">Humanitarian Fund</span>
                RHM World Health Initiative
              </li>
              <li>
                <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider block mb-0.5">Research Affiliation</span>
                Gates Foundation — Grand Challenges
              </li>
              <li>
                <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider block mb-0.5">Headquarters</span>
                Walton Castle, Somerset
              </li>
              <li className="pt-2">
                <span className="font-mono text-[9px] text-gold/40 uppercase tracking-widest">Current Node // London</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">
            © {year} Hamilton Strategy Group · All Rights Reserved
          </p>
          <div className="flex gap-6">
            <span className="font-mono text-[9px] text-muted-foreground/30 uppercase tracking-widest">
              raisecs@gmail.com
            </span>
            <span className="font-mono text-[9px] text-gold/30 uppercase tracking-widest">
              Classified — Public Release
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
