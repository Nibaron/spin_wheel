import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
    { option: "TAMIM" },
    { option: "LITTON" },
    { option: "SHANTO" },
    { option: "SHAKIB" },
    { option: "HRIDOY" },
];

export const Home = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [winner, setWinner] = useState("None");

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setWinner(data[newPrizeNumber].option);
        }
    };

    return (
        <main>
            <section style={{ marginTop: "150px" }}>
                
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                        console.log(winner);
                    }}
                />
                <button
                    style={{ marginTop: "15px", marginLeft: "160px" }}
                    type="button"
                    className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-xl text-sm px-12 py-3 mr-2 mb-2"
                    onClick={handleSpinClick}
                >
                    Spin it !
                </button>
            </section>

            <section style={{textAlign:"center"}}>
                {!mustSpin && <p className="text-3xl font-bold">The Winner is : {winner}</p>}
            </section>
        </main>
    );
};
