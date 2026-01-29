import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            if (!cursor || !follower) return;
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 3,
                backgroundColor: 'rgba(154, 200, 205, 0.3)', // design-teal
                borderWidth: 0,
                duration: 0.3
            });
        };

        const handleUnhover = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                borderWidth: 1,
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Targeted interactive elements
        const links = document.querySelectorAll('a, button, .group, .cursor-pointer');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHover);
            link.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHover);
                link.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-black/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-100 ease-out"
            />
        </>
    );
};

export default CustomCursor;
