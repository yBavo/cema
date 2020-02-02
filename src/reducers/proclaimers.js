import {
  ADD_PROCLAIMER,
  EDIT_PROCLAIMER, 
  GET_PROCLAIMERS, 
  GET_LIST_PROCLAIMER,
  POPULATE_PROCLAIMER, 
  REMOVE_PROCLAIMER
} from '../actions/actionsType'

export default (state, {type, proclaimers}) => {
  switch (type) {
    case POPULATE_PROCLAIMER:
      return proclaimers
      
    case ADD_PROCLAIMER:
      return {
        ...state,
        proclaimers
      }
      
    case GET_PROCLAIMERS:
      return proclaimers
      
    case GET_LIST_PROCLAIMER:
        console.log('REDUCER GET_LIST_PROCLAIMER')
      return ;
    
    case REMOVE_PROCLAIMER:
      return;

    case EDIT_PROCLAIMER:
      return;

    default:
      return state;
  }
}
