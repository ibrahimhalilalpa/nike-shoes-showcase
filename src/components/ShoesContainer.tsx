import ShoesCard from "./ShoesCard";

import AlphaSavage from "../assets/alpha-savage.png";
import AirMax97 from "../assets/air-max-97.png";
import KD13EP from "../assets/KD13-EP.png";
import Monarch from "../assets/Monarch.png";
import P6000 from "../assets/P-6000.png";


const categories = [
    { name: "Alpha Savage", bg: "#e34c4d", titleColor: "#fffbec", priceColor: "#ffaca3", priceValue: "8,895", imageUrl: AlphaSavage },
    { name: "Air Max 97", bg: "#fbba60", titleColor: "#2b1c09", priceColor: "#a96c33", priceValue: "11,897", imageUrl: AirMax97 },
    { name: "KD13 EP", bg: "#4d80f4", titleColor: "#f8ffff", priceColor: "#afceff", priceValue: "12,995", imageUrl: KD13EP },
    { name: "Monarch", bg: "#a78bfa", titleColor: "#ffffff", priceColor: "#ffffff", priceValue: "8,499", imageUrl: Monarch },
    { name: "P-6000", bg: "#f472b6", titleColor: "#ffffff", priceColor: "#ffffff", priceValue: "11,899", imageUrl: P6000 },
    { name: "Dunk", bg: "#589b98", titleColor: "#ffffff", priceColor: "#a5c9ff", priceValue: "7,999", imageUrl: AlphaSavage },
    { name: "Roshe", bg: "#fcd34d", titleColor: "#000000", priceColor: "#000000", priceValue: "10,995", imageUrl: AlphaSavage },
    { name: "Cortez", bg: "#22d3ee", titleColor: "#000000", priceColor: "#000000", priceValue: "6,990", imageUrl: AlphaSavage },
    { name: "Pegasus", bg: "#f87171", titleColor: "#ffffff", priceColor: "#ffffff", priceValue: "11,500", imageUrl: AlphaSavage },
    { name: "Blazer", bg: "#a3e635", titleColor: "#000000", priceColor: "#000000", priceValue: "10,897", imageUrl: AlphaSavage },
];

const ShoesContainer = () => {
    return (
        <div className="flex flex-col gap-4 ">
            <div
                className="flex items-center gap-16 overflow-x-auto p-4"
                style={{ scrollbarWidth: "none" }}
            >
                {categories.map((cat) => (
                    <ShoesCard
                        key={cat.name}
                        name={cat.name}
                        bgColor={cat.bg}
                        titleColor={cat.titleColor}
                        priceColor={cat.priceColor}
                        priceValue={cat.priceValue}
                        imageUrl={cat.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoesContainer;
