import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, Shield, Leaf, Globe, Satellite, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    id: "01",
    icon: Zap,
    name: "Waste to Energy — Nexergy",
    sector: "Clean Energy · Circular Economy",
    status: "Active",
    location: "Global",
    charity: "No. 1119453",
    headline: "Converting plastic and tyre waste into light crude oil and electricity — reducing waste while creating economic value.",
    impact: "Circular economy solution addressing two global crises simultaneously.",
    body: `The Nexergy waste-to-energy system converts plastic waste and end-of-life tyres into light crude oil and electrical energy through advanced pyrolysis-based processes. The technology addresses two interconnected crises simultaneously: the global accumulation of plastic waste in landfill and ocean environments, and the demand for clean, locally-produced energy in regions without access to grid infrastructure.

The commercial model is designed for deployment in regions with high informal waste accumulation and energy poverty — particularly across sub-Saharan Africa and Southeast Asia — creating economic value from materials that currently generate only environmental liability.

The technology integrates naturally with the broader Planetary Green environmental framework and supports the humanitarian infrastructure developed through the RHM World Health Initiative. Each deployment creates local employment, reduces environmental contamination, and generates clean energy for communities previously dependent on expensive diesel imports.`,
    metrics: [
      { value: "Plastic", label: "→ Light Crude" },
      { value: "Tyres", label: "→ Electricity" },
      { value: "Zero", label: "Landfill Waste" },
    ],
  },
  {
    id: "02",
    icon: Shield,
    name: "Vectorcide — Health Innovation",
    sector: "Biotechnology · Public Health",
    status: "Development",
    location: "Global",
    headline: "Advanced nano-capsule mosquito-control coating preventing malaria, dengue, and Zika with 93%+ effectiveness.",
    impact: "Step-change in vector control with minimal ecological footprint.",
    body: `Vectorcide is a proprietary nano-capsule coating technology designed to eradicate disease-carrying mosquito populations in targeted geographical zones. The technology achieves effectiveness rates exceeding 93% — representing a transformative step-change from existing vector control approaches which rely on broad-spectrum pesticides with diminishing effectiveness and significant ecological side effects.

The implications are profound. Diseases transmitted by mosquitoes — including malaria, dengue fever, Zika virus, and yellow fever — account for hundreds of thousands of deaths annually, disproportionately affecting populations in tropical and subtropical regions. A targeted, high-efficacy solution with a limited ecological footprint represents one of the most significant public health interventions of the coming decade.

Vectorcide operates within the broader Planetary Green humanitarian framework, with deployment strategies designed in collaboration with regional health authorities and international public health organisations.`,
    metrics: [
      { value: "93%+", label: "Effectiveness" },
      { value: "0", label: "Broad Pesticide Use" },
      { value: "4", label: "Target Diseases" },
    ],
  },
  {
    id: "03",
    icon: Leaf,
    name: "Planetary X — Carbon & Biodiversity",
    sector: "Blockchain · Environmental Finance",
    status: "Development",
    location: "London · Global",
    headline: "Blockchain-based carbon offset system protecting forests, ecosystems, and water systems with satellite-verified transparency.",
    impact: "Credible, auditable environmental assets for institutional investors.",
    body: `Planetary X is a blockchain-based environmental asset designed to provide a credible, transparent, and tradeable mechanism for the protection of global rainforests and biodiversity. Unlike conventional carbon credits — which Hamilton has critiqued as structurally unverified — Planetary X tokens are backed by satellite-verified land protection data, providing institutional investors, sovereign wealth funds, and corporations with an auditable, accountable environmental asset.

The system protects forests, freshwater ecosystems, and biodiversity corridors through a transparent DLT infrastructure. Each token is linked to a specific, monitored area of protected land — ensuring that compensation for carbon emission is provably linked to a real, measurable, and permanent act of protection.

Planetary X represents a direct response to the structural weakness of existing carbon markets, creating the verification layer that the existing market lacks while generating genuine financial incentives for rainforest protection at institutional scale.`,
    metrics: [
      { value: "Satellite", label: "Verified Assets" },
      { value: "DLT", label: "Infrastructure" },
      { value: "Forests", label: "Protected" },
    ],
  },
  {
    id: "04",
    icon: Globe,
    name: "Africa Development Strategy",
    sector: "Infrastructure · Resource Economics",
    status: "Active",
    location: "Sub-Saharan Africa",
    headline: "Mineral discovery, sustainable energy, infrastructure, and economic growth programmes across 36+ African nations.",
    impact: "Long-term sustainability and job creation for African communities.",
    body: `The African Resource and Infrastructure Development programme applies TechnoImaging geophysical survey capabilities to the identification and strategic mapping of mineral, water, and energy resources across sub-Saharan Africa. The continent contains the world's largest reserves of many critical minerals — including cobalt, lithium, platinum group metals, and rare earth elements — but their monetisation has historically been constrained by the absence of precise, low-cost survey technology.

TechnoImaging changes this equation. Governments can now identify and value their subsurface wealth without the capital expenditure of exploratory drilling, enabling more informed negotiation with extraction partners and greater retention of economic value within sovereign territories.

The programme is designed with explicit humanitarian objectives: the creation of employment, the development of healthcare and accommodation infrastructure in remote areas, and the establishment of sustainable energy systems alongside resource extraction. Long-term sustainability and community benefit are built into every deployment framework — not as afterthoughts, but as foundational design principles.`,
    metrics: [
      { value: "36+", label: "African Nations" },
      { value: "Critical", label: "Mineral Mapping" },
      { value: "Jobs", label: "Created Locally" },
    ],
  },
  {
    id: "05",
    icon: Satellite,
    name: "TechnoImaging — Geophysical Survey",
    sector: "Geophysics · Aerospace",
    status: "Active",
    location: "London · Riyadh · Nairobi",
    headline: "Advanced aerial and satellite resource detection identifying oil, minerals, and water with precision sub-kilometre mapping.",
    impact: "Governments can know exactly what lies beneath their territory.",
    body: `TechnoImaging is an advanced aerial geophysical survey platform that identifies the precise position and volumetric content of underground resources — including oil, gas, water, rare earth minerals, and metals — without requiring ground-based drilling or seismic surveys.

The system's proprietary algorithms were developed in collaboration with Lockheed Martin's subsurface aerial survey capability, creating a combined platform that delivers resource intelligence at a level of precision previously unavailable to governments and extraction industries. The commercial consequence is transformative: a government can know exactly what lies beneath its territory — and at what volume — before committing to the infrastructure of extraction.

Humanitarian applications include the identification of underground water sources in arid regions and the strategic positioning of new urban development (such as NEOM in Saudi Arabia) in areas that are geologically and hydrologically compatible with long-term habitation. The system supports governments with precision data that fundamentally reshapes the economics of natural resource development.`,
    metrics: [
      { value: "Sub-km", label: "Resolution" },
      { value: "Multi-spectrum", label: "Mineral Detection" },
      { value: "Lockheed", label: "Partnership" },
    ],
  },
  {
    id: "06",
    icon: BarChart3,
    name: "Planetary Green — Core Initiative",
    sector: "Environmental · Humanitarian",
    status: "Active",
    location: "London · Walton Castle · Global",
    charity: "No. 1119453",
    headline: "A systemic framework for climate accountability, biodiversity protection, and humanitarian healthcare operating from Walton Castle.",
    impact: "Gates Foundation-sponsored charity operating across environmental and humanitarian domains.",
    body: `Planetary Green (formerly the Millennium Health Microscope Foundation) is a UK registered charity operating under sole trusteeship, originally established with sponsorship from the Bill and Melinda Gates Foundation under Grand Challenges Grant OPP1015837. Its operational headquarters is Walton Castle — a 17th-century luxury estate in England that serves as the hub for humanitarian conferences, diplomatic engagements, international fundraising, and strategic leadership events.

The initiative operates across three interconnected domains: environmental surveillance and protection, clean energy systems, and humanitarian healthcare. Planetary Green advocates for satellite-verified carbon accountability: specific rainforest areas are registered and monitored from space, with exact compensation tied to verified protection costs.

Associated programmes include the deployment of COVID-19 vaccination programmes across Malaysia, Myanmar, and the Philippines (one million doses), delivery of FFP2 masks to African regions via Boeing 747-400F aircraft, and supply of masks to the German Federal Government for front-line healthcare workers. Event bookings at Walton Castle are secured through to 2028, reflecting the initiative's growing international profile.`,
    metrics: [
      { value: "1M+", label: "Vaccines Deployed" },
      { value: "3", label: "747-400F Missions" },
      { value: "Walton Castle", label: "Global HQ" },
    ],
  },
  {
    id: "07",
    name: "Advanced Materials & AI Diagnostics",
    sector: "Aerospace · Healthcare Technology",
    status: "Active",
    location: "London · UAE · Global",
    headline: "Ultra-fine copper powder supply chains and AI diagnostic platform development for the MENA region.",
    impact: "Strategic commodities meeting AI hardware demand and healthcare transformation.",
    body: `Two distinct but complementary technology initiatives operate under this portfolio. The advanced materials programme has established supply chains for ultra-fine copper powder and specialty electronics materials used in AI hardware manufacturing and aerospace applications — an increasingly strategic commodity as demand for AI infrastructure accelerates globally.

The AI diagnostics initiative, documented in Hamilton's January 2026 research paper, analyses the strategic opportunity for a new AI-based clinical diagnostic capability in the UAE and Middle East region. Drawing on analysis of platforms including K Health, Digital Diagnostics, and Qure.ai, the research identifies a significant gap between the advanced AI diagnostic capabilities available internationally and their formal deployment within MENA healthcare systems — presenting a structured market entry strategy for technology partners.`,
    metrics: [
      { value: "UAE", label: "Market Focus" },
      { value: "2026", label: "Research Published" },
    ],
  },
];

