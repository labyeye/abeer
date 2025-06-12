import React from "react";
import Wallledp3Banner from "./Wallledp3Banner";
import Wallledp3Gallery from "./Wallledp3Gallery";

const Wallledp3Page = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <Wallledp3Banner />
        <Wallledp3Gallery />
      </main>
    </div>
  );
};

export default Wallledp3Page;