import React from "react";
import Buttons from "./feature/Buttons";

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen bg-gray-600 font-mono">
      <div class="text-center bg-gray-300 rounded p-4 shadow-lg">
        <h2>TIK - TIC - TOE</h2>
        <Buttons />
      </div>
    </section>
  );
}
