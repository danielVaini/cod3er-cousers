import { NUM_ALTER_MAX, NUM_ALTER_MIN } from "../actions/actionsTypes"
const initialState = {
  min: 1,
  max: 30
}

export default function numberActions(state = initialState, action: any) {

  switch(action.type) {
    case NUM_ALTER_MIN:
      return {
        ...state,
        min: action.payload
      }
    case NUM_ALTER_MAX:
      return {
        ...state,
        max: action.payload
      }
  
      default: 
        return state
  
  }

}