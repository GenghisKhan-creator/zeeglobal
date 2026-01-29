import React, { useEffect, useRef, useState } from 'react';
import { Wind, Trash2, Shirt, UserCheck, Star, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import Magnetic from '../components/common/Magnetic';

const Lifestyle = () => {
    const containerRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.life-reveal', {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating private concierge verification
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
        }, 3000);
    };

    return (
        <div ref={containerRef} className="pb-32 px-6 md:px-12 pt-32 md:pt-40">
            {/* Header */}
            <div className="mb-16 md:mb-24 life-reveal text-center">
                <div className="inline-flex items-center gap-2 mb-6 md:mb-8 text-[8px] md:text-[10px] font-black tracking-[0.5em] text-black/30 uppercase">
                    Concierge Division
                </div>
                <h1 className="condensed-text text-5xl sm:text-7xl md:text-[9vw] leading-[0.8] mb-6">
                    ELITE <br /><span className="text-black/20">LIFESTYLE.</span>
                </h1>
                <p className="max-w-xl mx-auto text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-black/40 leading-relaxed">
                    Luxury management for the global elite. From climate maintenance to
                    meticulous housekeeping, we ensure your environment matches your status.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                {/* Services List */}
                <div className="lg:col-span-7 space-y-4 life-reveal w-full">
                    <LifestyleRow
                        icon={<Wind size={24} />}
                        title="AC WASH & INSTALLATION"
                        desc="Precision maintenance for luxury estate HVAC systems."
                    />
                    <LifestyleRow
                        icon={<Trash2 size={24} />}
                        title="PROFESSIONAL CLEANING"
                        desc="Hospital-grade sanitation for high-profile residences."
                    />
                    <LifestyleRow
                        icon={<Shirt size={24} />}
                        title="LAUNDRY & VALET"
                        desc="Sovereign-grade garment care for high-fashion items."
                    />
                    <LifestyleRow
                        icon={<UserCheck size={24} />}
                        title="LIVE-OUT MAIDS"
                        desc="Highly vetted domestic staff trained to international standards."
                    />
                </div>

                {/* Premium Booking Form */}
                <div className="lg:col-span-5 life-reveal w-full">
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-sm border border-black/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 md:p-8 text-design-teal/10">
                            <Star size={60} md:size={80} fill="currentColor" />
                        </div>
                        <h3 className="condensed-text text-3xl md:text-4xl mb-8 uppercase">
                            {isSuccess ? 'REQUEST RECEIVED' : 'BOOK AN APPOINTMENT'}
                        </h3>

                        {isSuccess ? (
                            <div className="py-12 text-center space-y-6">
                                <div className="w-16 h-16 bg-design-teal rounded-full flex items-center justify-center mx-auto shadow-xl">
                                    <CheckCircle2 size={32} className="text-black" />
                                </div>
                                <p className="text-[10px] font-black tracking-widest uppercase text-black/60 leading-relaxed">
                                    OUR PRIVATE CONCIERGE WILL CONTACT <br />
                                    YOU SHORTLY FOR DISK VERIFICATION.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[8px] md:text-[10px] font-black tracking-widest uppercase text-black/30">Service Selection</label>
                                    <select className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-4 md:py-5 px-5 md:px-6 text-[10px] md:text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-design-teal uppercase">
                                        <option>Industrial Cleaning</option>
                                        <option>HVAC Audit</option>
                                        <option>Elite Laundry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[8px] md:text-[10px] font-black tracking-widest uppercase text-black/30">Preferred Date</label>
                                    <input type="date" className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-4 md:py-5 px-5 md:px-6 text-[10px] md:text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-design-teal" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[8px] md:text-[10px] font-black tracking-widest uppercase text-black/30">Legal Name</label>
                                    <input type="text" placeholder="EX. MR. KOFI MENSAH" className="w-full bg-neutral-50 border-none rounded-xl md:rounded-2xl py-4 md:py-5 px-5 md:px-6 text-[10px] md:text-xs font-bold tracking-widest outline-none focus:ring-2 focus:ring-design-teal uppercase" disabled={isSubmitting} />
                                </div>

                                <Magnetic>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full ${isSubmitting ? 'bg-design-teal text-black' : 'bg-black text-white'} py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.4em] transition-all duration-500 shadow-xl flex items-center justify-center gap-4`}
                                    >
                                        {isSubmitting ? 'TRANSMITTING...' : 'CONFIRM BOOKING'} <ArrowRight size={16} className={isSubmitting ? 'animate-bounce' : ''} />
                                    </button>
                                </Magnetic>
                            </form>
                        )}
                        <div className="mt-8 flex items-center gap-3 justify-center">
                            <CheckCircle2 size={14} className="text-design-teal" />
                            <span className="text-[8px] font-bold uppercase tracking-widest text-black/30">Vetted Staff • NDA Protected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LifestyleRow = ({ icon, title, desc }) => (
    <div className="group bg-white/40 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/60 hover:border-black/5 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 cursor-pointer shadow-sm">
        <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl text-black shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-500">
            {icon}
        </div>
        <div>
            <h4 className="condensed-text text-xl md:text-2xl group-hover:text-black transition-colors">{title}</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-5">{desc}</p>
        </div>
    </div>
);

export default Lifestyle;
