import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [{ option: "TAMIM" }, { option: "LITTON" }, { option: "SHANTO" }, { option: "SHAKIB" }, { option: "HRIDOY" }];

export const Home = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };
    return (
        <>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
            <button onClick={handleSpinClick}>SPIN</button>
        </>
    );
};
