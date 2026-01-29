import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Use a slight delay to ensure the DOM is fully ready
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power4.out', duration: 1.2 }
            });

            tl.from('.hero-text-part', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            })
                .from('.hero-3d-asset', {
                    scale: 0.7,
                    opacity: 0,
                }, "-=0.8")
                .from('.hero-metric', {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1
                }, "-=1")
                .set('.hero-text-part, .hero-3d-asset, .hero-metric', {
                    clearProps: "all"
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center px-6 md:px-12 pt-40">
            {/* Top Navigation Aura */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-200/50 to-transparent pointer-events-none"></div>

            {/* Main Hero Header */}
            <div className="relative z-10 space-y-2 md:space-y-4">
                <div className="flex items-center gap-4 hero-text-part">
                    <span className="text-[10px] font-black tracking-[0.6em] text-neutral-400 uppercase">Est. 2026</span>
                    <div className="h-[1px] w-12 md:w-20 bg-neutral-300"></div>
                </div>

                <h1 className="condensed-text text-[18vw] leading-[0.75] tracking-tighter overflow-hidden">
                    <div className="hero-text-part select-none">ZEE</div>
                    <div className="hero-text-part flex items-center gap-4 md:gap-8 select-none">
                        GLOBAL
                        <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border-[1px] border-black/10 flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 md:w-3 md:h-3 bg-design-teal rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <div className="hero-text-part text-neutral-200 italic select-none">AUTHORITY.</div>
                </h1>
            </div>

            {/* Bottom Section with Metrics and Asset */}
            <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-4 space-y-8 md:space-y-12">
                    <p className="max-w-xs text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-neutral-500 leading-relaxed hero-metric">
                        Specialized investment and <br />
                        infrastructure lifecycle management <br />
                        in the heart of West Africa.
                    </p>
                    <div className="flex gap-12 md:gap-20">
                        <HeroStat label="Active Sites" value="12+" />
                        <HeroStat label="Capital" value="$420M+" />
                    </div>
                </div>

                {/* Floating 3D Hub Asset Placeholder */}
                <div className="lg:col-span-8 flex justify-end hero-3d-asset">
                    <div className="w-full lg:w-[80%] aspect-[16/9] md:aspect-video rounded-[2.5rem] md:rounded-[4rem] bg-neutral-200 overflow-hidden relative shadow-2xl group border-[1px] border-white/50">
                        <img
                            src="/assets/3d/tradefair.png"
                            alt="Z-Hub Alpha"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-design-teal/10 to-transparent mix-blend-overlay"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
                            Concept: Z-Hub Alpha • Labadi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeroStat = ({ label, value }) => (
    <div className="space-y-1 hero-metric">
        <div className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">{label}</div>
        <div className="condensed-text text-3xl md:text-5xl">{value}</div>
    </div>
);

export default Hero;
