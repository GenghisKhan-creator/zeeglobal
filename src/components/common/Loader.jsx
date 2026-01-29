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

            tl.from('.loader-text', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out'
            })
                .to('.loader-progress-bar', {
                    width: '100%',
                    duration: 2.5,
                    ease: 'expo.inOut'
                }, 0)
                .to('.loader-text', {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: 'power4.in',
                    delay: 0.5
                })
                .to('.loader-container', {
                    y: '-100%',
                    duration: 1.2,
                    ease: 'expo.inOut'
                });
        });

        return () => {
            clearInterval(countInterval);
            ctx.revert();
        };
    }, [onComplete]);

    return (
        <div className="loader-container fixed inset-0 bg-black z-[99999] flex flex-col justify-center px-12 md:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
                <div className="space-y-4">
                    <div className="loader-text inline-flex items-center gap-2 text-[10px] font-black tracking-[0.6em] text-neutral-500 uppercase">
                        Sovereign Infrastructure
                    </div>
                    <h1 className="loader-text condensed-text text-6xl md:text-[8vw] text-white leading-none">
                        ZEE<span className="text-design-teal">GLOBAL.</span>
                    </h1>
                </div>
                <div className="loader-text text-right hidden md:block">
                    <p className="text-[10px] font-black tracking-widest text-neutral-500 uppercase mb-2">Systems Status</p>
                    <p className="condensed-text text-4xl text-design-teal uppercase tracking-tighter italic">Initializing Hub...</p>
                </div>
            </div>

            <div className="relative w-full h-[1px] bg-neutral-900 overflow-hidden">
                <div className="loader-progress-bar absolute top-0 left-0 h-full w-0 bg-design-teal/50 shadow-[0_0_20px_rgba(154,200,205,0.4)]"></div>
            </div>

            <div className="mt-8 flex justify-between items-center loader-text">
                <div className="text-[10px] font-black tracking-widest text-neutral-600 uppercase">
                    Encryption: Secure • Network: Active
                </div>
                <div className="condensed-text text-5xl text-white">
                    {counter}%
                </div>
            </div>

            <div className="absolute top-12 right-12 flex gap-1 items-center loader-text">
                <div className="w-1.5 h-1.5 bg-design-teal rounded-full animate-pulse"></div>
                <span className="text-[8px] font-black tracking-widest text-neutral-400 uppercase">Gateway Node: Accra Hub</span>
            </div>
        </div>
    );
};

export default Loader;
