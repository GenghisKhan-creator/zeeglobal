import React from 'react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

const Footer = () => {
    return (
        <footer className="bg-neutral-100 py-24 md:py-32 px-12 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center mb-16">
                    <BrandMark className="w-16 h-16 md:w-24 md:h-24 mb-8" color="black" />
                    <h2 className="condensed-text text-6xl md:text-8xl tracking-tighter leading-none mb-4">ZEEGLOBAL.</h2>
                    <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] text-black/20 mt-2">Authority • Integrity • Sovereign</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24">
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/industrial">Industrial</FooterLink>
                    <FooterLink to="/logistics">Logistics</FooterLink>
                    <FooterLink to="/lifestyle">Lifestyle</FooterLink>
                    <FooterLink to="/investors">Investors</FooterLink>
                    <FooterLink to="/terms">Compliance</FooterLink>
                </div>

                <div className="w-full pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black uppercase tracking-widest text-black/20">
                    <div className="text-center md:text-left space-y-2">
                        <p>© 2026 ZEEGLOBAL COMPANY LIMITED. ALL RIGHTS RESERVED.</p>
                        <p>HEADQUARTERS: INT'L TRADE FAIR CENTER, LABADI, ACCRA, GHANA.</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-black transition-colors">Instagram</a>
                        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-black transition-colors">X (Twitter)</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <Link to={to} className="condensed-text text-3xl text-black/40 hover:text-black transition-all duration-500">
        {children}.
    </Link>
);

export default Footer;
