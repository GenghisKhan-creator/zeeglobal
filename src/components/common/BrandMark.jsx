import React from 'react';

const BrandMark = ({ className = "w-8 h-8", color = "currentColor" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Hexagon / Industrial Shield */}
            <path
                d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            {/* Internal Geometric Z */}
            <path
                d="M30 35H70L30 65H70"
                stroke={color}
                strokeWidth="8"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
            {/* Core Authority Node */}
            <circle cx="50" cy="50" r="3" fill="#9AC8CD" className="animate-pulse" />
        </svg>
    );
};

export default BrandMark;
