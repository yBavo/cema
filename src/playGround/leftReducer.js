import { LEFT_CLICKED } from "./actionTypes";

const leftReducer = (leftState, action) => {
  switch (action.type) {
    case LEFT_CLICKED:
      return leftState + 1;
    default:
      return leftState;
  }
};

export default leftReducer;
