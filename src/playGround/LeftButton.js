import React, { useContext } from "react";
import { LEFT_CLICKED } from "./actionTypes";
import Store from "./context/Store";

const leftClickAction = { type: LEFT_CLICKED };

const LeftButton = () => {
  const [, dispatch] = useContext(Store);
  
  return (
    <button onClick={() => dispatch(leftClickAction)}>
      Left: left
    </button>
  );
};

export default LeftButton;