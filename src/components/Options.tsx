import React from 'react'


import UndoverReactPresto from "../assets/UndoverReactPresto.png";
import AirZoomPegasus37 from "../assets/AirZoomPegasus37.png";
import DunkLowRetro from "../assets/DunkLowRetro.png";
import NikeBlazerMid77 from "../assets/DunkLowRetro.png";

import NikeV5RNR from "../assets/NikeV5RNR.png";

import NikePegasus41 from "../assets/NikePegasus41.png";


import OptionsCard from './OptionsCard';



const categories = [
    {
        id: "1",
        title: "Undover React Presto",
        price: "12,797",
        imageUrl: UndoverReactPresto,
    },
    {
        id: "2",
        title: "Air Zoom Pegasus 37",
        price: "9,995",
        imageUrl: AirZoomPegasus37,
    },
    {
        id: "3",
        title: "Nike Dunk Low Retro",
        price: "9,250",
        imageUrl: DunkLowRetro,
    },
    {
        id: "4",
        title: "Nike Blazer Mid '77",
        price: "7,999",
        imageUrl: NikeBlazerMid77,
    },
    {
        id: "5",
        title: "Nike V5 RNR",
        price: "11,299",
        imageUrl: NikeV5RNR,
    },
    {
        id: "6",
        title: "Nike Pegasus 41",
        price: "10,995",
        imageUrl: NikePegasus41,
    },

];

const Options = () => {
    return (
        <div className='p-4'>
            <h1 className='text-md text-slate-300'>243 OPTIONS</h1>
            <div
                className="flex flex-col justify-start overflow-y-auto h-60"
                style={{ scrollbarWidth: "none" }}
            >
                {categories.map((cat) => (
                    <OptionsCard
                        key={cat.id}
                        title={cat.title}
                        price={cat.price}
                        imageUrl={cat.imageUrl} id={cat.id} />
                ))}
            </div>
        </div>
    )
}

export default Options