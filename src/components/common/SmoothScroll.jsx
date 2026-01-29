import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            syncTouch: true
        });

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        const scrollFn = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(scrollFn);
        gsap.ticker.lagSmoothing(0);

        // Ensure ScrollTrigger refreshes when the layout changes
        const resizeDebounce = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(resizeDebounce);
            lenis.destroy();
            gsap.ticker.remove(scrollFn);
        };
    }, []);

    return null;
};

export default SmoothScroll;
