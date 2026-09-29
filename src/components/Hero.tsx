import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Linkedin, Download, ArrowDown } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: portfolioData.roles,
            typeSpeed: 55,
            backSpeed: 30,
            loop: true,
            backDelay: 1800,
        });
        return () => { typed.destroy(); };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <ThreeCanvas />

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Credential badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-md border border-white/10 bg-white/5 text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    MSc Business Analytics (Distinction) · University of Southampton
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
                    Amogh <span className="text-neon">Lonare</span>
                </h1>

                {/* Typed role */}
                <div className="h-10 md:h-14 mb-6 text-xl md:text-3xl font-semibold text-[#00f2ff] tracking-tight flex items-center justify-center">
                    <span ref={el}></span>
                </div>

                {/* Supporting statement — business-first */}
                <p className="text-base md:text-lg text-gray-400 mb-3 max-w-xl mx-auto leading-relaxed">
                    Turning data into dashboards, reports and practical business decisions.
                </p>
                <p className="text-sm text-gray-500 mb-10 max-w-md mx-auto">
                    3+ years at Ubisoft in QA &amp; release operations · Power BI · Tableau · SQL · Advanced Excel
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
                    <a
                        href="#experience"
                        className="px-8 py-3.5 bg-[#00f2ff] text-[#050505] font-bold rounded-lg flex items-center gap-2 hover:bg-cyan-300 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center text-sm"
                    >
                        View My Work
                    </a>
                    <a
                        href={portfolioData.socials.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-lg flex items-center gap-2 hover:border-white/40 hover:bg-white/5 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center text-sm"
                    >
                        <Download className="w-4 h-4" /> Download CV
                    </a>
                    <a
                        href={portfolioData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 border border-white/10 text-gray-400 font-semibold rounded-lg flex items-center gap-2 hover:border-blue-400/40 hover:text-blue-400 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center text-sm"
                    >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                </div>

                {/* Quick stats — business framing */}
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
                    {[
                        { value: "3+", label: "Years at Ubisoft" },
                        { value: "10+", label: "KPI Dashboards Built" },
                        { value: "50%", label: "Reporting Time Saved" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="flex flex-col items-center gap-1 text-gray-600 animate-bounce">
                    <ArrowDown className="w-4 h-4" />
                </div>
            </div>
        </section>
    );
}
