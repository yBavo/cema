import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Proclaimer from './components/proclaimer/Proclaimer';
import AddDepartementForm from './components/AddDepartementForm';
import Header from './components/Header';
import Store from './context/Store';
import reducer from "./reducers/reducer";
import Dasboard from './containers/dashboard/Dashboard';
import List from './components/List';



const initialState = {
  departements: [],
  proclaimers: [],
  lists: [],
  schedules: [],
  indexLastPers: []
}

function App() {
  const store = useReducer(reducer, initialState)
  
  return (
    <Store.Provider value={store}>
      <Router>
        <Container>
          
          <Header />
          
          <Switch>
            <Route path="/" exact>
              <Dasboard />
            </Route>

            <Route path="/addUsers">
              <Proclaimer />
            </Route>

            <Route path="/addDep">
              <AddDepartementForm />
              <List />
            </Route>
          </Switch>

        </Container>
      </Router>
    </Store.Provider>
  );
}

export default App;
