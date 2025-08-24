import { IndianRupee } from 'lucide-react';
import React from 'react'

type Props = {

    id: string,
    title: string,
    price: string,
    imageUrl: string,
};


const OptionsCard = ({ id, title, price, imageUrl }: Props) => {

    return (
        <div className='flex justify-between' >

            {/* Ürün görseli */}
            <div className="flex  items-center relative">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-[110px] w-[145px] object-cover drop-shadow-xl p-2 w-40 "
                    />
                )}
            </div>
            {/* Yazılar */}
            <div className="flex flex-col justify-center items-start  w-60">
                {/* title */}
                <div className="flex items-center ">
                    <span className="font-semibold text-lg" >{title}</span>
                </div>
                {/* price */}
                <div className="flex items-center text-[#ecceca]">
                    <IndianRupee size={16} />
                    <span className="text-md ">{price}</span>
                </div>
            </div>
        </div>

    );
};

export default OptionsCard