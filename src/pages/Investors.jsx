import React, { useEffect, useState, useRef } from 'react';
import { Lock, ShieldCheck, EyeOff, FileText, ChevronRight, Globe, TrendingUp, BarChart3, PieChart, Activity, MapPin } from 'lucide-react';
import gsap from 'gsap';
import Magnetic from '../components/common/Magnetic';

const Investors = () => {
    const [isVerified, setIsVerified] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.investor-reveal', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: "all"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [isVerified]);

    const handleVerify = (e) => {
        e.preventDefault();
        setIsVerified(true);
    };

    return (
        <div ref={containerRef} className="pb-32 px-6 md:px-12 pt-32 md:pt-40">
            {isVerified ? (
                <div key="dashboard">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 md:mb-16 investor-reveal">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 text-[8px] md:text-[10px] font-black tracking-[0.4em] text-design-teal uppercase">
                                <Activity size={12} /> Live Portfolio Oversight
                            </div>
                            <h1 className="condensed-text text-5xl md:text-7xl leading-none">MOGUL <br />DASHBOARD.</h1>
                        </div>
                        <div className="text-left sm:text-right">
                            <p className="text-[8px] md:text-[10px] font-black tracking-widest text-black/30 uppercase">Welcome back</p>
                            <p className="condensed-text text-2xl md:text-3xl">MR. KOFI MENSAH</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12">
                        <div className="lg:col-span-8 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-sm investor-reveal">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
                                <h3 className="condensed-text text-2xl md:text-3xl italic">Project Yield Projections</h3>
                                <div className="flex gap-2 md:gap-4">
                                    <span className="text-[8px] md:text-[10px] font-black text-design-teal border border-design-teal/20 px-3 md:px-4 py-1 rounded-full uppercase">Industrial</span>
                                    <span className="text-[8px] md:text-[10px] font-black text-design-pink border border-design-pink/20 px-3 md:px-4 py-1 rounded-full uppercase">Real Estate</span>
                                </div>
                            </div>
                            <div className="h-48 md:h-64 flex items-end gap-2 md:gap-4 px-2 md:px-4 overflow-hidden">
                                {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-t-lg md:rounded-t-2xl bg-neutral-100 relative group overflow-hidden" style={{ height: `${h}%` }}>
                                        <div className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ${i % 2 === 0 ? 'bg-design-teal/40' : 'bg-design-pink/40'}`} style={{ height: '100%' }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 bg-black text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl investor-reveal">
                            <h3 className="condensed-text text-2xl md:text-3xl mb-6 md:mb-8">Asset Split</h3>
                            <div className="space-y-4 md:space-y-6">
                                <AllocationRow label="Logistics Hub" value="42%" color="bg-design-teal" />
                                <AllocationRow label="Industrial" value="28%" color="bg-design-pink" />
                                <AllocationRow label="Lifestyle" value="15%" color="bg-white" />
                                <AllocationRow label="Liquid" value="15%" color="bg-neutral-800" />
                            </div>
                        </div>
                    </div>

                    <div className="investor-reveal">
                        <h3 className="condensed-text text-3xl md:text-4xl mb-8 md:mb-10 uppercase tracking-tighter">Current Development Sites</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <SiteCard
                                title="LABADI TRADE FAIR HUB"
                                location="Accra, Ghana"
                                completion="89%"
                                img="/assets/3d/tradefair.png"
                            />
                            <SiteCard
                                title="TEMA GATEWAY TERMINAL"
                                location="Tema, Ghana"
                                completion="34%"
                                img="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000"
                            />
                        </div>
                    </div>

                    <button onClick={() => setIsVerified(false)} className="mt-16 md:mt-20 text-[8px] md:text-[10px] font-black tracking-[0.5em] text-black/20 uppercase hover:text-black transition-colors block mx-auto py-4 px-8">
                        Log Out of Secure Session
                    </button>
                </div>
            ) : (
                <div key="portal">
                    <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-16 md:mb-24 investor-reveal">
                        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 bg-black text-white rounded-full text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase shadow-xl">
                            <Lock size={12} md:size={14} className="text-design-teal" />
                            ESTABLISHED 2026 • LABADI, GHANA
                        </div>
                        <h1 className="condensed-text text-5xl sm:text-7xl md:text-[8vw] leading-[0.85]">
                            THE MOGUL <br /><span className="text-black/20">PORTAL.</span>
                        </h1>
                        <p className="max-w-xl text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">
                            Discreet capital management and infrastructure oversight for global developers,
                            celebrities, and high-net-worth individuals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                        <div className="lg:col-span-7 investor-reveal w-full">
                            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-sm border border-black/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <ShieldCheck size={80} md:size={120} />
                                </div>

                                <h3 className="condensed-text text-3xl md:text-5xl mb-8">INVESTOR <br />VERIFICATION</h3>
                                <form onSubmit={handleVerify} className="space-y-8 md:space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                        <VerificationInput label="Full Legal Name" placeholder="EX. MR. KOFI MENSAH" />
                                        <VerificationInput label="Institutional Email" placeholder="DESK@PARTNER.COM" />
                                    </div>
                                    <VerificationInput label="Portfolio Capacity" placeholder="UNDER $10M / $10M - $50M / $50M+" isSelect />
                                    <Magnetic>
                                        <button type="submit" className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-black text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-design-teal hover:text-black transition-all duration-500 shadow-xl flex items-center justify-center gap-4">
                                            Request Private Access <ChevronRight size={18} />
                                        </button>
                                    </Magnetic>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-6 md:space-y-8 investor-reveal w-full">
                            <ProtocolCard
                                icon={<EyeOff className="text-design-teal" size={24} md:size={32} />}
                                title="ABSOLUTE DISCRETION"
                                desc="Every interaction is protected by sovereign-grade NDAs."
                            />
                            <ProtocolCard
                                icon={<Globe className="text-design-teal" size={24} md:size={32} />}
                                title="GHANA GATEWAY"
                                desc="Unparalleled access to West African industrial expansion."
                            />
                            <ProtocolCard
                                icon={<TrendingUp className="text-design-teal" size={24} md:size={32} />}
                                title="TIERED PARTNERSHIPS"
                                desc="Customized tiers built for diverse liquidity profiles."
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const AllocationRow = ({ label, value, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between text-[8px] md:text-[10px] font-black uppercase tracking-widest">
            <span>{label}</span>
            <span>{value}</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className={`${color} h-full`} style={{ width: value }}></div>
        </div>
    </div>
);

const SiteCard = ({ title, location, completion, img }) => (
    <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 border border-black/5 shadow-sm group cursor-pointer overflow-hidden">
        <div className="aspect-video rounded-[1rem] md:rounded-[2rem] overflow-hidden mb-6 md:mb-8 relative">
            <img src={img} alt={title} className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white/90 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[6px] md:text-[8px] font-black uppercase tracking-widest">
                {completion} COMPLETE
            </div>
        </div>
        <div className="px-4 md:px-6 pb-4 md:pb-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[8px] md:text-[10px] font-black text-black/30 mb-2 uppercase">
                <MapPin size={10} md:size={12} /> {location}
            </div>
            <h4 className="condensed-text text-xl md:text-3xl">{title}</h4>
        </div>
    </div>
);

const VerificationInput = ({ label, placeholder, isSelect = false }) => (
    <div className="space-y-3 md:space-y-4">
        <label className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-black/30">{label}</label>
        {isSelect ? (
            <select className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-4 md:py-5 px-5 md:px-6 text-[10px] md:text-xs font-bold tracking-widest text-black/60 outline-none focus:ring-2 focus:ring-design-teal transition-all uppercase">
                <option>Select Tier</option>
                <option>Under $10M</option>
                <option>$10M - $50M</option>
                <option>$50M+</option>
            </select>
        ) : (
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-4 md:py-5 px-5 md:px-6 text-[10px] md:text-xs font-bold tracking-widest text-black/60 outline-none focus:ring-2 focus:ring-design-teal transition-all"
            />
        )}
    </div>
);

const ProtocolCard = ({ icon, title, desc }) => (
    <div className="bg-white/40 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/60 hover:border-design-teal/30 transition-all duration-500">
        <div className="mb-4">{icon}</div>
        <h4 className="condensed-text text-xl md:text-2xl mb-1">{title}</h4>
        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed mt-5">{desc}</p>
    </div>
);

export default Investors;
