import combineReducers from "./combineReducers";

import leftReducer from "./leftReducer";
import rightReducer from "./rightReducer";

/** without combineReducers */
// const rootReducer = (state, action) => ({
//   left: leftReducer(state.left, action),
//   right: rightReducer(state.right, action)
// });

/** using combineReducers */
const rootReducer = combineReducers({
  left: leftReducer,
  right: rightReducer
});

export default rootReducer;
