import React from 'react';

const categories = [
    "Air Max",
    "Presto",
    "Huarache",
    "Dunk",
    "Monarch",
    "P-6000",
    "Roshe",
    "Cortez",
    "Pegasus",
    "Blazer",
];

// Her kategoriye farklı renk
const bgColors = [
    "#F87171", // kırmızı
    "#FBBF24", // sarı
    "#34D399", // yeşil
    "#60A5FA", // mavi
    "#A78BFA", // mor
    "#F472B6", // pembe
    "#FCD34D", // açık sarı
    "#22D3EE", // turkuaz
    "#F87171", // kırmızı tekrar
    "#A3E635", // lime
];

const Hero = () => {
    const liClass =
        "flex items-center justify-center border rounded-3xl text-sm min-w-[4.5rem] h-10 whitespace-nowrap border-1 border-gray-200";

    return (
        <div>
            <h1 className='font-bold text-xl px-4 py-2'>Shoes</h1>

            <ul className="flex items-center gap-4 overflow-x-auto overflow-y-hidden p-3" style={{ scrollbarWidth: "none" }}>
                {categories.map((category, index) => (
                    <li
                        key={category}
                        className={`${liClass} ${index === 0 ? "bg-black text-white" : "bg-gray-50 text-black"}`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;
