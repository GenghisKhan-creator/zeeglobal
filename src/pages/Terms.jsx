import React, { useEffect } from 'react';
import { Shield, CheckCircle, Heart, HardHat, FileText, Scale, Lock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Line-by-line reveal for header
            gsap.from('.terms-reveal-heading', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Split text animation for legal sections
            gsap.utils.toArray('.legal-section').forEach((section) => {
                gsap.from(section.querySelectorAll('p, li'), {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="pb-32 px-8 md:px-12 pt-40">
            {/* Header */}
            <div className="mb-24">
                <div className="inline-flex items-center gap-2 mb-8 text-[10px] font-black tracking-[0.5em] text-black/30 uppercase terms-reveal-heading">
                    Governance & Compliance
                </div>
                <h1 className="condensed-text text-7xl md:text-[8vw] leading-[0.8] terms-reveal-heading">
                    RULES & <br /><span className="text-black/20">STANDARDS.</span>
                </h1>
                <div className="mt-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/40 terms-reveal-heading">
                    <span>EFFECTIVE: JAN 2026</span>
                    <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
                    <span>LABADI REGION</span>
                </div>
            </div>

            {/* Policies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                <PolicyCard
                    icon={<Shield size={32} />}
                    title="QUALITY ASSURANCE"
                    desc="Full compliance with ISO & Ghana Standards Authority (GSA) protocols."
                />
                <PolicyCard
                    icon={<Lock size={32} />}
                    title="CONFIDENTIALITY"
                    desc="Mandatory NDAs for all celebrity and HNWI interactions. Discretion is absolute."
                />
                <PolicyCard
                    icon={<Heart size={32} />}
                    title="SUSTAINABILITY"
                    desc="Green building initiatives and minimizing industrial footprint in Accra."
                />
                <PolicyCard
                    icon={<HardHat size={32} />}
                    title="SAFETY (HSE)"
                    desc="Zero-Harm policy. Mandatory PPE and weekly audits are non-negotiable."
                />
                <PolicyCard
                    icon={<FileText size={32} />}
                    title="ETHICAL CONDUCT"
                    desc="Transparency in financial dealings and integrity in stakeholder relations."
                />
                <PolicyCard
                    icon={<Scale size={32} />}
                    title="GOVERNING LAW"
                    desc="All operations fall under the jurisdiction of the Republic of Ghana."
                />
            </div>

            {/* Detailed Legal Text with Animated Sections */}
            <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-sm border border-black/5">
                <div className="max-w-4xl space-y-32">
                    <div className="legal-section">
                        <h3 className="condensed-text text-5xl mb-10 pb-6 border-b border-black/5">1. SERVICE PERFORMANCE</h3>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed italic">
                            ZeeGlobal Company Limited commits to performing all services—including Industrial Hub operations,
                            Logistics Portal management, and Elite Lifestyle services—to the highest professional standards.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h3 className="condensed-text text-5xl mb-10 pb-6 border-b border-black/5">2. PAYMENT & FINANCIALS</h3>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed italic mb-10">
                            All investment tiers and service bookings are subject to the specific financial terms
                            outlined in individual Service Agreements.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-[11px] font-black tracking-widest text-black/60 uppercase">
                                <div className="w-2.5 h-2.5 bg-design-pink rounded-full"></div>
                                DEFAULT CURRENCY: GHANAIAN CEDI (GHS) / USD
                            </li>
                            <li className="flex items-center gap-4 text-[11px] font-black tracking-widest text-black/60 uppercase">
                                <div className="w-2.5 h-2.5 bg-design-pink rounded-full"></div>
                                INVOICES DUE WITHIN 15 BUSINESS DAYS OF ISSUANCE
                            </li>
                            <li className="flex items-center gap-4 text-[11px] font-black tracking-widest text-black/60 uppercase">
                                <div className="w-2.5 h-2.5 bg-design-pink rounded-full"></div>
                                LATE PAYMENTS INCUR INTEREST AT BANK OF GHANA RATES
                            </li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h3 className="condensed-text text-5xl mb-10 pb-6 border-b border-black/5">3. LIABILITY & INDEMNITY</h3>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed italic">
                            While Western-grade safety protocols (HSE Zero-Harm) are in place, ZeeGlobal shall not be held liable
                            for indirect or consequential losses characteristic of regional infrastructure projects.
                            Indemnification applies to all unauthorized site access.
                        </p>
                    </div>

                    <div className="pt-20 text-center">
                        <p className="text-[10px] font-black tracking-[0.6em] uppercase text-design-teal animate-pulse">
                            AUTHORIZED LEGAL DESK • ACCRA JUNCTION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PolicyCard = ({ icon, title, desc }) => (
    <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-12 border border-white/60 hover:bg-white transition-all duration-500 shadow-sm group">
        <div className="mb-10 text-black/20 group-hover:text-black transition-colors">{icon}</div>
        <h4 className="condensed-text text-3xl mb-4">{title}</h4>
        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">{desc}</p>
    </div>
);

export default Terms;
