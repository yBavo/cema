import { RIGHT_CLICKED } from "./actionTypes";

const rightReducer = (rightState, action) => {
  switch (action.type) {
    case RIGHT_CLICKED:
      return rightState + 1;
    default:
      return rightState;
  }
};

export default rightReducer;
