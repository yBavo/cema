import combineReducers from "./combinedReducers";
import departements from './departements'
import lists from './lists'
import proclaimers from './proclaimers'
import schedules from './schedules'


/** without combineReducers */
// const rootReducer = (state, action) => ({
//   left: leftReducer(state.left, action),
//   right: rightReducer(state.right, action)
// });

/** using combineReducers */
const reducer = combineReducers({
  departements,
  lists,
  proclaimers,
  schedules
});

export default reducer;