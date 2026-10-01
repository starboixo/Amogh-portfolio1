import { TechStack } from "./TechStack";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Download, Brain, Database, Mic, Settings, Layers, Server, Satellite, BarChart, Box, ExternalLink, FileText, Globe, BookOpen, Send, User, MessageSquare, ArrowUpRight, Search, Accessibility, ShieldCheck, Zap, Activity, LayoutTemplate, PenTool, Palette, Sparkles, Image, Users, Instagram, Cpu, Lightbulb, ShoppingBag, TrendingUp, Target } from "lucide-react";
import { SiLangchain, SiFlutter, SiFastapi, SiOpenai, SiMixpanel, SiApachekafka } from "react-icons/si";
import { FaCogs, FaProjectDiagram, FaAws, FaMedium, FaBehance } from "react-icons/fa";
import About from "./About";
import WhatIDo from "./WhatIDo";

const SocialButton = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <a
    href={href}
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const getTechIcon = (tag: string) => {
  const normalizedTag = tag.toLowerCase();

  // Design & Product
  if (normalizedTag.includes("design systems")) return Layers;
  if (normalizedTag.includes("accessibility") || normalizedTag.includes("accessible")) return Accessibility;
  if (normalizedTag.includes("wcag")) return ShieldCheck;
  if (normalizedTag.includes("prototyping")) return Layers;
  if (normalizedTag.includes("wireframing")) return LayoutTemplate;
  if (normalizedTag.includes("user research") || normalizedTag.includes("r&d")) return Search;
  if (normalizedTag.includes("medical ux")) return Activity;
  if (normalizedTag.includes("lms design")) return BookOpen;
  if (normalizedTag.includes("operational efficiency")) return Zap;
  if (normalizedTag.includes("foundational design")) return PenTool;
  if (normalizedTag.includes("internal agency processes")) return Settings;
  if (normalizedTag.includes("creative collaboration")) return Users;
  if (normalizedTag.includes("visual storytelling")) return Image;
  if (normalizedTag.includes("creative styling")) return Palette;
  if (normalizedTag.includes("seasonal concepts")) return Sparkles;
  if (normalizedTag.includes("ai ux") || normalizedTag.includes("conversational ux")) return Brain;
  if (normalizedTag.includes("micro interaction")) return Zap;

  // Legacy/Technical (Keeping for fallback)
  if (normalizedTag.includes("langgraph") || normalizedTag.includes("langchain") || normalizedTag.includes("llamaindex")) return SiLangchain;
  if (normalizedTag.includes("bedrock") || normalizedTag.includes("aws") || normalizedTag.includes("sagemaker") || normalizedTag.includes("rds") || normalizedTag.includes("ec2") || normalizedTag.includes("cloudwatch")) return FaAws;
  if (normalizedTag.includes("flutter")) return SiFlutter;
  if (normalizedTag.includes("mlops")) return FaCogs;
  if (normalizedTag.includes("rag") || normalizedTag.includes("generative ai") || normalizedTag.includes("llm")) return Brain;
  if (normalizedTag.includes("pinecone") || normalizedTag.includes("database") || normalizedTag.includes("eventstoredb") || normalizedTag.includes("chromadb") || normalizedTag.includes("sqlite") || normalizedTag.includes("mysql") || normalizedTag.includes("postgresql") || normalizedTag.includes("data engineering")) return Database;
  if (normalizedTag.includes("voice") || normalizedTag.includes("whisper")) return Mic;
  if (normalizedTag.includes("fastapi")) return SiFastapi;
  if (normalizedTag.includes("openai") || normalizedTag.includes("ollama") || normalizedTag.includes("groq") || normalizedTag.includes("pllama")) return SiOpenai;
  if (normalizedTag.includes("mixpanel")) return SiMixpanel;
  if (normalizedTag.includes("cqrs")) return FaProjectDiagram;
  if (normalizedTag.includes("kafka") || normalizedTag.includes("debezium") || normalizedTag.includes("cdc")) return SiApachekafka;
  if (normalizedTag.includes("ddd") || normalizedTag.includes("domain")) return Box;
  if (normalizedTag.includes("microservices") || normalizedTag.includes("cloud")) return Server;
  if (normalizedTag.includes("remote sensing") || normalizedTag.includes("satellite") || normalizedTag.includes("cnn")) return Satellite;
  if (normalizedTag.includes("statistical") || normalizedTag.includes("sysbench")) return BarChart;
  if (normalizedTag.includes("research")) return Search;
  if (normalizedTag.includes("conversational")) return MessageSquare;
  if (normalizedTag.includes("kpi") || normalizedTag.includes("kpi analysis") || normalizedTag.includes("kpi reporting")) return BarChart;
  if (normalizedTag.includes("power bi")) return BarChart;
  if (normalizedTag.includes("tableau")) return BarChart;
  if (normalizedTag.includes("dashboarding")) return BarChart;
  if (normalizedTag.includes("demand forecasting") || normalizedTag.includes("forecasting")) return TrendingUp;
  if (normalizedTag.includes("supply chain")) return Layers;
  if (normalizedTag.includes("business strategy") || normalizedTag.includes("business analysis") || normalizedTag.includes("business intelligence")) return Target;
  if (normalizedTag.includes("p&l") || normalizedTag.includes("p&l optimisation")) return TrendingUp;
  if (normalizedTag.includes("cross-functional") || normalizedTag.includes("release readiness")) return Users;
  if (normalizedTag.includes("data pipelines") || normalizedTag.includes("data architecture")) return Database;
  if (normalizedTag.includes("requirements analysis") || normalizedTag.includes("systems design")) return Settings;
  if (normalizedTag.includes("game qa") || normalizedTag.includes("functional testing") || normalizedTag.includes("regression testing") || normalizedTag.includes("uat") || normalizedTag.includes("bvt")) return ShieldCheck;
  if (normalizedTag.includes("mobile testing") || normalizedTag.includes("ios") || normalizedTag.includes("android") || normalizedTag.includes("iap")) return Zap;
  if (normalizedTag.includes("confluence") || normalizedTag.includes("jira")) return Layers;

  return Settings; // Default icon
};

