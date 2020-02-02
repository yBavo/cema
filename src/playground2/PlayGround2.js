import React, {useState, useReducer, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import uuid from 'react-uuid'
import Header from './components/Header';
import Dasboard from './components/Dasboard';
//import useUsers from './hooks/useUsers'
import Store from './context/Store';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import combineReducers from '../reducers/combinedReducers';

const usersList = [
  {
    id: uuid(),
    name: {
      first:'Bob',
      last:'Bobette'
    },
    lists: ['Accueil', 'Micro']
  },
  {
    id: uuid(),
    name: {
      first:'Alphonso',
      last:'Alomar'
    },
    lists: ['Micro']
  }
]

const listsList = [
  {
    id: uuid(),
    nom: 'Accueil'
  },
  {
    id: uuid(),
    nom: 'Micro'
  }
]

const userReducer = (state=[], action) => {
  console.log('REDUCER', action)
  
  switch (action.type) {

    case 'ADD_USER':
      return [
        ...state, {
          id: uuid(),
          name: action.name
        }
      ]

    case 'GET_USERS':
      return action.users

    default:
      return state
  }
}

const listReducer = (state, action) => {
  console.log('LIST_REDUCER', action)
  
  switch (action.type) {

    case 'ADD_LIST':
      return [
        ...state, {
          id: uuid(),
          nom: action.nom
        }
      ]

    case 'GET_LISTS':
      return state

    default:
      return state
  }
}

const reducer = combineReducers({
  proclaimers: userReducer,
  lists: listReducer
})

const initialState = {
  proclaimers: [],
  lists: []
}

const PlayGround2 = () => {
  const store = useReducer(reducer, initialState)
  useEffect(() => {
    store[1]({
      type: 'ADD_USER',
      name: {
        first:'Bob',
        last:'Bobette'
      },
      lists: ['Accueil', 'Micro']
    })
    store[1]({
      type: 'ADD_USER',
      name: {
        first:'Alphonso',
        last:'Alomar'
      },
      lists: ['Micro']
    })
    store[1]({
      type: 'ADD_LIST',
      nom: 'Accueil'
    })
    store[1]({
      type: 'ADD_LIST',
      nom: 'Micro'
    })
  }, [])
  
  //console.log(users)

  return (
    <Store.Provider value={store}>
      <Router>
        <div className="App">
          <Header />
          
          <Switch>
            <Route path="/" exact>
              <Dasboard />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/page3">
              <Page3 />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store.Provider>
  )
}

export default PlayGround2
