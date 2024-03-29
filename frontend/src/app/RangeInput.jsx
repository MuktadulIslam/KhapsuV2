"use client";
import { useEffect } from "react";
import { Noto_Sans_Zanabazar_Square } from "next/font/google";

const noto_Sans_Zanabazar_Square = Noto_Sans_Zanabazar_Square({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

export default function RangeInput({ maxRangeValue, minRangeValue}) {
    const defaultMinValue = minRangeValue.current  || 200;
    const defaultMaxValue = maxRangeValue.current || 2000;
    const maxValue = 3000;
    const minValue = 0;

    useEffect(() => {
        const rangeInputs = document.querySelectorAll(".slider");
        const progresses = document.querySelector(".progress");
        const minvalue_shower_div = document.getElementById("minvalue-shower-div");
        const minvalue_shower_span = document.getElementById("minvalue-shower-span");
        const maxvalue_shower_div = document.getElementById("maxvalue-shower-div");
        const maxvalue_shower_span = document.getElementById("maxvalue-shower-span");

        rangeInputs.forEach((input) => {
            input.addEventListener("input", (event) => {
                let minVal = rangeInputs[0].value;
                let maxVal = rangeInputs[1].value;

                if (maxVal - minVal < 0) {
                    if (event.target.id === "min-range-input") {
                        rangeInputs[0].value = maxVal;
                    } else {
                        rangeInputs[1].value = minVal;
                    }
                } else {
                    progresses.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
                    progresses.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";

                    minvalue_shower_span.innerHTML = rangeInputs[0].value;
                    minvalue_shower_div.style.transform = `translateX(${(minVal / rangeInputs[0].max) * 100}%)`;

                    maxvalue_shower_span.innerHTML = rangeInputs[1].value;
                    maxvalue_shower_div.style.transform = `translateX(${(maxVal / rangeInputs[1].max) * 100}%)`;

                    minRangeValue.current = rangeInputs[0].value
                    maxRangeValue.current = rangeInputs[1].value
                }
            });
        });
    }, []);

    return (<>
        <div className={`${noto_Sans_Zanabazar_Square.className} font-sans h-auto w-full`}>
            <div className="relative">
                <div className="absolute w-full h-1 rounded-full bg-slate-300">
                    <div className={`progress absolute h-1 rounded-full bg-[#ff3860]`} style={{
                        left: `${defaultMinValue / maxValue * 100}%`,
                        right: `${100 - defaultMaxValue / maxValue * 100}%`
                    }}></div>
                </div>

                {/* For Showing the min value */}
                <div className="w-full px-3">
                    <div id="minvalue-shower-div" className={`w-full relative`} style={{ transform: `translateX(${(defaultMinValue / maxValue) * 100}%)` }}>
                        <div className="w-0 -translate-y-1.5">
                            <div className="relative flex justify-center items-center -translate-y-5">
                                <div className="w-2 h-2 bg-[#ff3860] absolute rotate-45 translate-y-2"></div>
                                <div className="w-auto h-5 bg-[#ff3860] absolute px-1.5 rounded-md flex items-center text-sm text-white">
                                    <span id="minvalue-shower-span">{defaultMinValue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* For Showing the max value */}
                <div className="w-full px-3">
                    <div id="maxvalue-shower-div" className={`w-full relative`} style={{ transform: `translateX(${(defaultMaxValue / maxValue) * 100}%)` }}>
                        <div className="w-0 -translate-y-1.5">
                            <div className="relative flex justify-center items-center -translate-y-5">
                                <div className="w-2 h-2 bg-[#ff3860] absolute rotate-45 translate-y-2"></div>
                                <div className="w-auto h-5 bg-[#ff3860] absolute px-1.5 rounded-md flex items-center text-sm text-white">
                                    <span id="maxvalue-shower-span">{defaultMaxValue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <input
                    id="min-range-input"
                    className="w-full h-1 absolute slider"
                    type="range"
                    min={minValue}
                    max={maxValue}
                    defaultValue={defaultMinValue}
                    step={50}
                />
                <input
                    id="max-range-input"
                    className="w-full h-1 absolute slider"
                    type="range"
                    min={minValue}
                    max={maxValue}
                    defaultValue={defaultMaxValue}
                    step={50}
                />
            </div>
        </div>
    </>)
}