const ExperienceItem = ({ role, company, period, description, tags, index, link, image, downloadLink, downloadLabel }: { role: string, company: string, period: string, description: string, tags: string[], index: number, link?: string, image?: string, downloadLink?: string, downloadLabel?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative pl-6 md:pl-8 border-l border-white/10 hover:border-cyan-500/50 transition-colors duration-300"
  >
    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-gray-800 group-hover:bg-cyan-400 transition-colors duration-300 border border-black" />

    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{role}</h4>
      <span className="text-[10px] md:text-sm font-mono text-gray-500">{period}</span>
    </div>

    <div className="flex items-center gap-4 mb-4">
      {image && (
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white p-2 flex items-center justify-center">
          <img src={image} alt={company} className="w-full h-full object-contain" />
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="text-base md:text-lg font-medium text-gray-400">{company}</div>
        {link && (
          <a
            href={link.startsWith('http') ? link : `https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl mb-6">{description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map(tag => {
        const Icon = getTechIcon(tag);
        return (
          <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
            <Icon className="w-3.5 h-3.5" />
            {tag}
          </span>
        );
      })}
    </div>

    {downloadLink && (
      <a
        href={downloadLink}
        download
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 hover:text-white transition-all group/dl"
      >
        <Download className="w-3.5 h-3.5 group-hover/dl:-translate-y-0.5 transition-transform" />
        {downloadLabel ?? "Download"}
      </a>
    )}
  </motion.div>
);

const ProjectItem = ({ title, description, link, tags, index, titleColor, image, onOpenProject, downloadLink, downloadLabel }: { title: string, description: string, link: string, tags: string[], index: number, titleColor?: string, image?: string, onOpenProject?: () => void, downloadLink?: string, downloadLabel?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full overflow-hidden text-left w-full"
  >
    {image && (
      <div
        className="relative h-48 md:h-64 overflow-hidden w-full cursor-pointer"
        onClick={() => onOpenProject?.()}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
      </div>
    )}

    <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => onOpenProject?.()}
      >
        <h4
          className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--hover-color,#00f2ff)] text-left"
          style={{ '--hover-color': titleColor || '#00f2ff' } as React.CSSProperties}
        >
          {title}
        </h4>
        {onOpenProject && (
          <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all shrink-0">
            <ArrowUpRight className="w-5 lg:w-6 lg:h-6" />
          </div>
        )}
      </div>

      <p className="text-gray-400 leading-relaxed font-light text-left">{description}</p>

      {downloadLink && (
        <a
          href={downloadLink}
          download
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-4 py-2 self-start rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 hover:text-white transition-all group/dl"
        >
          <Download className="w-3.5 h-3.5 group-hover/dl:-translate-y-0.5 transition-transform" />
          {downloadLabel ?? "Download Certificate"}
        </a>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {tags.map(tag => {
          const Icon = getTechIcon(tag);
          return (
            <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors cursor-default">
              <Icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const BlogItem = ({ title, description, link, tags, index }: { title: string, description: string, link: string, tags: string[], index: number }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group block relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-cyan-500/10 transition-colors">
          <FaMedium className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h4>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
    </div>

    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map(tag => {
        const Icon = getTechIcon(tag);
        return (
          <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-white/5 text-gray-500 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-gray-300 transition-colors">
            <Icon className="w-3.5 h-3.5" />
            {tag}
          </span>
        );
      })}
    </div>
  </motion.a>
);

const ServiceCard = ({ title, description, tags, index }: { title: string, description: string, tags: string[], index: number }) => {
  const Icon = getTechIcon(tags[0]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col group"
    >
      <div className="mb-6 flex-grow">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-white/5 text-gray-500 group-hover:text-cyan-400/70 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Resume = ({ onOpenProject }: { onOpenProject?: (id: string) => void }) => {
  return (
    <div className="min-h-screen bg-[#050505] relative z-10 text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200">

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-24 md:space-y-32">

        {/* About Section */}
        <About />

        {/* What I Do Section */}
        <WhatIDo />

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <BarChart className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            <ExperienceItem
              index={0}
              role="Quality Assurance Analyst"
              company="Ubisoft Entertainment SA"
              period="July '22 - July '25"
              image="/companies/ubisoft.png"
              description="3+ years embedded within a global gaming studio, working across quality assurance and product operations on live game titles. Contributed to KPI tracking, performance reporting and dashboard development using Power BI and Tableau. Identified data trends and anomalies to inform release decisions, collaborated closely with product and engineering teams, and supported data-informed operations across multiple international releases."
              tags={["Power BI", "Tableau", "KPI Analysis", "Performance Reporting", "Data Visualisation", "Dashboarding", "Cross-Functional", "Product Operations"]}
            />
            <ExperienceItem
              index={1}
              role="Data Analyst Intern"
              company="Kuber Enterprise"
              period="Feb '18 - Feb '19"
              description="Supported business reporting and data management — collecting, cleaning and organising data to improve reporting accuracy by 20%. Built and maintained executive dashboards tracking 8+ KPIs to support strategic business decisions, using Excel and business intelligence tools."
              tags={["KPI Reporting", "Excel", "Data Cleaning", "Business Intelligence", "Dashboarding"]}
            />
            <ExperienceItem
              index={2}
              role="Business Consultant Intern"
              company="Blackmont Consulting"
              period="2026"
              description="Delivered strategic consulting engagements for clients across multiple sectors, conducting market analysis, financial modelling, and presenting data-driven recommendations to senior stakeholders. Collaborated in a cross-functional team to develop go-to-market strategies and operational improvement plans."
              tags={["Strategic Consulting", "Market Analysis", "Financial Modelling", "Business Strategy"]}
              downloadLink="/portfolio data/Amogh_LOR_Blackmont.pdf"
              downloadLabel="Download Letter of Recommendation"
            />
            <ExperienceItem
              index={3}
              role="MSc Business Analytics — Distinction"
              company="University of Southampton"
              period="Sept '25 - Present"
              image="/companies/univ_sa.png"
              description="Awarded Distinction. Focusing on Decision Analytics, Simulation Modeling, Risk Management, and Data Mining. Applying advanced analytical techniques to solve complex business problems."
              tags={["Decision Analytics", "Simulation Modeling", "Risk Management", "Data Mining"]}
              downloadLink="/portfolio data/37508261_MANG6545_Dissertation.pdf"
              downloadLabel="Download Dissertation (MANG6545)"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Lightbulb className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectItem
              index={0}
              title="Northrop Grumman Challenge"
              description="Designed 'The Brain' — a multi-agent reasoning architecture for a defence-sector AI challenge. Focused on secure data flows, decision auditability and explainable AI outputs aligned to operational requirements."
              tags={["AI", "Python", "Decision Analytics", "Systems Design"]}
              link="#"
              titleColor="#00f2ff"
              image="/projects/ai_brain.png"
              onOpenProject={() => onOpenProject?.('northrop')}
            />
            <ProjectItem
              index={1}
              title="MedTech Innovation Programme"
              description="Designed the data architecture and operational logic for an accessible smart medication dispenser. Produced user requirement analysis, system flow documentation and a business case for IoT-enabled elderly care."
              tags={["Data Architecture", "Business Analysis", "IoT", "Requirements Analysis"]}
              link="#"
              image="/projects/medtech.png"
              onOpenProject={() => onOpenProject?.('medtech')}
            />
            <ProjectItem
              index={2}
              title="BOSS Global Business Competition"
              description="Operated a simulated holiday enterprise end-to-end — managing supply chain decisions, demand forecasting, pricing strategy and P&L optimisation. Applied predictive modelling to maximise revenue and minimise operational costs."
              tags={["Demand Forecasting", "Supply Chain", "Business Strategy", "P&L Optimisation"]}
              link="#"
              image="/projects/business_sim.png"
              onOpenProject={() => onOpenProject?.('boss')}
              downloadLink="/portfolio data/BOSS_Competition_Certificate.pdf"
              downloadLabel="Download Certificate"
            />
            <ProjectItem
              index={3}
              title="IoT-Based Dual-Axis Solar Tracker"
              description="Built an automated Arduino-based dual-axis solar tracking system. Captured and analysed sensor data to validate efficiency gains vs. fixed-panel baselines — demonstrating a measurable improvement in energy yield."
              tags={["IoT", "Arduino", "Data Analysis", "Automation"]}
              link="#"
              image="/projects/solar_tracker.png"
              downloadLink="/portfolio data/IoT_Solar_Tracker.pptx"
              downloadLabel="Download Presentation"
            />
            <ProjectItem
              index={4}
              title="GRI & UX Portfolio"
              description="Applied human-centred design methodology and GRI sustainability reporting principles to produce a structured UX portfolio — aligning design outcomes with measurable, transparent impact metrics."
              tags={["User Research", "Wireframing", "Accessibility", "Foundational Design"]}
              link="#"
              titleColor="#c084fc"
              image="/portfolio data/GRI.jpg"
              onOpenProject={() => onOpenProject?.('griux')}
            />
          </div>
        </section>

        {/* Retail & Hospitality Section */}
        <section id="hospitality" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <ShoppingBag className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Additional Work History</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            <ExperienceItem
              index={0}
              role="Online Assistant"
              company="Sainsbury's"
              period="Part Time"
              image="/companies/sainsburys.png"
              description="Executed high-volume online fulfilment orders during early morning shifts. Consistently maintained a high picking rate of 198 Items Per Hour (IPH) while ensuring accuracy and order quality."
              tags={["Operations", "Efficiency", "Supply Chain"]}
            />
            <ExperienceItem
              index={1}
              role="Supermarket Assistant"
              company="Waitrose"
              period="Dec '25 - Jan '26"
              image="/companies/waitrose.png"
              description="Managed tills, customer service interactions, and online delivery execution during the peak Christmas break. Optimized shop-floor operations through proactive communication and active stocking."
              tags={["Customer Service", "Inventory Management", "Logistics"]}
            />
            <ExperienceItem
              index={2}
              role="Team Member"
              company="Taco Bell"
              period="Part Time"
              image="/companies/tacobell.png"
              description="Thrived in a high-pressure hospitality setting by rapidly processing customer orders and managing front-of-house operations. Ensured seamless service execution and food preparation during peak hours."
              tags={["Hospitality", "Fast-Paced Environment", "Teamwork"]}
            />
          </div>
        </section>


        {/* Tech Stack Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Skills &amp; Tools</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
          <TechStack />
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Get in Touch</h4>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                I'm always open to discussing new projects, design challenges, or opportunities to collaborate on innovative digital products.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "lonareamogh@gmail.com", href: "mailto:lonareamogh@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/amoghlonare" },
                  { icon: Instagram, label: "Instagram Profile", href: "https://www.instagram.com/amoghlonare" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const targetEmail = "lonareamogh@gmail.com";
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" id="name" name="name" required className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Your Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="email" id="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="email@address.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                  <textarea id="message" name="message" required rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </motion.form>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-16 text-center text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">© 2026 Amogh Lonare. Built with precision using React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};
