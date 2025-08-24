import { IndianRupee } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
    name: string;
    bgColor: string;
    titleColor: string;
    priceColor: string;
    priceValue: string;
    imageUrl?: string;
};

const ShoesCard = ({ name, bgColor, titleColor, priceColor, priceValue, imageUrl }: Props) => {
    const [isActive, setIsActive] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsActive(entry.isIntersecting);
                });
            },
            {
                root: document.querySelector("#shoes-scroll"), // scroll alanı id’si
                threshold: 0.7, // %70 görünürse aktif say
            }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="flex h-75 min-w-[250px] flex-col justify-between gap-4 rounded-2xl p-4 relative"
            style={{ backgroundColor: bgColor }}
        >
            {/* Yazılar */}
            <div className="flex flex-col gap-0 w-50 ">
                <span className="font-semibold text-xl" style={{ color: titleColor }}>{name}</span>
                <div className="flex items-center" style={{ color: priceColor }}>
                    <IndianRupee size={16} />
                    <span className="text-md" >{priceValue}</span>
                </div>
            </div>

            <div className="absolute w-[0.5px] bottom-[25px] h-[190px] bg-[#c7c7c756]"></div>
            {/* Ürün görseli */}
            <div className="flex justify-between items-center relative">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={name}
                        className={`absolute -right-20 bottom-[-25px] min-h-[240px] min-w-[300px] object-cover drop-shadow-xl transition-                               transform duration-500 ease-in-out
              ${isActive ? "rotate-[-15deg]" : "rotate-[-45deg]"}`}
                    />
                )}
            </div>
        </div>
    );
};

export default ShoesCard;
