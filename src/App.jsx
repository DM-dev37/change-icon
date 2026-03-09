import React from "react";

function App() {
  const colors = [
    {
      id: 1,
      label: "bleu",
      fond: "text-blue-500 bg-blue-500 size-6 rounded-full",
      colorClass: "text-blue-500",
    },
    {
      id: 2,
      label: "green",
      fond: "text-green-500 bg-green-500 size-6 rounded-full",
      colorClass: "text-green-500",
    },
    {
      id: 3,
      label: "yellow",
      fond: "text-yellow-500 bg-yellow-500 size-6 rounded-full",
      colorClass: "text-yellow-500",
    },
    {
      id: 4,
      label: "violet",
      fond: "text-violet-600 bg-violet-500 size-6 rounded-full",
      colorClass: "text-violet-500",
    },
    {
      id: 5,
      label: "rose",
      fond: "text-rose-900 bg-rose-500 size-6 rounded-full",
      colorClass: "text-rose-500",
    },
    {
      id: 6,
      label: "lime",
      fond: "bg-black size-6 rounded-full",
      colorClass: "text-black",
    },
  ];
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" ">
        <h1 className="text-2xl font-black rounded-tl-xl rounded-br-xl text-black/70 p-6 bg-gradient-to-r from-green-400 via-blue-700 to-red-500">
          Changeons un peu de couleur
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center">
          <img
            src="/public/lamp-fill.svg"
            alt="lampe"
            className="size-20 appearance-none forced-color-adjust-auto"
          />
          <div className="mt-10 space-x-8">
            {colors.map((color, index) => {
              return <button key={index} className={color.fond} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
