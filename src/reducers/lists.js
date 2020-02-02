import {
  ADD_LIST,
  EDIT_LIST,
  FETCH_LISTS,
  GET_LISTS, 
  REMOVE_LIST
} from '../actions/actionsType'


export default (state = [], {type, lists}) => {
  switch (type) {
    case FETCH_LISTS:
      console.log('FETCH_LISTS', lists)
      return lists
      
    case ADD_LIST:
      const newList = {
        state,
        ...lists
      }
      console.log('ADD_LIST', newList)
      return newList
      
    case GET_LISTS:
      console.log('GET_LISTS', state)
      return state
      
    case REMOVE_LIST:
      const newList2 = state.filter(list => list.id !== lists.id)
      console.log('REMOVE_LIST', newList2)
      return newList2;

    case EDIT_LIST:
      const newList3 = {
        state,
        ...lists
      }
      console.log('EDIT_LIST', newList3)
      return newList3;

    default:
      return state;
  }
}
