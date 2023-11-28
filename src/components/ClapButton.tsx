"use client";

import { useState } from "react";

export default function ClapButton() {
  const [claps, setClaps] = useState(0);

  const handleClap = () => {
    setClaps((claps) => claps + 1);
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="font-bold">{claps} Claps</span>
      <button
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClap}
      >
        Clap
      </button>
    </div>
  );
}
