import React, { useEffect, useRef, useState } from 'react';
import { Ship, Truck, Plane, Globe, Search, Package, Navigation, ArrowRight, MapPin, Activity } from 'lucide-react';
import gsap from 'gsap';
import Magnetic from '../components/common/Magnetic';

const Logistics = () => {
    const containerRef = useRef(null);
    const [isTracking, setIsTracking] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.log-reveal', {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: "all"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleTrack = (e) => {
        e.preventDefault();
        setIsTracking(true);
        setTimeout(() => setIsTracking(false), 3000);
    };

    return (
        <div ref={containerRef} className="pb-32 px-6 md:px-12 pt-32 md:pt-40">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24 log-reveal">
                <div>
                    <div className="inline-flex items-center gap-2 mb-4 md:mb-8 text-[8px] md:text-[10px] font-black tracking-[0.5em] text-black/30 uppercase">
                        Supply Chain Division
                    </div>
                    <h1 className="condensed-text text-5xl sm:text-7xl md:text-[9vw] leading-[0.8]">
                        LOGISTICS <br /><span className="text-black/20">PORTAL.</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4 md:gap-6 bg-white rounded-full px-6 md:px-8 py-3 md:py-4 border border-black/5 shadow-sm">
                    <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black tracking-widest uppercase">
                        <Activity size={14} className="text-design-teal" />
                        System Health: <span className="text-design-teal">Optimal</span>
                    </div>
                    <div className="w-[1px] h-4 bg-black/10"></div>
                    <div className="text-[8px] md:text-[10px] font-black tracking-widest uppercase text-black/40">
                        Ghana Hub Active
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-12 items-start">
                {/* Tracking Side */}
                <div className="lg:col-span-4 log-reveal w-full">
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-sm border border-black/5">
                        <h3 className="condensed-text text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3">
                            <Search size={28} className="text-design-teal" /> TRACK
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-8 md:mb-10 leading-relaxed">
                            GHANA'S GATEWAY TO GLOBAL TRADE. ENTER BILL OF LADING OR CONTAINER ID.
                        </p>
                        <form onSubmit={handleTrack} className="space-y-6 md:space-y-8">
                            <input
                                type="text"
                                placeholder="ZEE-LBD-2026-X"
                                className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-5 px-6 text-[10px] md:text-xs font-black tracking-widest outline-none focus:ring-2 focus:ring-design-teal uppercase"
                                disabled={isTracking}
                            />
                            <Magnetic>
                                <button
                                    type="submit"
                                    disabled={isTracking}
                                    className={`w-full ${isTracking ? 'bg-design-teal text-black' : 'bg-black text-white'} py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.4em] transition-all duration-500 shadow-xl flex items-center justify-center gap-4`}
                                >
                                    {isTracking ? 'SCANNING SECURE NODES...' : 'TRACK SHIPMENT'} <ArrowRight size={16} className={isTracking ? 'animate-spin' : ''} />
                                </button>
                            </Magnetic>
                        </form>
                    </div>
                </div>

                {/* Global Grid Side */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 log-reveal">
                    <LogCard
                        icon={<Ship size={32} md:size={40} />}
                        title="INTL FREIGHT"
                        desc="Connecting Tema and Takoradi Ports to the global grid with precision routes."
                    />
                    <LogCard
                        icon={<Globe size={32} md:size={40} />}
                        title="CUSTOM CLEARANCE"
                        desc="Seamless documentation processing with Ghanaian and international authorities."
                    />
                    <LogCard
                        icon={<Truck size={32} md:size={40} />}
                        title="HEAVY HAULAGE"
                        desc="Transportation of oversized industrial equipment across the ECOWAS region."
                    />
                    <LogCard
                        icon={<Navigation size={32} md:size={40} />}
                        title="WAREHOUSING"
                        desc="Bonded storage at the Labadi hub with real-time inventory visibility."
                    />
                </div>
            </div>

            {/* Routes Map Visual with High-End 3D Render */}
            <div className="mt-20 md:mt-32 log-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 shadow-sm border border-black/5 flex flex-col justify-center">
                    <h3 className="condensed-text text-4xl md:text-6xl text-black mb-6 md:mb-8 leading-tight">GHANA GATEWAY <br />POSITIONING</h3>
                    <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-black/40 mb-8 md:mb-10 leading-relaxed uppercase">
                        Strategically located at the International Trade Fair Center, Accra.
                        ZeeGlobal operates as the spine of West African logistics, connecting local production to global consumption.
                    </p>
                    <div className="space-y-4 md:space-y-6">
                        <RoutePoint label="TEMA DEEP-SEA TERMINAL" value="DIRECT CONNECTION" />
                        <RoutePoint label="ECOWAS LAND BRIDGE" value="ACTIVE ROUTES" />
                        <RoutePoint label="KOTOKA INT'L AIR FREIGHT" value="READY FOR DISPATCH" />
                    </div>
                </div>
                <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative group h-[40vh] md:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
                        alt="Global Hub"
                        className="w-full h-full object-cover grayscale brightness-110 md:group-hover:grayscale-0 transition-all duration-1000 md:scale-110 md:group-hover:scale-100"
                    />
                    <div className="absolute top-6 md:top-10 right-6 md:right-10 flex gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <MapPin size={20} md:size={24} className="text-design-pink" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LogCard = ({ icon, title, desc }) => (
    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-black/5 hover:scale-[1.02] transition-transform duration-500 group">
        <div className="mb-6 md:mb-10 text-design-pink group-hover:text-black transition-colors">{icon}</div>
        <h4 className="condensed-text text-2xl md:text-3xl mb-4">{title}</h4>
        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">{desc}</p>
    </div>
);

const RoutePoint = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 md:py-4 border-b border-black/5 group cursor-pointer">
        <span className="text-[8px] md:text-[10px] font-black tracking-widest text-black/30 uppercase group-hover:text-black transition-colors">{label}</span>
        <span className="text-[8px] md:text-[10px] font-black tracking-widest text-design-teal uppercase">{value}</span>
    </div>
);

export default Logistics;
