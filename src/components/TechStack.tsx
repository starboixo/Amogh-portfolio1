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
  Network,
  Globe,
  FlaskConical,
  Users,
  MessageSquare,
  ClipboardList,
  PieChart,
} from "lucide-react";

const TechPill = ({
  icon: Icon,
  name,
  color,
  muted,
}: {
  icon: any;
  name: string;
  color: string;
  muted?: boolean;
}) => {
  const colorMap: { [key: string]: { border: string; text: string } } = {
    cyan:   { border: "hover:border-cyan-500/40",   text: "group-hover:text-cyan-400" },
    blue:   { border: "hover:border-blue-500/40",   text: "group-hover:text-blue-400" },
    green:  { border: "hover:border-green-500/40",  text: "group-hover:text-green-400" },
    purple: { border: "hover:border-purple-500/40", text: "group-hover:text-purple-400" },
    orange: { border: "hover:border-orange-500/40", text: "group-hover:text-orange-400" },
    indigo: { border: "hover:border-indigo-500/40", text: "group-hover:text-indigo-400" },
    yellow: { border: "hover:border-yellow-500/40", text: "group-hover:text-yellow-400" },
    slate:  { border: "hover:border-slate-500/40",  text: "group-hover:text-slate-400" },
    sky:    { border: "hover:border-sky-500/40",    text: "group-hover:text-sky-400" },
  };
  const styles = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 group cursor-default
        ${muted
          ? "bg-white/[0.02] border-white/5 hover:border-white/10"
          : `bg-white/[0.04] border-white/8 ${styles.border} hover:bg-white/[0.06]`
        }`}
    >
      <Icon className={`w-4 h-4 shrink-0 transition-colors
        ${muted ? "text-gray-600" : `text-gray-500 ${styles.text}`}`}
      />
      <span className={`text-sm font-medium whitespace-nowrap transition-colors
        ${muted ? "text-gray-600 group-hover:text-gray-500" : "text-gray-400 group-hover:text-white"}`}
      >
        {name}
      </span>
    </motion.div>
  );
};

const SkillSection = ({
  title,
  accent,
  children,
  index = 0,
}: {
  title: string;
  accent?: string;
  children: React.ReactNode;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{title}</span>
      <div className="h-px flex-1 bg-white/5" />
      {accent && (
        <span className="text-[10px] text-cyan-600 font-semibold uppercase tracking-wider">{accent}</span>
      )}
    </div>
    <div className="flex flex-wrap gap-2">{children}</div>
  </motion.div>
);

const TextIcon = ({ char }: { char: string }) => (
  <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px]">{char}</span>
);

export const TechStack = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* 1. Core Skills — most prominent */}
      <SkillSection title="Core Skills" accent="Primary" index={0}>
        <TechPill icon={Search}        name="Data Analysis"                  color="cyan" />
        <TechPill icon={Target}        name="Business Analysis"              color="blue" />
        <TechPill icon={BarChart2}     name="KPI & Performance Analysis"     color="cyan" />
        <TechPill icon={ClipboardList} name="Dashboarding & Reporting"       color="green" />
        <TechPill icon={PieChart}      name="Data Visualisation"             color="blue" />
        <TechPill icon={TrendingUp}    name="Business Intelligence"          color="indigo" />
        <TechPill icon={Zap}           name="Business Insights"              color="yellow" />
        <TechPill icon={Activity}      name="Problem Solving"                color="purple" />
        <TechPill icon={Users}         name="Stakeholder Collaboration"      color="sky" />
        <TechPill icon={FlaskConical}  name="Process Analysis"               color="orange" />
      </SkillSection>

      {/* 2. Tools */}
      <SkillSection title="Tools & Platforms" accent="Daily Use" index={1}>
        <TechPill icon={BarChart2}       name="Power BI"         color="blue" />
        <TechPill icon={TrendingUp}      name="Tableau"          color="orange" />
        <TechPill icon={FileSpreadsheet} name="Advanced Excel"   color="green" />
        <TechPill icon={Database}        name="SQL"              color="cyan" />
        <TechPill icon={Globe}           name="Google Workspace" color="blue" />
        <TechPill icon={Network}         name="AnyLogic"         color="purple" />
      </SkillSection>

      {/* 3. Supporting — visually muted */}
      <SkillSection title="Supporting Knowledge" index={2}>
        <TechPill icon={Database}  name="Python — Basic"      color="slate" muted />
        <TechPill icon={Activity}  name="Statistical Analysis" color="slate" muted />
        <TechPill icon={TrendingUp} name="Predictive Modelling" color="slate" muted />
        <TechPill icon={Activity}  name="Simulation Modelling"  color="slate" muted />
      </SkillSection>

      {/* 4. Languages */}
      <SkillSection title="Languages" index={3}>
        <TechPill icon={(p: any) => <TextIcon char="A" {...p} />} name="English (Fluent)" color="blue" />
        <TechPill icon={(p: any) => <TextIcon char="अ" {...p} />} name="Hindi"            color="orange" />
        <TechPill icon={(p: any) => <TextIcon char="M" {...p} />} name="Marathi"          color="slate" />
      </SkillSection>

    </div>
  );
};
