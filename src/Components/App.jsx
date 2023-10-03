import { useState } from "react";

import TipCalcuLator from "./TipCalcuLator/TipCalcuLator";

function App() {
  return (
    <div>
      <TipCalcuLator />
      {/* <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage item={percent} bill={bill}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage item={percent} bill={bill}>
        How did you friends like the service?
      </SelectPercentage>
      <Output />
      <Reset /> */}
      {/* {bill.length === 0 ? (
        ""
      ) : (
        <div>
          <h1>
            You pay ${bill} (${bill} + ${percent}tip)
          </h1>
          <button onClick={handelReset}>Reset</button>
        </div>
      )} */}
    </div>
  );
}

export default App;
