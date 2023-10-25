import "./counter.css";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Counter Page</h4>
      <div className="wrapper">
        <CustomButton
          buttonTitle="Minus"
          buttonType="danger"
          onClick={() => setCount(count - 1)}
        />
        <p
          style={{
            color: count < 0 ? "red" : count > 0 ? "black" : "orange",
          }}
        >
          {count}
        </p>
        <CustomButton
          buttonTitle="Plus"
          buttonType="success"
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};
export default Counter;
