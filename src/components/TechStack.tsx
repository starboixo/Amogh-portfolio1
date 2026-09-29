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
  GitFork,
  Layers,
  Network,
  Globe,
  FlaskConical,
  Users,
  MessageSquare,
  ClipboardList,
  PieChart,
  CheckSquare,
} from "lucide-react";

const TechPill = ({
  icon: Icon,
  name,
  color,
  small,
}: {
  icon: any;
  name: string;
  color: string;
  small?: boolean;
}) => {
  const colorMap: { [key: string]: { border: string; text: string } } = {
    cyan:   { border: "hover:border-cyan-500/40",   text: "group-hover:text-cyan-400" },
    blue:   { border: "hover:border-blue-500/40",   text: "group-hover:text-blue-400" },
    green:  { border: "hover:border-green-500/40",  text: "group-hover:text-green-400" },
    purple: { border: "hover:border-purple-500/40", text: "group-hover:text-purple-400" },
    orange: { border: "hover:border-orange-500/40", text: "group-hover:text-orange-400" },
    indigo: { border: "hover:border-indigo-500/40", text: "group-hover:text-indigo-400" },
    sky:    { border: "hover:border-sky-500/40",    text: "group-hover:text-sky-400" },
    slate:  { border: "hover:border-slate-500/40",  text: "group-hover:text-slate-400" },
    yellow: { border: "hover:border-yellow-500/40", text: "group-hover:text-yellow-400" },
  };
  const styles = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex items-center gap-2 ${small ? "px-3 py-1.5" : "px-4 py-2"} rounded-lg bg-white/[0.04] border border-white/8 ${styles.border} hover:bg-white/[0.06] transition-all duration-200 group cursor-default`}
    >
      <Icon className={`${small ? "w-3.5 h-3.5" : "w-4 h-4"} text-gray-500 ${styles.text} transition-colors shrink-0`} />
      <span className={`${small ? "text-xs" : "text-sm"} font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap`}>
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

      {/* PRIMARY: Business & Analytical Skills — most visible */}
      <SkillSection title="Core Business & Analytical Skills" accent="Primary" index={0}>
        <TechPill icon={Search}        name="Business Analysis"              color="cyan" />
        <TechPill icon={BarChart2}     name="KPI & Performance Analysis"     color="blue" />
        <TechPill icon={PieChart}      name="Data Visualisation"             color="cyan" />
        <TechPill icon={ClipboardList} name="Reporting & Dashboarding"       color="green" />
        <TechPill icon={Target}        name="Requirements Analysis"          color="blue" />
        <TechPill icon={FlaskConical}  name="Risk Analysis"                  color="orange" />
        <TechPill icon={Zap}           name="Process & Operations Analysis"  color="yellow" />
        <TechPill icon={Users}         name="Stakeholder Management"         color="indigo" />
        <TechPill icon={MessageSquare} name="Cross-functional Collaboration" color="sky" />
        <TechPill icon={Activity}      name="Problem Solving"                color="purple" />
      </SkillSection>

      {/* SECONDARY: BI & Reporting Tools */}
      <SkillSection title="BI & Reporting Tools" accent="Daily Use" index={1}>
        <TechPill icon={BarChart2}       name="Power BI"          color="blue" />
        <TechPill icon={TrendingUp}      name="Tableau"           color="orange" />
        <TechPill icon={FileSpreadsheet} name="Advanced Excel"    color="green" />
        <TechPill icon={Database}        name="SQL"               color="cyan" />
        <TechPill icon={Globe}           name="Google Workspace"  color="blue" />
      </SkillSection>

      {/* QA & Project Tools — reflects Ubisoft background */}
      <SkillSection title="QA & Project Management Tools" index={2}>
        <TechPill icon={CheckSquare} name="JIRA"              color="blue" />
        <TechPill icon={Layers}      name="Confluence"        color="indigo" />
        <TechPill icon={CheckSquare} name="Functional Testing" color="slate" />
        <TechPill icon={CheckSquare} name="UAT / BVT"         color="slate" />
        <TechPill icon={GitFork}     name="Git / GitHub"      color="slate" />
      </SkillSection>

      {/* Supporting Technical — deprioritised, smaller pills */}
      <SkillSection title="Supporting Technical Knowledge" index={3}>
        <TechPill icon={Database}  name="Python (supporting)"  color="slate" small />
        <TechPill icon={Network}   name="AnyLogic"             color="purple" small />
        <TechPill icon={Activity}  name="Statistical Analysis"  color="slate" small />
        <TechPill icon={TrendingUp} name="Predictive Modelling" color="slate" small />
        <TechPill icon={Activity}  name="Simulation Modelling"  color="slate" small />
      </SkillSection>

      {/* Languages */}
      <SkillSection title="Languages" index={4}>
        <TechPill icon={(p: any) => <TextIcon char="A" {...p} />} name="English (Fluent)" color="blue" small />
        <TechPill icon={(p: any) => <TextIcon char="अ" {...p} />} name="Hindi"            color="orange" small />
        <TechPill icon={(p: any) => <TextIcon char="M" {...p} />} name="Marathi"          color="slate" small />
      </SkillSection>

    </div>
  );
};
