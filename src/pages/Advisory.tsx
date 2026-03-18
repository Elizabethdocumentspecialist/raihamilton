import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Send, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Strategic Advisory",
    description: "High-level geopolitical and financial strategy for sovereign entities, institutional investors, and multinational corporations. Briefings, scenario planning, and systemic risk assessment.",
  },
  {
    number: "02",
    title: "Technology Development Partnerships",
    description: "Facilitation and development of technology partnerships spanning geophysical survey, AI diagnostics, environmental systems, and advanced materials — connecting institutional capital with proven technology platforms.",
  },
  {
    number: "03",
    title: "Geopolitical Resource Strategy",
    description: "Analysis and advisory on critical mineral supply chains, underground resource monetisation, and the intersection of resource security with geopolitical risk. Leveraging TechnoImaging's proprietary subsurface mapping capabilities.",
  },
  {
    number: "04",
    title: "Environmental Infrastructure",
    description: "Programme development for waste-to-energy systems, biodiversity asset structures (Planetary X), and satellite-verified carbon accountability frameworks. Aligned with the Planetary Green charitable mandate.",
  },
  {
    number: "05",
    title: "Policy Panels & Speaking",
    description: "Participation in policy institutes, think-tank forums, sovereign wealth fund conferences, and international research bodies. Topics spanning energy transition, AI governance, geopolitical risk, and humanitarian technology.",
  },
  {
    number: "06",
    title: "Research & Intelligence",
    description: "Commissioned strategic research papers on geopolitical, technological, and environmental topics — drawing on a global network of contacts across government, finance, defense, and civil society.",
  },
];

const engagementProfiles = [
  { type: "Governments & Ministries", desc: "Strategic advisory to heads of state, economic ministries, and national development agencies." },
  { type: "Sovereign Wealth Funds", desc: "Technology and resource investment briefings for SWF investment committees." },
  { type: "Research Institutes", desc: "Collaborative research partnerships with policy institutes and academic bodies." },
  { type: "Technology Developers", desc: "Business development, capital introduction, and market access for emerging technology platforms." },
  { type: "International Organisations", desc: "Strategic engagement with NGOs, UN agencies, and multilateral development banks." },
  { type: "Aerospace & Defence", desc: "Supply chain, technology transfer, and strategic advisory for aerospace and defence contractors." },
];

export default function Advisory() {
  const [form, setForm] = useState({ name: "", organisation: "", role: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_05" title="ADVISORY & PROTOCOL" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
            Inquiry<br />
            <span className="text-gold">Protocol</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="max-w-xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Strategic advisory engagements are initiated through a structured inquiry process.
            We work with governments, research institutes, technology developers, strategic investors,
            and international organisations.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 space-y-24">

        {/* Services grid */}
        <section>
          <FadeIn>
            <div className="border-t border-border pt-6 mb-12">
              <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                Advisory Services
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-background p-8 group hover:bg-card transition-colors duration-500 h-full">
                  <div className="font-mono text-[9px] text-gold/40 uppercase tracking-widest mb-4">
                    Service_{service.number}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-4">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Engagement profiles */}
        <section id="research">
          <FadeIn>
            <div className="border-t border-border pt-6 mb-12">
              <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                Engagement Profiles — Who We Work With
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagementProfiles.map((ep, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border-l-2 border-gold/20 pl-6 py-4 hover:border-gold/60 transition-colors duration-300">
                  <h4 className="font-serif text-lg text-foreground mb-1">{ep.type}</h4>
                  <p className="text-sm text-muted-foreground">{ep.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section id="contact" className="max-w-2xl">
          <FadeIn>
            <div className="border-t border-border pt-6 mb-12">
              <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest">
                Advisory Inquiry Form
              </span>
            </div>
            <h2 className="font-serif text-3xl text-foreground mb-8">Initiate an Inquiry</h2>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="border border-gold/30 p-12 text-center space-y-4">
                <CheckCircle size={32} className="text-gold mx-auto" />
                <h3 className="font-serif text-2xl text-foreground">Inquiry Received</h3>
                <p className="text-muted-foreground text-sm">
                  Your inquiry has been logged. A response will be issued within 3 working days
                  via the contact address provided.
                </p>
                <div className="font-mono text-[9px] text-gold/40 uppercase tracking-widest pt-4">
                  Reference: HSG_{Date.now().toString(36).toUpperCase()}
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { key: "name", label: "Full Name", placeholder: "Alexander Hamilton", type: "text" },
                  { key: "organisation", label: "Organisation", placeholder: "Ministry of Finance / Fund Name", type: "text" },
                  { key: "role", label: "Role / Title", placeholder: "Director General", type: "text" },
                  { key: "email", label: "Contact Email", placeholder: "contact@organisation.gov", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-gold/40 transition-colors duration-300 font-sans"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-2">
                    Nature of Inquiry
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe the strategic context and nature of your advisory inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-gold/40 transition-colors duration-300 font-sans resize-none"
                  />
                </div>
                <button type="submit" className="btn-ghost-gold w-full justify-center">
                  Submit Inquiry <Send size={12} />
                </button>
                <p className="font-mono text-[9px] text-muted-foreground/30 uppercase tracking-widest text-center">
                  All inquiries are treated with strict confidence
                </p>
              </form>
            </FadeIn>
          )}
        </section>

        {/* Speaking CTA */}
        <section id="speaking">
          <FadeIn>
            <div className="border border-gold/20 p-12 text-center space-y-6">
              <div className="font-mono text-[9px] text-gold/50 uppercase tracking-widest">
                Speaking Engagements & Panel Participation
              </div>
              <h3 className="font-serif text-3xl text-foreground">
                Policy Forums & Research Panels
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
                Hamilton accepts a limited number of speaking engagements annually at major policy forums,
                sovereign wealth fund conferences, and international research institutions. Topics include
                geopolitical resource strategy, AI diagnostics in emerging markets, and environmental
                accountability frameworks.
              </p>
              <a href="mailto:raisecs@gmail.com" className="btn-ghost-gold inline-flex mx-auto">
                Submit Speaking Inquiry <ArrowRight size={12} />
              </a>
            </div>
          </FadeIn>
        </section>
      </div>

      <Footer />
    </div>
  );
}
