"use client"
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Execute JavaScript logic for the slider
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  }, []); // Ensure useEffect runs only once after initial render

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-64 bg-gray-200">
          <div className="slidecontainer">
            <div className="slider-container"></div>
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="myRange"
            />
            <p>
              Value: <span id="demo"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
