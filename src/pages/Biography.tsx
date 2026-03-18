import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import raiPortrait from "@/assets/rai-portrait.png";
import raiBangladesh from "@/assets/rai-bangladesh.jpg";

const chapters = [
  {
    number: "01",
    title: "Early Life & Analytical Foundations",
    content: `Alexander (Rai) Hamilton was born on 15 March 1948, a British national whose family history is steeped in acts of singular consequence. His grandfather, William Livingston, was the youngest man ever to take silk — fluent in Chinese, Russian, and Japanese — recruited by Chou En Lai to arrange armaments from Moscow for Mao's great march before switching allegiance to Chiang Kai-shek. His grandfather on the naval side commanded a Royal Navy battleship running ammunition from Alexandria to Malta under enemy fire, decorated multiple times for individual acts of bravery.

This inheritance of analytical daring, geopolitical fluency, and institutional courage shaped the trajectory of a career that would span finance, technology, international development, and thought leadership.

Hamilton's early professional life reflected a restless intellectual ambition. As a young journalist for Time Life, he investigated temple looting in Cambodia, exposed US Aid being diverted to the North Vietnamese Army, and formed bonds with the Sihanouk family to document the cultural significance of the Cambodian Royal Ballet. He undertook field investigations of ancient Inca structures in Peru, the destruction of the Amazon forest, and the enslavement of indigenous peoples between Iquitos and Manaus. He subsequently worked as a PR consultant with Ian Greer & Associates, assigned to Taylor Woodrow — travelling with Frank Taylor to identify development sites, including the identification of the location for what would become the World Trade Centre in London.`
  },
  {
    number: "02",
    title: "Development of Major Financial Platforms",
    content: `Hamilton's entry into the British financial establishment began with United Dominions Trust, where he built a sales force for Old Broad Street Securities Insurance — growing it from three employees to over 1,200 with £500 million in premium income across nine years. He was the leading producer throughout that period and was instrumental in developing the concept of unit-linked insurance, now the standard model for every major insurance fund in the United Kingdom. His work attracted an invitation to the $5 million Forum in the United States and Canada as a guest speaker.

He then founded Alexander Securities as its sole CEO and 100% owner, acquiring the private client divisions of eleven stockbroking firms with a combined roster of 89,000 investors — making it Europe's largest firm of securities dealers. The firm was awarded the only multiple application licence from the London Stock Exchange. Hamilton applied for Virgin's 1,574 employees in the British Telecom privatisation with a single cheque, an act that demonstrated both the scale and the systemic intelligence of his operational model.

During this period he funded approximately 107 early-stage businesses, including for James Goldsmith in the USA, Robert Stigwood in the UK and Bermuda, Kerry Packer in Australia, and Richard Branson — most significantly providing £52 million of funding from Banque Brussels Lambert to create Virgin Airways prior to its listing with Morgan Stanley.`
  },
  {
    number: "03",
    title: "Global Technology Ventures & Listed Companies",
    content: `Following the City of London, Hamilton turned his attention to the intersection of science and commerce, operating at the frontier of emerging technology in post-Soviet Russia and the United States.

He was appointed Business Development Director of Sistema — Russia's largest conglomerate company, headed by Vladimir Yevtushenkov. In this capacity he built the business model for communication across all Russian-speaking territories through mobile and social media, laying the infrastructure for what would become a multi-billion-dollar revenue stream traded as NYSE: MBT (Mobile TeleSystems) and MOEX: MTSS.

He subsequently recruited scientists from the Moscow Academy of Science and the Lenin Institute, facilitating their relocation to Tel Aviv and then New York, where they were incorporated as Constellation 3D — a company of which Hamilton served as founder and CEO. The venture pursued advanced 3D optical disc technology, representing a significant chapter in post-Cold War technology transfer and commercial science development.`
  },
  {
    number: "04",
    title: "Strategic Collaboration with Governments & Multinationals",
    content: `Hamilton's advisory work has consistently operated at the highest levels of government and institutional authority. He has a documented history of sharing advanced technologies with the Joint Chiefs at the Pentagon, the Department of Defense, and the Department of Homeland Security, bridging commercial innovation with national security strategy.

His collaboration with Lockheed Martin brought together the defence company's subsurface aerial survey capabilities and the algorithms of TechnoImaging — a proprietary geophysical system capable of identifying the precise position and volumetric content of underground resources including oil, gas, water, and rare earth minerals. This combined capability transforms the economics of natural resource exploration: governments can now understand exactly what lies beneath their territory before committing to extraction infrastructure.

Hamilton has served on boards and in advisory roles across financial, technology, and resource development sectors in Russia, the United States, the United Kingdom, Saudi Arabia, and across sub-Saharan Africa. In September 2021, he led a senior delegation presenting TechnoImaging and advanced supply chain strategies to stakeholders in the Kingdom of Saudi Arabia — part of a broader engagement with NEOM and the Vision 2030 programme.`,
    image: raiBangladesh,
    imageCaption: "Alexander (Rai) Hamilton with his Personal Assistant at a meeting with the President of Bangladesh and four ministers."
  },
  {
    number: "05",
    title: "Environmental & Humanitarian Initiatives",
    content: `Hamilton is the sole trustee of the Planetary Green initiative (formerly the Millennium Health Microscope Foundation), a UK registered charity (No. 1119453) originally sponsored by the Bill and Melinda Gates Foundation under Grand Challenges Grant OPP1015837.

The work of this initiative spans multiple disciplines. In the field of global health, Hamilton coordinated the donation of one million SinoVac COVID-19 vaccinations throughout Malaysia, Myanmar, and the Philippines, delivered three Boeing 747-400F aircraft of FFP2 masks to African regions, and continued supply to the German Federal Government for front-line workers.

The Planetary Green programme has since evolved into a more systemic environmental strategy — one that challenges the existing carbon credit market with a more rigorous accountability framework: satellite surveillance of specific rainforest areas, enabling exact compensation for carbon emission through the verified cost of protection. This model is considered significantly more credible than existing offset mechanisms.

Associated technologies developed under Hamilton's stewardship include Vectorcide — a nano-capsule mosquito eradication coating achieving over 90% effectiveness — and waste-to-energy systems converting plastic and tyre waste into light crude oil and electricity. The Planetary X Biodiversity Asset, a blockchain-based environmental token, provides a financial mechanism for protecting rainforests and global biodiversity at institutional scale.`
  },
  {
    number: "06",
    title: "Thought Leadership & Publications",
    content: `Hamilton is the author of five geopolitical novels — most recently "The Drowning Street Years: Part One — Learning to Swim" — works that explore the evolution of governance, international economics, and the moral architecture of global power. The novels are drawn from direct experience: investigative journalism in Cambodia, Colombia, Peru, and the Amazon; the inner workings of British financial institutions; and the dynamics of post-Soviet Russia.

He served as Political Editor of Cercle magazine, contributing analysis on energy transition, geopolitical resource competition, and the strategic dimensions of technological change. His policy commentary spans climate strategy, global mineral mapping, and the intersection of AI diagnostics with healthcare delivery in emerging markets.

His 2026 research on AI clinical diagnostics and the Middle East healthcare market represents the most recent dimension of his thought leadership — analysing the capabilities of platforms such as K Health, Digital Diagnostics, and Qure.ai in the context of UAE and MENA regulatory frameworks, and identifying the strategic opportunity for a new AI-based diagnostic capability across the region.

As a global strategic voice, Hamilton continues to engage with research institutes, sovereign wealth fund managers, NGO directors, and aerospace executives — bringing the analytical depth of a career spent at the intersection of finance, technology, geopolitics, and humanitarian systems.`
  },
];

