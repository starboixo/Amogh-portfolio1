import { motion } from "motion/react";
import { ArrowLeft, Brain, Download, FileText, Presentation, User, Clock, Briefcase } from "lucide-react";

interface CaseStudyProps {
  onBack: () => void;
  onOpenProject: (id: string) => void;
}

const NorthropCaseStudy = ({ onBack }: CaseStudyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200 pb-20 font-sans"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Brain className="w-3.5 h-3.5" />
            AI Challenge · Northrop Grumman
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter italic">
              The Brain —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Multi-Agent LLM
              </span>{" "}
              Architecture
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5 mt-12">
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Organisation</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Northrop Grumman
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Role</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <User className="w-4 h-4 text-cyan-400" />
                Analyst &amp; Designer
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Year</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
                2026
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Focus</p>
              <div className="flex items-center gap-2 text-white font-medium text-lg italic uppercase">
                AI / LLM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0a0a0f] aspect-[4/3]">
            <img
              src="/portfolio data/northrop.jpg"
              alt="The Brain – Northrop Grumman Challenge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0a0a0f] aspect-[4/3]">
            <img
              src="/portfolio data/northrop1.jpg"
              alt="The Brain – Architecture detail"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-40">

        {/* My Role */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <User className="text-cyan-400 w-6 h-6" /> My Role
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-400 text-xl leading-relaxed font-light italic border-l-2 border-cyan-500/30 pl-8">
              "I led the design and architecture of{" "}
              <span className="text-cyan-400 font-medium tracking-tight">'The Brain'</span> — a secure,
              multi-agent reasoning module built for Northrop Grumman's Easter Challenge, focusing on
              <span className="text-white font-medium italic"> data privacy, decision-making paths, and LLM orchestration</span>."
            </p>
          </div>
        </section>

        {/* Project Description */}
        <section className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">
                Project <span className="text-cyan-400">Overview</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light max-w-4xl">
                'The Brain' is a multi-agent LLM module designed for secure backend reasoning. The system
                coordinates specialised AI agents to handle distinct cognitive tasks — planning, retrieval,
                verification — while maintaining strict data privacy and auditability requirements typical of
                defence-sector applications.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-4xl">
                The architecture prioritises explainability, enabling human oversight at each decision node
                and ensuring traceability of reasoning paths from query to conclusion.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Multi-Agent Orchestration", desc: "Coordinated LLM agents with distinct roles for planning, retrieval, and synthesis." },
              { label: "Data Privacy", desc: "On-premise reasoning paths with no external data leakage — compliant with defence standards." },
              { label: "Explainability", desc: "Every decision node is traceable, supporting human-in-the-loop oversight." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <h4 className="text-white font-bold text-lg mb-3">{item.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Downloads */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight italic">
            Project <span className="text-cyan-400">Documents</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Download the full presentation and official Letter of Participation from Northrop Grumman's Easter Challenge 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/portfolio data/The-Brain ppt.pptx"
              download="The-Brain-ppt.pptx"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">The Brain — Presentation</p>
                <p className="text-xs text-gray-500 mt-0.5">PowerPoint (.pptx)</p>
              </div>
              <Download className="w-4 h-4 ml-auto" />
            </a>

            <a
              href="/portfolio data/Easter Challenge Letter of Participation 2026 - Amogh Ganesh Lonare.pdf"
              download="Easter-Challenge-Letter-of-Participation-2026.pdf"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Letter of Participation</p>
                <p className="text-xs text-gray-500 mt-0.5">Official PDF — Northrop Grumman Easter Challenge 2026</p>
              </div>
              <Download className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </section>

      </main>
    </motion.div>
  );
};

export default NorthropCaseStudy;
