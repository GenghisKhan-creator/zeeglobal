import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('entering');
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransitionStage('exiting');
        }
    }, [location, displayLocation]);

    useEffect(() => {
        const overlay = overlayRef.current;
        const content = contentRef.current;

        if (transitionStage === 'exiting') {
            // Screen turns black/teal
            const tl = gsap.timeline({
                onComplete: () => {
                    setDisplayLocation(location);
                    setTransitionStage('entering');
                    window.scrollTo(0, 0);
                }
            });

            tl.to(overlay, {
                x: '0%',
                duration: 0.8,
                ease: 'power4.inOut'
            })
                .to(content, {
                    opacity: 0,
                    duration: 0.4
                }, "-=0.4");
        }

        if (transitionStage === 'entering') {
            // Screen clears
            const tl = gsap.timeline();

            tl.to(overlay, {
                x: '100%',
                duration: 0.8,
                ease: 'power4.inOut',
                delay: 0.2
            })
                .fromTo(content,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                    "-=0.4"
                )
                .set(overlay, { x: '-100%' }); // Reset for next time
        }
    }, [transitionStage]);

    return (
        <div className="relative min-h-screen">
            {/* The Cinematic Wipe Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black z-[99999] pointer-events-none transform -translate-x-full border-r-[1px] border-design-teal/30"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-1.5 h-1.5 bg-design-teal rounded-full animate-ping opacity-50"></div>
                </div>
            </div>

            {/* The Actual Page Content */}
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default PageTransition;
