import React from "react";

function App() {

  const colors= [
    {
      id: 1,
      label: "bleu",
      fond: "text-blue-500 bg-blue-200",

    },
    {
      id: 2,
      label: "green",
      fond: "text-green-500 bg-green-200",

    },
    {
      id: 3,
      label: "yellow",
      fond: "text-yellow-500 bg-yellow-200",

    },
    {
      id: 4,
      label: "violet",
      fond: "text-violet-600 bg-violet-200",

    },
    {
      id: 5,
      label: "rose",
      fond: "text-rose-500 bg-rose-200",

    },
    {
      id: 6,
      label: "lime",
      fond: "text-lime-700 bg-lime-200",

    },
  ]
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" ">
        <h1 className="text-2xl font-black rounded-tl-xl rounded-br-xl text-black/70 p-6 bg-gradient-to-r from-green-400 via-blue-700 to-red-500">
          Changeons un peu de couleur
        </h1>
        <div className="mt-10 flex justify-center">
          <img src="/public/lamp-fill.svg" alt="lampe" className="size-20" />
          <div>
            {colors.map((color, index)) => (
              return(
                <input 
                key={index}
                type="radio"
                className="size-3"
                />
              )
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
