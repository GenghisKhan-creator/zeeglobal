import React, { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../components/common/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from('.home-reveal', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.home-bottom-grid',
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            });
        }, containerRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="pb-20">
            <Hero />

            {/* Bottom Bento Content */}
            <div className="home-bottom-grid px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12 items-end">

                {/* Left Card */}
                <div className="lg:col-span-3 home-reveal">
                    <div className="bg-white rounded-[2rem] p-6 relative group overflow-hidden cursor-pointer">
                        <div className="aspect-square rounded-[1.5rem] bg-neutral-100 mb-6 overflow-hidden relative">
                            <img
                                src="/assets/3d/tradefair.png"
                                alt="Trade Fair Hub"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop";
                                }}
                            />
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black text-white tracking-widest uppercase shadow-xl">
                                In Development
                            </div>
                        </div>
                        <div className="absolute top-10 right-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white scale-0 md:group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight size={20} />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Portfolio Preview</p>
                        <h4 className="condensed-text text-2xl md:text-3xl">LABADI TRADE HUB</h4>
                    </div>
                </div>

                {/* Center Text */}
                <div className="lg:col-span-5 flex flex-col items-center home-reveal">
                    <h3 className="condensed-text text-4xl sm:text-5xl md:text-7xl text-center leading-[0.9] mb-8 md:mb-10 uppercase">
                        BENEFITS YOU <br />
                        CAN GET BY USING <br />
                        OUR SERVICES
                    </h3>
                    <Magnetic>
                        <button className="px-10 md:px-12 py-4 bg-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-sm hover:bg-black hover:text-white transition-all duration-500">
                            MAIN SERVICES
                        </button>
                    </Magnetic>
                </div>

                {/* Right Benefits List */}
                <div className="lg:col-span-4 home-reveal">
                    <div className="space-y-4 md:space-y-2">
                        <BenefitItem
                            title="Precision Engineering"
                            desc="Surgical accuracy in construction and logistics lifecycle management."
                            img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=100&h=100&auto=format&fit=crop"
                        />
                        <BenefitItem
                            title="Elite Discretion"
                            desc="Sovereign-grade confidentiality for high-net-worth portfolios."
                            img="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <BenefitItem
                            title="Global Standard"
                            desc="Implementing the same standards found in London, Dubai and New York."
                            img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=100&h=100&auto=format&fit=crop"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

const BenefitItem = ({ title, desc, img }) => (
    <div className="benefit-card group cursor-pointer flex items-center gap-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white/50 group-hover:border-black transition-colors duration-500">
            <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div>
            <h4 className="condensed-text text-xl md:text-2xl mb-1 group-hover:text-black transition-colors">{title}</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Home;
