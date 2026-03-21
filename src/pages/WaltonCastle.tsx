import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Globe, Heart, Users, Calendar, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import waltonCastle from "@/assets/walton-castle.jpg";

const impactAreas = [
  {
    icon: Heart,
    title: "Humanitarian Impact Through Events",
    body: "Walton Castle serves as the premier venue for Planetary Green's fundraising calendar — hosting charity galas, humanitarian summits, and benefit concerts that generate significant funding for global health and environmental programmes. Every event is curated to connect cause with capital at the highest level.",
    stat: "2028",
    statLabel: "Bookings Secured Through",
  },
  {
    icon: Globe,
    title: "Global Leadership Engagement",
    body: "The Castle provides a neutral, prestigious environment for government-level discussions, diplomatic engagements, and strategic partnerships. Heads of state, ministers, scientists, and institutional investors have convened here for private briefings, treaty discussions, and cross-sector collaborations.",
    stat: "17th C.",
    statLabel: "Luxury Heritage Venue",
  },
  {
    icon: Users,
    title: "Fundraising & Social Impact",
    body: "Beyond its function as a strategic headquarters, Walton Castle hosts festivals, cultural events, and community engagements that extend the reach of the Planetary Green mission to broader audiences — building the coalitions necessary for systemic humanitarian change.",
    stat: "£M+",
    statLabel: "Annual Fundraising Capacity",
  },
];

const eventTypes = [
  { label: "Charity Galas & Benefit Concerts" },
  { label: "Intergovernmental Summits" },
  { label: "Private Leadership Briefings" },
  { label: "Environmental Science Conferences" },
  { label: "Diplomatic Roundtables" },
  { label: "Cultural Heritage Festivals" },
  { label: "Strategic Investor Meetings" },
  { label: "Humanitarian Healthcare Forums" },
];

