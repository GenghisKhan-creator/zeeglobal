import React, { useEffect, useRef } from 'react';
import { HardHat, Cog, Building2, Layers, Cpu, Wrench, ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Industrial = () => {
    const sectionRef = useRef(null);
    const horizontalRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            const horizontal = horizontalRef.current;
            const section = sectionRef.current;

            if (horizontal && section) {
                const amountToScroll = horizontal.scrollWidth - window.innerWidth;

                gsap.to(horizontal, {
                    x: -amountToScroll,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${amountToScroll}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });
            }

            // Standard reveals
            gsap.from('.industrial-reveal', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                clearProps: "all"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pb-32 px-6 md:px-12 pt-32 md:pt-40 shadow-none">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24 industrial-reveal">
                <div>
                    <div className="inline-flex items-center gap-2 mb-4 md:mb-8 text-[8px] md:text-[10px] font-black tracking-[0.5em] text-black/30 uppercase">
                        <div className="w-2 h-2 bg-design-teal rounded-full animate-pulse"></div>
                        Infrastructure Division
                    </div>
                    <h1 className="condensed-text text-5xl sm:text-7xl md:text-[9vw] leading-[0.8]">
                        INDUSTRIAL <br /><span className="text-black/20">HUB.</span>
                    </h1>
                </div>
                <p className="max-w-md text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed text-left lg:text-right">
                    Empowering West Africa's skyline through precision engineering,
                    equipment leasing, and lifecycle management.
                </p>
            </div>

            {/* Horizontal Section */}
            <div className="relative -mx-6 md:-mx-12 mb-32">
                <section ref={sectionRef} className="h-screen flex items-center bg-neutral-100 overflow-hidden">
                    <div className="absolute top-1/2 left-12 -translate-y-1/2 z-0 pointer-events-none">
                        <h2 className="condensed-text text-black/5 text-[15vw] leading-none uppercase">FLEET</h2>
                    </div>

                    <div
                        ref={horizontalRef}
                        className="flex gap-12 px-12 md:px-24 w-max items-center h-full relative z-10"
                    >
                        <EquipmentScrollCard
                            img="/assets/3d/crane.png"
                            title="Z-SERIES CRANES"
                            specs="250-TON CAPACITY • 3D PRECISION CONTROL"
                        />
                        <EquipmentScrollCard
                            img="/assets/3d/excavator.png"
                            title="AUTONOMOUS FLEET"
                            specs="TERRAIN ADAPTIVE • ZERO-EMISSION"
                        />
                        <EquipmentScrollCard
                            img="/assets/3d/steel.png"
                            title="STEEL FRAMEWORKS"
                            specs="ISO 9001 CERTIFIED • SMART ERECTION"
                        />
                        <EquipmentScrollCard
                            img="/assets/3d/tradefair.png"
                            title="ARCHITECTURAL HUB"
                            specs="NEXT-GEN INFRASTRUCTURE • LABADI"
                        />
                    </div>

                    {/* Hint */}
                    <div className="absolute bottom-12 right-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/20">
                        <span>EXPLORE FLEET</span>
                        <ArrowRight size={16} />
                    </div>
                </section>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 industrial-reveal">
                <IndustrialCard
                    icon={<HardHat size={32} />}
                    title="CONSTRUCTION"
                    tag="Lifecycle"
                    desc="Site clearing to final structural handover with absolute precision."
                />
                <IndustrialCard
                    icon={<Cog size={32} />}
                    title="LEASING"
                    tag="Fleet"
                    desc="Premium heavy equipment maintained to global safety standards."
                />
                <IndustrialCard
                    icon={<Layers size={32} />}
                    title="MATERIALS"
                    tag="Sourcing"
                    desc="High-grade steel and architectural materials for the global elite."
                />
                <IndustrialCard
                    icon={<Cpu size={32} />}
                    title="SOLAR SYSTEMS"
                    tag="Energy"
                    desc="Sustainable power integration for industrial and luxury developments."
                />
                <IndustrialCard
                    icon={<Building2 size={32} />}
                    title="STRUCTURAL"
                    tag="Steelwork"
                    desc="Precision-engineered frameworks for multi-story industrial builds."
                />
                <IndustrialCard
                    icon={<Wrench size={32} />}
                    title="AUDITS"
                    tag="Facility"
                    desc="Proactive mechanical and electrical maintenance ensures zero downtime."
                />
            </div>
        </div>
    );
};

const EquipmentScrollCard = ({ img, title, specs }) => (
    <div className="w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] rounded-[3rem] md:rounded-[4rem] overflow-hidden relative group shadow-2xl shrink-0">
        <img
            src={img}
            alt={title}
            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000"
            onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000";
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end text-white z-20">
            <div>
                <span className="text-[10px] font-black tracking-[0.4em] block mb-4 opacity-70 uppercase italic uppercase">{specs}</span>
                <h3 className="condensed-text text-4xl md:text-8xl">{title}</h3>
            </div>
            <div className="bg-white text-black p-6 rounded-full hidden md:flex opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={32} />
            </div>
        </div>
    </div>
);

const IndustrialCard = ({ icon, title, tag, desc }) => (
    <div className="bg-white rounded-[2.5rem] p-10 border border-black/5 hover:border-design-teal/40 transition-all duration-500 group cursor-pointer shadow-sm">
        <div className="flex justify-between items-start mb-10">
            <div className="bg-design-teal/10 p-5 rounded-3xl text-black">
                {icon}
            </div>
            <div className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowUpRight size={18} />
            </div>
        </div>
        <span className="text-[10px] font-black tracking-[0.4em] text-black/20 block mb-2 uppercase">{tag}</span>
        <h3 className="condensed-text text-2xl md:text-4xl mb-4 uppercase">{title}</h3>
        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">{desc}</p>
    </div>
);

export default Industrial;
