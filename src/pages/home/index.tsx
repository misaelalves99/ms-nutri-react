// src/pages/home/index.tsx

import React from "react";
import Hero from "../../components/Hero";
import Vitaminas from "../../components/Vitaminas";
import SaisMinerais from "../../components/SaisMinerais";
import Aminoacidos from "../../components/Aminoacidos";

const Home: React.FC = () => {
  return (
    <section>
      <Hero />
      <Vitaminas />
      <SaisMinerais />
      <Aminoacidos />
    </section>
  );
};

export default Home;
