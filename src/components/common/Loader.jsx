import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Counter logic
        const countInterval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(countInterval);
                return 100;
            });
        }, 20);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            tl.from('.loader-content', {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power3.out'
            })
                .from('.loader-image', {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'expo.out'
                }, "-=0.5")
                .to('.loader-progress-inner', {
                    width: '100%',
                    duration: 2.5,
                    ease: 'power4.inOut'
                }, 0)
                .to('.loader-container', {
                    y: '-100%',
                    duration: 1.2,
                    ease: 'expo.inOut',
                    delay: 0.5
                });
        });

        return () => {
            clearInterval(countInterval);
            ctx.revert();
        };
    }, [onComplete]);

    return (
        <div className="loader-container fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Texture/Aura */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-design-teal/20 via-transparent to-transparent animate-pulse"></div>

            <div className="loader-content relative z-10 flex flex-col items-center">
                <div className="loader-image w-40 h-40 md:w-64 md:h-64 mb-12 relative">
                    <div className="absolute inset-0 bg-design-teal/20 blur-3xl rounded-full"></div>
                    <img
                        src="/assets/loader/core.png"
                        alt="ZeeGlobal Core"
                        className="w-full h-full object-contain relative z-10 brightness-110"
                    />
                </div>

                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-3">
                        <div className="w-2 h-2 bg-design-teal rounded-full animate-ping"></div>
                        <span className="text-[10px] font-black tracking-[0.6em] text-white/40 uppercase">Sovereign Architecture</span>
                    </div>
                    <h1 className="condensed-text text-5xl md:text-7xl text-white tracking-tighter">
                        ZEE<span className="text-design-teal">GLOBAL.</span>
                    </h1>
                </div>

                <div className="mt-16 w-64 md:w-80 group">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[8px] font-black tracking-widest text-white/20 uppercase">Node Initializing</span>
                        <span className="condensed-text text-3xl text-white">{counter}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                        <div className="loader-progress-inner absolute top-0 left-0 h-full w-0 bg-design-teal shadow-[0_0_15px_rgba(154,200,205,0.6)]"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Status Grid */}
            <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
                <div className="hidden md:block">
                    <p className="text-[8px] font-black tracking-widest text-white/10 uppercase mb-2">Security Hash</p>
                    <p className="text-[10px] font-mono text-design-teal/40 uppercase tracking-tight">Z-7700-X-GLOBAL-HUB-ALPHA</p>
                </div>
                <div className="text-right">
                    <p className="text-[8px] font-black tracking-widest text-white/10 uppercase mb-2">Status</p>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Precision Verified</p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
