import {
  ADD_DEPARTEMENT,
  EDIT_DEPARTEMENT,
  //FETCH_DEPARTEMENTS,
  GET_DEPARTEMENTS, 
  POPULATE_DEPARTEMENTS, 
  REMOVE_DEPARTEMENT,
} from '../actions/actionsType'

export default (state, {type, departements}) => {
  switch (type) {
    case POPULATE_DEPARTEMENTS:
      return departements
      
    case ADD_DEPARTEMENT:
      return {
        ...state,
        departements
      }
      
    case GET_DEPARTEMENTS:
      return departements
      
    case REMOVE_DEPARTEMENT:
      return;

    case EDIT_DEPARTEMENT:
      return;

    default:
      return state;
  }
}
