import React, { useState } from "react";
import BillInput from "../BillInput/BillInput";
import SelectPercentage from "../SelectPercentage/SelectPercentage";
import Output from "../Output/Output";
import Reset from "../Reset/Reset";

const TipCalcuLator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  }

  return (
    <div>
    
    </div>
  );
};

export default TipCalcuLator;