export default function Initiatives() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_03" title="GLOBAL INITIATIVES" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
            Project<br />
            <span className="text-gold">Dossiers</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="max-w-2xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Seven strategic initiatives operating across environmental, technological, humanitarian,
            and geopolitical domains — each designed to address a systemic challenge at scale.
            Headquartered at Walton Castle, coordinated globally.
          </p>
        </FadeIn>

        {/* Quick links */}
        <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-3">
          {["Nexergy", "Vectorcide", "Planetary X", "Africa Strategy", "TechnoImaging", "Planetary Green"].map((label, i) => (
            <span key={i} className="font-mono text-[9px] uppercase tracking-widest border border-border px-3 py-1.5 text-muted-foreground hover:border-gold/40 hover:text-gold transition-colors duration-300 cursor-default">
              {String(i + 1).padStart(2, "0")} · {label}
            </span>
          ))}
        </FadeIn>
      </div>

      {/* Initiatives */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 space-y-2">
        {initiatives.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.id} delay={i * 0.06}>
              <div className="dossier-card border border-border group hover:border-gold/20 transition-all duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-3">

                  {/* Left: specs */}
                  <div className="border-b lg:border-b-0 lg:border-r border-border p-8 space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && <Icon size={16} className="text-gold/50 group-hover:text-gold transition-colors duration-300" />}
                      <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest">
                        Initiative_{item.id}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
                    <div className="gold-rule w-8" />
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest block mb-0.5">Sector</span>
                        <span className="text-muted-foreground">{item.sector}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest block mb-0.5">Status</span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider ${item.status === "Active" ? "text-gold" : "text-muted-foreground/60"}`}>
                          ● {item.status}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest block mb-0.5">Node</span>
                        <span className="text-muted-foreground">{item.location}</span>
                      </div>
                      {item.charity && (
                        <div>
                          <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest block mb-0.5">Charity Reg</span>
                          <span className="text-muted-foreground">{item.charity}</span>
                        </div>
                      )}
                    </div>

                    {/* Impact statement */}
                    <div className="pt-3 border-t border-border">
                      <div className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest mb-2">Impact</div>
                      <p className="text-xs text-gold/70 leading-relaxed italic">{item.impact}</p>
                    </div>

                    {/* Metrics */}
                    <div className="pt-3 border-t border-border space-y-2">
                      {item.metrics.map((m, j) => (
                        <div key={j} className="flex items-baseline gap-2">
                          <span className="font-serif text-xl text-gold">{m.value}</span>
                          <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: narrative */}
                  <div className="lg:col-span-2 p-8">
                    <p className="font-mono text-[10px] text-gold/60 uppercase tracking-widest mb-6 leading-relaxed border-l-2 border-gold/30 pl-4">
                      {item.headline}
                    </p>
                    {item.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 text-center">
        <FadeIn>
          <div className="border border-border bg-card p-16 space-y-6">
            <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest">Partnership Inquiry</div>
            <h2 className="font-serif text-3xl text-foreground">
              Engage with These Initiatives
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              For governments, technology partners, and strategic investors interested in
              collaborating on any of these programmes.
            </p>
            <Link to="/advisory" className="btn-ghost-gold inline-flex">
              Advisory Inquiry <ArrowRight size={12} />
            </Link>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </div>
  );
}
