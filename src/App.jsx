import React, { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("text-black");

  const colors = [
    {
      id: 1,
      label: "bleu",
      fond: " bg-blue-500 size-6 rounded-full",
      colorClass: "text-blue-500",
    },
    {
      id: 2,
      label: "green",
      fond: " bg-green-500 size-6 rounded-full",
      colorClass: "text-green-500",
    },
    {
      id: 3,
      label: "yellow",
      fond: " bg-yellow-500 size-6 rounded-full",
      colorClass: "text-yellow-700",
    },
    {
      id: 4,
      label: "violet",
      fond: " bg-violet-500 size-6 rounded-full",
      colorClass: "text-violet-700",
    },
    {
      id: 5,
      label: "rose",
      fond: " bg-rose-500 size-6 rounded-full",
      colorClass: "text-rose-700",
    },
    {
      id: 6,
      label: "lime",
      fond: "bg-black size-6 rounded-full",
      colorClass: "text-black",
    },
  ];

  const handlecolorchange = (colorClass) => {
    setSelectedColor(colorClass);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" ">
        <h1 className="text-2xl font-black rounded-tl-xl rounded-br-xl text-black/70 p-6 bg-gradient-to-r from-green-400 via-blue-700 to-red-500">
          Changeons un peu de couleur
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center">
          <div className={`mb-4 text-xl font-bold ${selectedColor}`}>
            Test: {selectedColor}
          </div>
          {/* <img
            src="/lamp-fill.svg"
            alt="lampe"
            className={`size-20 ${selectedColor}`}
          /> */}
          <div className="mt-10 space-x-8">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={color.fond}
                  onClick={() => handlecolorchange(color.colorClass)}
                  aria-label={color.label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
