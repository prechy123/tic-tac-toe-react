import React from "react";
import Buttons from "./feature/Buttons";

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h2>TIK - TIC - TOE</h2>
        <Buttons />
      </div>
    </section>
  );
}
