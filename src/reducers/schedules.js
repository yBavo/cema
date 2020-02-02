import {
  ADD_SCHEDULE,
  EDIT_SCHEDULE, 
  GET_SCHEDULE,
  GET_SCHEDULE_LIST, 
  REMOVE_SCHEDULE
} from '../actions'


export default (state, {type, schedule, list}) => {
  switch (type) {
    case ADD_SCHEDULE:
      return [
        ...state,
        ...schedule
      ]
      
    case GET_SCHEDULE:
      console.log('GET_SCHEDULE',state)
      return state
      
    case GET_SCHEDULE_LIST:
      console.log('GET_SCHEDULE_LIST',list, state)
      return state.map(day => day[list.id])
        
      case REMOVE_SCHEDULE:
      console.log('REMOVE_SCHEDULE',schedule)
      return;

    case EDIT_SCHEDULE:
      console.log('EDIT_SCHEDULE',schedule)
      return;

    default:
      return state;
  }
}
