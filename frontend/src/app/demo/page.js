"use client";
import { useEffect } from "react";

export default function Page() {
  const defaultMinValue = 300;
  const defaultMaxValue = 300;
  const maxValue = 3000;
  const minValue = 0;

  // useEffect(() => {
  //   // Execute JavaScript logic for the slider
  //   const slider = document.getElementById("myRange");
  //   const output = document.getElementById("demo");
  //   const valueShower = document.getElementById("value");
  //   output.innerHTML = slider.value;
  //   valueShower.style.transform = `translateX(${slider.value / 30}%)`;

  //   slider.oninput = function () {
  //     output.innerHTML = this.value;
  //     valueShower.style.transform = `translateX(${this.value / 30}%)`;
  //   };
  // }, []); // Ensure useEffect runs only once after initial render

  useEffect(() => {
    const rangeInputs = document.querySelectorAll(".slider");
    const progresses = document.querySelector(".progress");
    progresses.style.left = (rangeInputs[0].value / rangeInputs[0].max) * 100 + "%";
    progresses.style.right = 100 - (rangeInputs[1].value / rangeInputs[1].max) * 100 + "%";

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
          progresses.style.right =
            100 - (maxVal / rangeInputs[1].max) * 100 + "%";
        }
      });
    });
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center font-sans">
        <div className="w-96 h-64 bg-gray-200 pt-10">
          {/* <div className="">
            <div className="w-full px-2.5">
              <div id="value" className={`w-full relative translate-x-[${defaultMinValue/maxValue*100}%]`}>
                <div className="w-0 -translate-y-1.5">
                  <div className="relative flex justify-center items-center -translate-y-0.5">
                    <div className="w-2 h-2 bg-[#ff3860] absolute rotate-45 translate-y-2"></div>
                    <div className="w-auto h-5 bg-[#ff3860] absolute px-1.5 rounded-md flex items-center text-sm text-white">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <input
                type="range"
                min={minValue}
                max={maxValue}
                defaultValue={defaultMinValue}
                className="slider"
                id="myRange"
                step={10}
              />
            </div>
          </div> */}

          <div className="relative">
            <div className="absolute w-full h-1 rounded-full bg-slate-500">
              <div className="progress absolute h-1 rounded-full bg-[#ff3860] left-[10%] right-[10%]"></div>
            </div>

            <input
              id="min-range-input"
              className="w-full h-1 absolute slider"
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              step={1}
            />
            <input
              id="max-range-input"
              className="w-full h-1 absolute slider"
              type="range"
              min="0"
              max="100"
              defaultValue="60"
              step={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
