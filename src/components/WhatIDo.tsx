import { motion } from 'motion/react';
import { BarChart2, PieChart, TrendingUp, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: "Data Analysis",
    desc: "Analyse business and performance data to identify trends, patterns and opportunities that drive better decisions.",
    color: "cyan",
  },
  {
    icon: PieChart,
    title: "Dashboards & BI",
    desc: "Build clear, actionable KPI dashboards and reports using Power BI and Tableau that stakeholders can actually use.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Performance Analysis",
    desc: "Track key metrics, surface anomalies and translate performance data into meaningful insights for teams and leadership.",
    color: "indigo",
  },
  {
    icon: Lightbulb,
    title: "Business Insights",
    desc: "Turn analysis into practical, structured recommendations that support better planning and business decisions.",
    color: "purple",
  },
];

const colorMap: Record<string, { icon: string; border: string; bg: string }> = {
  cyan:   { icon: "text-cyan-400",   border: "hover:border-cyan-500/30",   bg: "hover:bg-cyan-500/5" },
  blue:   { icon: "text-blue-400",   border: "hover:border-blue-500/30",   bg: "hover:bg-blue-500/5" },
  indigo: { icon: "text-indigo-400", border: "hover:border-indigo-500/30", bg: "hover:bg-indigo-500/5" },
  purple: { icon: "text-purple-400", border: "hover:border-purple-500/30", bg: "hover:bg-purple-500/5" },
};

export default function WhatIDo() {
  return (
    <section className="py-12 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">What I Do</h3>
          <p className="text-gray-500 text-sm max-w-xl">
            I help teams understand their data — from raw numbers to clear insights, dashboards and actionable recommendations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-6 rounded-xl border border-white/8 bg-white/[0.03] ${c.border} ${c.bg} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${c.icon}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
