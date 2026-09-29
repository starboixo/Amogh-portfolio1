import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { BarChart2, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
    const highlights = [
        { icon: BarChart2, title: "Dashboards & Reporting", desc: "Power BI, Tableau, Advanced Excel and SQL — turning data into clear KPI dashboards and business reports that support decision-making." },
        { icon: Target, title: "Business & Operations Analysis", desc: "Business problem framing, process analysis, requirements gathering and structured recommendations — applied across gaming, consulting and research." },
        { icon: Users, title: "Technical Environment Experience", desc: "3+ years embedded within product and engineering teams at Ubisoft — working across QA, release operations and performance tracking in a global gaming studio." },
        { icon: TrendingUp, title: "Measurable Business Impact", desc: "Reduced reporting workload by 50%, built 10+ KPI dashboards, and improved reporting accuracy across live game titles and operational workflows." }
    ];

    return (
        <section id="about" className="py-16 md:py-32 relative overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-12 md:mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">About Me</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="space-y-12 md:space-y-16">
                    {/* Top Region: Image & Bio */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Profile Image */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative mx-auto w-full max-w-[360px]"
                            >
                                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] shadow-xl">
                                    <img
                                        src={portfolioData.profilePicture}
                                        alt={portfolioData.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Bio Content */}
                        <div className="lg:col-span-8 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="badge-analytics">Business Analyst · Reporting &amp; BI · MSc Business Analytics (Distinction)</div>

                                <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    {portfolioData.aboutHeading}
                                </h4>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {portfolioData.about}
                                </p>

                                <blockquote className="border-l-2 border-cyan-500/40 pl-6">
                                    <p className="text-gray-300 text-base leading-relaxed italic">
                                        "{portfolioData.aboutQuote}"
                                    </p>
                                </blockquote>
                            </motion.div>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.08 * idx }}
                                className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1.5">{item.title}</h5>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Beyond Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="p-6 rounded-xl bg-white/[0.03] border border-white/8 max-w-xl"
                    >
                        <h5 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider text-gray-400">Beyond Analytics</h5>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            When I'm not analysing data, you'll find me playing <span className="text-gray-300">badminton</span>, studying <span className="text-gray-300">competitive game design mechanics</span>, or enjoying a game of <span className="text-gray-300">carrom</span>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