export default function WaltonCastle() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={waltonCastle}
            alt="Walton Castle — Headquarters of Planetary Green"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
          <FadeIn>
            <SectionHeader number="SECTION_01" title="WALTON CASTLE" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 leading-none">
              The Centre of<br />
              <span className="text-gold">Global Humanitarian</span><br />
              &amp; Strategic Engagement
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A 17th-century luxury castle serving as the operational headquarters of Planetary Green —
              hosting world leaders, scientists, governments, and humanitarians in pursuit of
              systemic global change.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── IDENTITY STRIP ─── */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x divide-border">
            {[
              { value: "17th Century", label: "Heritage Venue" },
              { value: "HQ", label: "Planetary Green Operations" },
              { value: "2028", label: "Event Bookings Secured" },
              { value: "Global", label: "Leadership Network" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08} className="md:px-8 first:pl-0 last:pr-0">
                <div className="font-serif text-3xl text-gold mb-1">{item.value}</div>
                <div className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest">{item.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <FadeIn direction="left">
            <div className="space-y-8">
              <SectionHeader number="SECTION_02" title="THE CASTLE" />
              <h2 className="font-serif text-4xl text-foreground leading-tight">
                A Singular Venue for<br />
                <span className="text-gold">Singular Ambition</span>
              </h2>
              <div className="gold-rule w-12" />
              <p className="text-muted-foreground leading-relaxed">
                Walton Castle is a rare historic estate — a 17th-century fortified castle set within
                extensive private grounds in England. As the operational headquarters of the Planetary Green
                initiative, it provides an extraordinary venue that combines heritage authority with
                functional luxury at the highest international standard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The castle's combination of historic gravitas, private setting, and world-class facilities
                makes it uniquely positioned as a convening venue for the kind of high-level engagements
                that require discretion, authority, and an environment commensurate with the significance
                of the discussions held within its walls.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under the stewardship of Alexander (Rai) Hamilton, Walton Castle has attracted global
                leaders in science, business, and government — serving as both the operational hub of
                Planetary Green's humanitarian mission and as a venue of genuine international prestige.
                Event bookings are confirmed through to 2028, reflecting its established position within
                the international leadership event calendar.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-px border border-gold/20" />
              <div className="absolute -top-3 -right-3 border border-gold/10 inset-0 pointer-events-none" />
              <img
                src={waltonCastle}
                alt="Walton Castle aerial view"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[8px] text-gold/70 uppercase tracking-widest border border-gold/30 bg-background/80 backdrop-blur-sm px-2 py-1">
                  Planetary Green HQ · Somerset, England
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── THREE IMPACT PILLARS ─── */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionHeader number="SECTION_03" title="STRATEGIC FUNCTIONS" />
          </FadeIn>
          <FadeIn delay={0.1} className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl">
              Three Pillars of<br />
              <span className="text-gold">Global Impact</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {impactAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="dossier-card bg-background p-8 h-full group hover:bg-card transition-colors duration-500">
                    <div className="mb-6">
                      <Icon size={20} className="text-gold/60 mb-4 group-hover:text-gold transition-colors duration-300" />
                      <div className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest mb-1">
                        Pillar_{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-4">{area.title}</h3>
                    <div className="gold-rule w-8 mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{area.body}</p>
                    <div className="border-t border-border pt-4">
                      <div className="font-serif text-2xl text-gold">{area.stat}</div>
                      <div className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">{area.statLabel}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EVENT TYPES ─── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <SectionHeader number="SECTION_04" title="EVENTS PROGRAMME" />
            <h2 className="font-serif text-4xl text-foreground mb-8 leading-tight">
              An International<br />
              <span className="text-gold">Events Calendar</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Walton Castle's events programme spans the full spectrum of high-level engagement —
              from intimate diplomatic briefings to large-scale charity galas and public heritage
              festivals — all united by a commitment to generating real-world impact for the
              Planetary Green mission.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {eventTypes.map((event, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <div className="flex items-center gap-3 border border-border p-3 hover:border-gold/30 transition-colors duration-300">
                    <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{event.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-card border border-border p-8 space-y-6">
              <div className="font-mono text-[9px] text-gold/60 uppercase tracking-widest border-b border-border pb-4">
                Venue Intelligence
              </div>
              {[
                { label: "Designation", value: "17th-Century Historic Estate" },
                { label: "Primary Function", value: "Planetary Green Headquarters" },
                { label: "Capacity", value: "High-Capacity Conference & Gala Events" },
                { label: "Location", value: "Somerset, England" },
                { label: "Booking Status", value: "Confirmed Through 2028" },
                { label: "Security Classification", value: "Private — By Appointment" },
                { label: "Affiliations", value: "Planetary Green · Hamilton Strategy Group" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-4 text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest flex-shrink-0">{item.label}</span>
                  <span className="text-muted-foreground text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MEDIA RECOGNITION ─── */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionHeader number="SECTION_05" title="MEDIA RECOGNITION" />
          </FadeIn>
          <FadeIn delay={0.1} className="mb-16">
            <h2 className="font-serif text-4xl text-foreground">
              Featured In
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-border hover:border-gold/30 transition-all duration-500 bg-background group max-w-2xl">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="font-mono text-[9px] text-gold/60 uppercase tracking-widest mb-2">
                      Press Coverage
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">
                      Wellness Voice — Luxury &amp; Events
                    </div>
                  </div>
                  <Star size={16} className="text-gold/40 group-hover:text-gold transition-colors duration-300" />
                </div>

                <blockquote className="font-serif text-xl text-foreground mb-4 leading-relaxed">
                  "How Walton Castle Became a Luxury Destination for Modern Events"
                </blockquote>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Walton Castle recognized as a leading luxury and humanitarian event destination —
                  featured for its unique combination of 17th-century heritage, world-class facilities,
                  and commitment to global impact through its role as the Planetary Green headquarters.
                </p>

                <a
                  href="https://wellnessvoice.com/how-walton-castle-became-a-luxury-destination-for-modern-event/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-gold inline-flex items-center gap-2"
                >
                  Read Full Article <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest">
              Engagement Protocol
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Convene at the<br />
              <span className="text-gold">Highest Level</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For inquiries regarding events, partnerships, or strategic engagements
              at Walton Castle, contact the Hamilton Strategy Group directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/advisory" className="btn-ghost-gold">
                Advisory Inquiry <ArrowRight size={12} />
              </Link>
              <Link to="/initiatives" className="btn-ghost-gold" style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                View Initiatives <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
