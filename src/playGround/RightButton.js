import React, { useContext } from "react";
import { RIGHT_CLICKED } from "./actionTypes";
import Store from "./context/Store";

const rightClickAction = { type: RIGHT_CLICKED };

const RightButton = () => {
  const [state, dispatch] = useContext(Store);
  return (
    <button onClick={() => dispatch(rightClickAction)}>
      Right: {state.right}
    </button>
  );
};

export default RightButton;
