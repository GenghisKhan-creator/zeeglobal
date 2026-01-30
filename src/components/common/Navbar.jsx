import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';
import BrandMark from './BrandMark';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to('.mobile-menu', {
                clipPath: 'circle(150% at 100% 0%)',
                duration: 1,
                ease: 'power4.inOut'
            });
            gsap.from('.mobile-menu-link', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                delay: 0.4,
                duration: 0.8,
                ease: 'power3.out'
            });
        } else {
            document.body.style.overflow = 'auto';
            gsap.to('.mobile-menu', {
                clipPath: 'circle(0% at 100% 0%)',
                duration: 0.8,
                ease: 'power4.inOut'
            });
        }
    }, [isOpen]);

    // Close menu on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav className="absolute top-6 md:top-10 left-0 w-full z-[120] px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <div className="pill-nav">
                        <Link to="/" className="flex items-center gap-2 mr-4 md:mr-6 scale-90 md:scale-100">
                            <BrandMark className="w-8 h-8 md:w-10 md:h-10" color="black" />
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            <NavLink to="/" active={isActive('/')}>Home</NavLink>
                            <NavLink to="/industrial" active={isActive('/industrial')}>Industrial</NavLink>
                            <NavLink to="/logistics" active={isActive('/logistics')}>Logistics</NavLink>
                            <NavLink to="/lifestyle" active={isActive('/lifestyle')}>Lifestyle</NavLink>
                            <NavLink to="/investors" active={isActive('/investors')}>Investors</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Magnetic>
                        <div className="hidden lg:flex items-center gap-2 font-black text-xs tracking-tight text-neutral-800 cursor-pointer uppercase">
                            <PhoneCall size={16} />
                            <span>Book a call</span>
                        </div>
                    </Magnetic>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden w-12 h-12 rounded-full flex items-center justify-center shadow-2xl z-[130] transition-all duration-500 bg-black text-white hover:scale-110`}
                    >
                        {isOpen ? <X size={20} className="rotate-0" /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu - Restored to Neutral Color */}
            <div className="mobile-menu fixed inset-0 bg-neutral-100 z-[110] flex flex-col justify-center px-10 md:hidden" style={{ clipPath: 'circle(0% at 100% 0%)' }}>
                <div className="flex flex-col gap-6 mt-40">
                    <MobileNavLink to="/" label="Home" active={isActive('/')} />
                    <MobileNavLink to="/industrial" label="Industrial" active={isActive('/industrial')} />
                    <MobileNavLink to="/logistics" label="Logistics" active={isActive('/logistics')} />
                    <MobileNavLink to="/lifestyle" label="Lifestyle" active={isActive('/lifestyle')} />
                    <MobileNavLink to="/investors" label="Investors" active={isActive('/investors')} />
                </div>

                <div className="mt-15 border-t border-black/5 pt-10 mb-20">
                    <p className="text-[10px] font-black tracking-widest text-black/20 uppercase mb-4">Capital Management</p>
                    <a href="mailto:invest@zeeglobal.com" className="text-xl font-bold uppercase tracking-tighter flex items-center gap-2 text-black">
                        invest@zeeglobal.com <ArrowUpRight size={18} className="text-design-teal" />
                    </a>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ to, children, active }) => (
    <Link
        to={to}
        className={`pill-link ${active ? 'pill-link-active' : 'hover:bg-black/5'}`}
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, label, active }) => (
    <div className="mobile-menu-link overflow-hidden">
        <Link
            to={to}
            className={`condensed-text text-6xl block transition-all duration-500 ${active ? 'text-black' : 'text-black/20 hover:text-black'}`}
        >
            {label}.
        </Link>
    </div>
);

export default Navbar;
