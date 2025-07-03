import React from "react";
import FeaturesText from "../sub/FeaturesText";
import FeaturesConten from "../sub/FeaturesConten";

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-30 z-[20]"
    >
        <FeaturesText/> <br />
        <FeaturesConten/>
    </section>
  );
};

export default Features;
