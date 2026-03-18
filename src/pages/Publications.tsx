import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, BookOpen, FileText, Edit3 } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

const researchPapers = [
  {
    tag: "Healthcare Technology",
    title: "AI Clinical Diagnostics — Strategic Opportunity in UAE & Middle East",
    year: "2026",
    abstract: "An analysis of AI diagnostic platforms and the strategic gap for new clinical AI capabilities within UAE and MENA healthcare systems. Covers K Health, Digital Diagnostics, Qure.ai, and the regulatory landscape under MoHAP and DHA frameworks.",
    author: "Alexander Hamilton — Trustee, Planetary Green (Reg. 1119453)",
  },
  {
    tag: "Environmental Policy",
    title: "Beyond Carbon Credits: Satellite-Verified Environmental Accountability",
    year: "2025",
    abstract: "A policy framework proposing the replacement of existing carbon credit mechanisms with satellite-verified rainforest protection programmes, enabling exact compensation for carbon emission through the measured cost of surveillance and protection.",
    author: "Hamilton Strategy Group",
  },
  {
    tag: "Resource Economics",
    title: "Global Mineral Mapping & Sovereign Wealth Development",
    year: "2024",
    abstract: "Strategic analysis of how geophysical aerial survey technology transforms the economics of mineral discovery — enabling governments to value subsurface resources before extraction and negotiate from a position of verified information.",
    author: "Hamilton Strategy Group · TechnoImaging",
  },
  {
    tag: "Energy Transition",
    title: "Waste-to-Energy as Development Infrastructure",
    year: "2024",
    abstract: "Examination of pyrolysis-based conversion of plastic and tyre waste into light crude oil and electricity as a sustainable development tool in regions with high waste accumulation and energy poverty.",
    author: "Hamilton Strategy Group",
  },
  {
    tag: "Geopolitical Strategy",
    title: "The Architecture of Strategic Infrastructure in Emerging Markets",
    year: "2023",
    abstract: "Analysis of the intersection between geopolitical risk, resource security, and technology infrastructure in emerging market contexts — drawing on direct advisory experience across the Gulf, Africa, and Central Asia.",
    author: "Hamilton Strategy Group",
  },
];

const policyCommentary = [
  {
    topic: "Energy Transition",
    description: "The systemic challenge of transitioning global energy infrastructure — why incremental approaches fail and what structural change requires.",
  },
  {
    topic: "Geopolitical Resource Competition",
    description: "Critical mineral supply chains as a new front in great power competition. The strategic implications for Western economies.",
  },
  {
    topic: "Climate Strategy",
    description: "Why current carbon accounting mechanisms lack credibility, and what a verifiable alternative architecture would require.",
  },
  {
    topic: "Technological Transformation",
    description: "AI, satellite systems, and advanced materials as determinants of the next phase of economic and geopolitical power.",
  },
  {
    topic: "Global Economic Systems",
    description: "The fragility of post-Bretton Woods financial architecture and the emerging alternatives being tested in sovereign and institutional contexts.",
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_04" title="PUBLICATIONS & THOUGHT LEADERSHIP" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
            Intelligence<br />
            <span className="text-gold">Archive</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="max-w-xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Research papers, policy commentary, editorial work, and five geopolitical novels
            documenting the evolution of the global order from direct experience.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* Research papers */}
            <section>
              <FadeIn>
                <div className="flex items-center gap-3 mb-10 border-t border-border pt-6">
                  <FileText size={14} className="text-gold/60" />
                  <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                    Strategic Research Papers
                  </span>
                </div>
              </FadeIn>
              <div className="space-y-2">
                {researchPapers.map((paper, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="border border-border p-8 group hover:border-gold/20 transition-colors duration-500">
                      <div className="flex items-start justify-between mb-4">
                        <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest border border-gold/20 px-2 py-0.5">
                          {paper.tag}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">
                          {paper.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{paper.abstract}</p>
                      <div className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest border-t border-border pt-3">
                        {paper.author}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>

            {/* Policy commentary */}
            <section>
              <FadeIn>
                <div className="flex items-center gap-3 mb-10 border-t border-border pt-6">
                  <Edit3 size={14} className="text-gold/60" />
                  <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                    Policy Commentary — Cercle Magazine, Political Editor
                  </span>
                </div>
              </FadeIn>
              <div className="space-y-4">
                {policyCommentary.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="border-l-2 border-gold/20 pl-6 py-3 hover:border-gold/60 transition-colors duration-300">
                      <h4 className="font-serif text-lg text-foreground mb-2">{item.topic}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Book */}
          <div className="space-y-8">
            <FadeIn direction="right">
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen size={14} className="text-gold/60" />
                  <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                    Author
                  </span>
                </div>
                <div className="relative mb-6">
                  <div className="absolute -inset-px border border-gold/20" />
                  <img
                    src={bookCover}
                    alt="The Drowning Street Years — Rai Hamilton"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  The Drowning Street Years
                </h3>
                <p className="font-mono text-[9px] text-gold/60 uppercase tracking-widest mb-4">
                  Part One: Learning to Swim
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Percy Vere navigates quiet corridors of wealth and recognition — from the brutality
                  of colonialism to the killing fields of Cambodia and into a world where fortunes
                  are made and lost with a phone call. The bigger the institution, the dirtier the secrets.
                </p>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">Author</span>
                    <span className="text-muted-foreground">Rai Hamilton</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">Series</span>
                    <span className="text-muted-foreground">5 volumes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">Genre</span>
                    <span className="text-muted-foreground">Geopolitical Fiction</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="border border-border p-6 bg-card">
                <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest mb-4">
                  Editorial Role
                </div>
                <h4 className="font-serif text-lg text-foreground mb-3">Cercle Magazine</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Former Political Editor contributing analysis on energy transition, geopolitical
                  resource competition, and the strategic dimensions of technological change in the
                  global order.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
