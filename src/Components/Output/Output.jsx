import React from "react";

const Output = ({ bill, tip }) => {
  return (
    <div>
      <h3>
        <p>
          You pay {bill + tip} (${bill} + ${tip} tip)
        </p>
      </h3>
    </div>
  );
};

export default Output;
