import { Canvas } from "@react-three/fiber";
import React from "react";
import "./styles.css";
import { Environment, OrbitControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -transalte-x-1/2 ">
        {[
          "iPhone",
          "iPad",
          "Services", 
          "IOS", 
          "mac"
        ].map(e => (
           <a herf="" className="text-white font-[400] text-sm capitalize">
            {e}
           </a>
           ))}
      </div>
      <div> className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 "
        <h3 className="masked text-7xl tracking-tighter font-[700] ">macbook pro</h3>
        <h5> Oh so pro !</h5>
        <p className = "text-center w-3/4" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil nostrum consequatur error explicabo, modi delectus hic facere asperiores quaerat officiis ipsum voluptates perspiciatis. Aliquid dolore sit dolores accusamus nesciunt!</p>
      </div>
      <Canvas camera={{fov: 20, position: [0, -10, 220]}}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
          ]}
        />
        <ScrollContoles pages = {3}>
          <MacContainer/>
        </ScrollContoles>
      </Canvas>
    </div>
  );
};

export default App;