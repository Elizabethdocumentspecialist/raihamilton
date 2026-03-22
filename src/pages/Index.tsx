import { motion } from "framer-motion";
import { ArrowRight, Globe, Satellite, Leaf, Shield, Brain, Zap, TrendingUp, Users, ExternalLink, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import WorldGrid from "@/components/WorldGrid";
import FadeIn from "@/components/FadeIn";
import raiPortrait from "@/assets/rai-portrait.png";
import waltonCastle from "@/assets/walton-castle.jpg";
import raiBhutan from "@/assets/rai-bhutan.jpg";
import tctImage from "@/assets/tct-walton-castle.jpg";

const easing = [0.16, 1, 0.3, 1];

const impactMetrics = [
  { value: "89,000", label: "Investors", sub: "Alexander Securities — Europe's Largest Share Dealer" },
  { value: "5", label: "Novels", sub: "Geopolitical fiction exploring governance & global systems" },
  { value: "40+", label: "Years", sub: "Cross-sector advisory spanning five continents" },
  { value: "1M+", label: "Doses", sub: "SinoVac COVID-19 vaccinations deployed globally" },
];

const strategicAchievements = [
  {
    tag: "Finance",
    title: "Alexander Securities",
    body: "Founded and built Europe's largest share dealing firm with 89,000 private investors. Acquired eleven private client divisions of major stock-broking firms. Awarded the only multiple application licence from the London Stock Exchange.",
    metric: "89,000 Investors",
  },
  {
    tag: "Technology",
    title: "Constellation 3D",
    body: "Founded and served as CEO following recruitment of scientists from the Moscow Academy of Science and Lenin Institute to New York. Developed advanced 3D optical disc technology for next-generation data storage.",
    metric: "NYSE Listed",
  },
  {
    tag: "Conglomerate",
    title: "Sistema — Russia",
    body: "Appointed Business Development Director under Vladimir Yevtushenkov. Built the multi-billion-dollar communications infrastructure connecting all Russian-speaking territories through mobile and social media platforms.",
    metric: "NYSE: MBT",
  },
  {
    tag: "Defense",
    title: "Pentagon Advisory",
    body: "Long-standing history of sharing new technologies with the Joint Chiefs at the Pentagon, the Department of Defense, and Homeland Security — bridging advanced imaging, geophysical survey, and strategic intelligence.",
    metric: "DoD · DHS",
  },
  {
    tag: "Finance",
    title: "Early Stage Capital",
    body: "Funded approximately 107 early stage businesses including for James Goldsmith in the USA, Robert Stigwood in the UK and Bermuda, Kerry Packer in Australia, and Richard Branson — including £52 million to create Virgin Airways.",
    metric: "£52M Virgin Airways",
  },
  {
    tag: "Humanitarian",
    title: "Planetary Green",
    body: "Trustee of the Gates-sponsored Millennium Health Foundation — now Planetary Green — focused on environmental surveillance, carbon accountability via space satellite, and protection of global rainforest biodiversity.",
    metric: "Charity No. 1119453",
  },
  {
    tag: "ESG / Materials",
    title: "Basalt Innovation",
    body: "Led a two-year collaboration with Georgian patent holders and German industrial partners to advance basalt as a next-generation construction material — delivering zero CO₂ emissions, superior strength, and reduced cost versus steel.",
    metric: "Zero CO₂ vs Steel",
  },
  {
    tag: "Philanthropy",
    title: "Teenage Cancer Trust",
    body: "Ongoing support for the Teenage Cancer Trust, including hosting the South West appeal launch at Walton Castle. Advocates for specialist care units ensuring young patients with advanced cancer are not placed in general wards.",
    metric: "TCT · Walton Castle",
  },
];

const focusDomains = [
  { icon: Satellite, label: "Satellite Imaging & Geophysical Mapping" },
  { icon: Leaf, label: "Environmental Infrastructure & Climate Systems" },
  { icon: TrendingUp, label: "Global Finance & Capital Markets" },
  { icon: Brain, label: "Advanced AI & Diagnostic Technologies" },
  { icon: Globe, label: "Geopolitical Strategy & Resource Economics" },
  { icon: Shield, label: "Defense Technology & Aerospace Supply Chains" },
  { icon: Zap, label: "Waste-to-Energy & Clean Technology" },
  { icon: Users, label: "Humanitarian Healthcare Initiatives" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <WorldGrid />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: easing }}
              className="mb-8"
            >
              <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest border border-gold/20 px-3 py-1">
                BRIEFING_DOC_01 // EXECUTIVE PROFILE
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easing }}
            >
              Alexander<br />
              <span className="text-gold">(Rai)</span><br />
              Hamilton
            </motion.h1>

            <motion.p
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6 border-l-2 border-gold/40 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easing }}
            >
              Architect of Global Systems &nbsp;·&nbsp; Advisor to Sovereign Interests
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: easing }}
            >
              Advising across global finance, advanced technologies, environmental systems,
              and strategic infrastructure development. Four decades of systemic impact
              across five continents.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: easing }}
            >
              <Link to="/biography" className="btn-ghost-gold">
                View Full Briefing <ArrowRight size={12} />
              </Link>
              <Link to="/initiatives" className="btn-ghost-gold" style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                Examine Initiatives <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ─── STRATEGIC IMPACT LEDGER ──────────────────────────────── */}
      <section className="py-24 border-y border-border bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
            {impactMetrics.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1} className="px-8 py-4 first:pl-0 last:pr-0">
                <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest mb-2">
                  Metric_{String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-serif text-4xl md:text-5xl text-foreground mb-1">{m.value}</div>
                <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">{m.label}</div>
                <div className="text-xs text-muted-foreground leading-snug">{m.sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WALTON CASTLE FEATURE ────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_02" title="HEADQUARTERS" />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-px border border-gold/20" />
              <img
                src={waltonCastle}
                alt="Walton Castle — Planetary Green Headquarters"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[8px] text-gold/80 uppercase tracking-widest border border-gold/40 bg-background/80 backdrop-blur-sm px-2 py-1">
                  Planetary Green HQ
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-foreground leading-tight">
                Walton Castle<br />
                <span className="text-gold">Global Humanitarian Hub</span>
              </h2>
              <div className="gold-rule w-12" />
              <p className="text-muted-foreground leading-relaxed">
                A 17th-century luxury castle serving as the operational headquarters of Planetary Green —
                attracting global leaders in science, business, and government for humanitarian conferences,
                diplomatic engagements, and high-level strategic discussions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Castle hosts charity galas, international fundraising events, cultural festivals, and
                private leadership briefings — with event bookings confirmed through to 2028. Recognized in
                international press as a leading luxury and humanitarian event destination.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { value: "17th C.", label: "Heritage Venue" },
                  { value: "2028", label: "Bookings To" },
                  { value: "Global", label: "Leadership Hub" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-serif text-2xl text-gold">{item.value}</div>
                    <div className="font-mono text-[8px] text-muted-foreground/50 uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/walton-castle" className="btn-ghost-gold inline-flex">
                Explore the Castle <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── BHUTAN HUMANITARIAN CREDIBILITY ─────────────────────── */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionHeader number="SECTION_03" title="GLOBAL HUMANITARIAN LEADERSHIP" />
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-6">
                <div className="font-mono text-[9px] text-gold/60 uppercase tracking-widest border border-gold/20 inline-block px-3 py-1">
                  Strategic Engagement · Decade-Long Relationship
                </div>
                <h2 className="font-serif text-4xl text-foreground leading-tight">
                  Strategic Engagement with<br />
                  <span className="text-gold">Bhutan's Most Influential</span><br />
                  Humanitarian Leader
                </h2>
                <div className="gold-rule w-12" />
                <p className="text-muted-foreground leading-relaxed">
                  Alexander (Rai) Hamilton has maintained a long-standing advisory relationship with
                  <strong className="text-foreground"> Ashi Dorji Wangmo Wangchuck</strong> — founder of the
                  Tarayana Foundation, dedicated to supporting rural communities, poverty alleviation, and
                  sustainable development across Bhutan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recognized as historically one of the most influential women in the transition of Bhutan,
                  Ashi Dorji Wangmo Wangchuck has been central to the nation's humanitarian evolution.
                  This engagement represents over a decade of advisory-level collaboration with Bhutan's
                  leadership ecosystem and direct involvement in humanitarian development programming.
                </p>
                <div className="border border-border bg-background p-6 space-y-3">
                  <div className="font-mono text-[8px] text-gold/50 uppercase tracking-widest">
                    Humanitarian Focus Areas
                  </div>
                  {[
                    "Rural Community Support & Poverty Alleviation",
                    "Sustainable Development Programming",
                    "Advisory-Level Government Engagement",
                    "Cross-Border Humanitarian Networks",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <figure className="space-y-4">
                <div className="relative border border-gold/20 overflow-hidden">
                  <img
                    src={raiBhutan}
                    alt="Alexander (Rai) Hamilton with Ashi Dorji Wangmo Wangchuck"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[8px] text-gold/70 uppercase tracking-widest border border-gold/30 bg-background/80 backdrop-blur-sm px-2 py-1">
                      Bhutan · Strategic Engagement
                    </span>
                  </div>
                </div>
                <figcaption className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest leading-relaxed">
                  Engagement with Ashi Dorji Wangmo Wangchuck — advancing rural development and
                  humanitarian impact in Bhutan. Relationship spanning over a decade of advisory collaboration.
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC ACHIEVEMENTS ───────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_04" title="STRATEGIC LEDGER" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {strategicAchievements.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="dossier-card bg-background p-8 h-full group hover:bg-card transition-colors duration-500">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest border border-gold/20 px-2 py-0.5">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">
                    {item.metric}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── GLOBAL STRATEGIC FOCUS ───────────────────────────────── */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionHeader number="SECTION_05" title="STRATEGIC FOCUS" />
          </FadeIn>
          <FadeIn delay={0.1} className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl">
              Domains of<br />
              <span className="text-gold">Strategic Engagement</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusDomains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="group border border-border p-6 hover:border-gold/40 transition-all duration-500 ease-hamilton">
                    <div className="mb-4">
                      <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <Icon size={18} className="text-gold/50 mb-4 group-hover:text-gold transition-colors duration-300" />
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-snug">
                      {domain.label}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PORTRAIT / TEASER ────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-px border border-gold/20" />
              <div className="absolute -inset-3 border border-gold/5" />
              <img
                src={raiPortrait}
                alt="Alexander (Rai) Hamilton"
                className="w-full max-w-sm object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <SectionHeader number="SECTION_06" title="EXECUTIVE PROFILE" />
              <h2 className="font-serif text-4xl text-foreground leading-tight">
                A Career Built<br />on Systemic Thinking
              </h2>
              <div className="gold-rule w-12" />
              <p className="text-muted-foreground leading-relaxed">
                From building Europe's largest securities firm to advising Russia's largest conglomerate,
                from Pentagon briefings to rainforest conservation — Alexander (Rai) Hamilton has spent
                four decades operating at the intersection where capital, technology, and geopolitical
                necessity converge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As an author of five geopolitical novels and former political editor of <em>Cercle</em> magazine,
                he brings an analyst's precision and a writer's clarity to every strategic engagement.
              </p>
              <Link to="/biography" className="btn-ghost-gold inline-flex">
                Examine Full Biography <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
