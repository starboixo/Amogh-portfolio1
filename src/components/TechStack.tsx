import React from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  Database,
  FileSpreadsheet,
  BarChart2,
  Target,
  Activity,
  Search,
  Zap,
  Terminal,
  GitFork,
  Layers,
  Network,
  Globe,
  FlaskConical,
  Code2,
  Cpu,
  Notebook,
} from "lucide-react";

const TechPill = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => {
  const colorMap: { [key: string]: { border: string, bg: string, text: string } } = {
    cyan:   { border: "hover:border-cyan-500/40",   bg: "hover:bg-cyan-500/8",   text: "group-hover:text-cyan-400" },
    blue:   { border: "hover:border-blue-500/40",   bg: "hover:bg-blue-500/8",   text: "group-hover:text-blue-400" },
    green:  { border: "hover:border-green-500/40",  bg: "hover:bg-green-500/8",  text: "group-hover:text-green-400" },
    purple: { border: "hover:border-purple-500/40", bg: "hover:bg-purple-500/8", text: "group-hover:text-purple-400" },
    orange: { border: "hover:border-orange-500/40", bg: "hover:bg-orange-500/8", text: "group-hover:text-orange-400" },
    indigo: { border: "hover:border-indigo-500/40", bg: "hover:bg-indigo-500/8", text: "group-hover:text-indigo-400" },
    sky:    { border: "hover:border-sky-500/40",    bg: "hover:bg-sky-500/8",    text: "group-hover:text-sky-400" },
    slate:  { border: "hover:border-slate-500/40",  bg: "hover:bg-slate-500/8",  text: "group-hover:text-slate-400" },
    pink:   { border: "hover:border-pink-500/40",   bg: "hover:bg-pink-500/8",   text: "group-hover:text-pink-400" },
    yellow: { border: "hover:border-yellow-500/40", bg: "hover:bg-yellow-500/8", text: "group-hover:text-yellow-400" },
  };
  const styles = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/8 ${styles.border} ${styles.bg} transition-all duration-200 group cursor-default`}
    >
      <Icon className={`w-4 h-4 text-gray-500 ${styles.text} transition-colors shrink-0`} />
      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">{name}</span>
    </motion.div>
  );
};

const SkillSection = ({ title, accent, children, index = 0 }: { title: string, accent?: string, children: React.ReactNode, index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{title}</span>
      <div className="h-px flex-1 bg-white/5" />
      {accent && <span className="text-[10px] text-gray-600 italic">{accent}</span>}
    </div>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </motion.div>
);

const TextIcon = ({ char }: { char: string }) => (
  <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px]">{char}</span>
);

export const TechStack = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      <SkillSection title="Business Intelligence & BI Tools" accent="Core Competency" index={0}>
        <TechPill icon={BarChart2}     name="Power BI"              color="blue" />
        <TechPill icon={TrendingUp}    name="Tableau"               color="orange" />
        <TechPill icon={FileSpreadsheet} name="Advanced Excel"      color="green" />
        <TechPill icon={Database}      name="SQL"                   color="cyan" />
        <TechPill icon={Code2}         name="VBA"                   color="slate" />
        <TechPill icon={Globe}         name="Google Workspace"      color="blue" />
      </SkillSection>

      <SkillSection title="Analytical Methods" accent="Primary" index={1}>
        <TechPill icon={Target}        name="KPI Analysis"          color="cyan" />
        <TechPill icon={Search}        name="Business Analysis"     color="blue" />
        <TechPill icon={TrendingUp}    name="Data Visualisation"    color="green" />
        <TechPill icon={Activity}      name="Statistical Analysis"  color="purple" />
        <TechPill icon={FlaskConical}  name="Risk Analysis"         color="orange" />
        <TechPill icon={Zap}           name="Process Optimisation"  color="yellow" />
        <TechPill icon={Search}        name="Data Mining"           color="indigo" />
        <TechPill icon={Activity}      name="Time Series Analysis"  color="sky" />
        <TechPill icon={Target}        name="Decision Analytics"    color="pink" />
      </SkillSection>

      <SkillSection title="Programming & Technical" index={2}>
        <TechPill icon={Terminal}      name="Python (Pandas / NumPy)" color="blue" />
        <TechPill icon={Database}      name="PostgreSQL / MySQL"    color="indigo" />
        <TechPill icon={Network}       name="AnyLogic"              color="purple" />
        <TechPill icon={GitFork}       name="Git / GitHub"          color="slate" />
        <TechPill icon={Layers}        name="JIRA & Confluence"     color="blue" />
        <TechPill icon={Cpu}           name="Arduino / IoT"         color="orange" />
      </SkillSection>

      <SkillSection title="Advanced Analytics" accent="Secondary" index={3}>
        <TechPill icon={Activity}      name="Machine Learning"      color="purple" />
        <TechPill icon={TrendingUp}    name="Predictive Modelling"  color="cyan" />
        <TechPill icon={Activity}      name="Simulation Modelling"  color="blue" />
        <TechPill icon={Zap}           name="Optimisation"          color="green" />
      </SkillSection>

      <SkillSection title="Languages" index={4}>
        <TechPill icon={(p: any) => <TextIcon char="A" {...p} />} name="English (Fluent)" color="blue" />
        <TechPill icon={(p: any) => <TextIcon char="अ" {...p} />} name="Hindi" color="orange" />
        <TechPill icon={(p: any) => <TextIcon char="M" {...p} />} name="Marathi" color="slate" />
      </SkillSection>

    </div>
  );
};
