import React from "react";

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>
        How much was the bill?
        <input
          type="text"
          value={bill}
          placeholder="0"
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default BillInput;