export default function Biography() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionHeader number="SECTION_01" title="BIOGRAPHY" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 max-w-3xl">
            Alexander<br />
            <span className="text-gold">(Rai)</span> Hamilton
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground border-l-2 border-gold/40 pl-4">
            Architect of Global Systems &nbsp;·&nbsp; Advisor to Sovereign Interests
          </p>
        </FadeIn>
      </div>

      {/* Portrait + credentials */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <FadeIn direction="left" className="lg:col-span-1">
            <div className="relative sticky top-28">
              <div className="absolute -inset-px border border-gold/20" />
              <img
                src={raiPortrait}
                alt="Alexander (Rai) Hamilton"
                className="w-full object-cover"
              />
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                {[
                  { label: "Nationality", value: "British" },
                  { label: "DOB", value: "15 March 1948" },
                  { label: "Passport", value: "GBR" },
                  { label: "Base", value: "London, England" },
                  { label: "Active Nodes", value: "London · Riyadh · NY · Dhaka" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-xs">
                    <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-2 space-y-16">
            {chapters.map((chapter, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div>
                  <div className="flex items-center gap-4 mb-6 border-t border-border pt-6">
                    <span className="font-mono text-[9px] text-gold/50 uppercase tracking-widest">
                      Chapter_{chapter.number}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{chapter.title}</h2>
                  {chapter.content.split("\n\n").map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                      {para}
                    </p>
                  ))}
                  {chapter.image && (
                    <FadeIn delay={0.2} className="mt-8">
                      <figure>
                        <div className="relative border border-border overflow-hidden">
                          <img
                            src={chapter.image}
                            alt={chapter.imageCaption}
                            className="w-full object-cover max-h-80 grayscale contrast-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>
                        {chapter.imageCaption && (
                          <figcaption className="mt-3 font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">
                            {chapter.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    </FadeIn>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
