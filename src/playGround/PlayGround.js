import React, { useReducer } from 'react'

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

import rootReducer from "./rootReducer";
import Store from './context/Store';

const initialState = {
  left: 0,
  right: 0
};

const PlayGround = () => {
  const store = useReducer(rootReducer, initialState);
  
  console.log(store)
  return (
    <Store.Provider value={store}>
      <LeftButton />
      <RightButton />
    </Store.Provider>
  );
}

export default PlayGround
