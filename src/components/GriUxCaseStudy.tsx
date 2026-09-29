import { motion } from "motion/react";
import { ArrowLeft, Globe, User, Clock, Briefcase, PenTool } from "lucide-react";

interface CaseStudyProps {
  onBack: () => void;
  onOpenProject: (id: string) => void;
}

const GriUxCaseStudy = ({ onBack }: CaseStudyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-gray-200 selection:bg-purple-500/30 selection:text-purple-200 pb-20 font-sans"
    >
      {/* Nav Header */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Portfolio</span>
        </button>
        <div className="flex gap-6 items-center">
          <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</button>
          <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Get in Touch</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Globe className="w-3.5 h-3.5" />
            UX Portfolio &amp; GRI
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter italic">
              GRI &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                UX Portfolio
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5 mt-12">
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Initiative</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <Briefcase className="w-4 h-4 text-purple-400" />
                GRI &amp; UX
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Role</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <User className="w-4 h-4 text-purple-400" />
                UX Designer
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Year</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <Clock className="w-4 h-4 text-purple-400" />
                2026
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Focus</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg italic uppercase">
                UX · Research
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0a0a0f]"
        >
          <img
            src="/portfolio data/GRI.jpg"
            alt="GRI – UX Portfolio Highlight"
            className="w-full h-full object-cover max-h-[600px]"
          />
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-40">

        {/* My Role */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <User className="text-purple-400 w-6 h-6" /> My Role
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-400 text-xl leading-relaxed font-light italic border-l-2 border-purple-500/30 pl-8">
              "I applied{" "}
              <span className="text-purple-400 font-medium tracking-tight">human-centred design principles</span>{" "}
              and GRI-aligned reporting frameworks to produce a UX portfolio that bridges{" "}
              <span className="text-white font-medium italic">sustainability, accessibility, and digital experience</span>."
            </p>
          </div>
        </section>

        {/* Project Description */}
        <section className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">
                Project <span className="text-purple-400">Overview</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light max-w-4xl">
                This work encompasses my UX design portfolio presented through a GRI (Global Reporting
                Initiative) lens — aligning user experience outcomes with transparent, measurable impact
                reporting. The portfolio highlights design decisions made in service of accessibility,
                inclusivity, and sustainable digital product development.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-4xl">
                Key artefacts include user research synthesis, wireframe-to-prototype journeys, and impact
                metrics aligned with GRI standards — demonstrating how design thinking contributes to
                broader organisational goals.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "GRI Alignment", desc: "UX outcomes mapped to Global Reporting Initiative metrics for transparent impact documentation." },
              { label: "Human-Centred Design", desc: "End-to-end design process from user research through to tested, high-fidelity prototypes." },
              { label: "Accessibility First", desc: "WCAG-compliant design decisions embedded throughout the portfolio artefacts." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <PenTool className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{item.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </motion.div>
  );
};

export default GriUxCaseStudy;
