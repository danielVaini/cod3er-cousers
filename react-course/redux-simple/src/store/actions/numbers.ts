import { NUM_ALTER_MAX, NUM_ALTER_MIN } from "./actionsTypes"

// Action Create
export function alterMinNumber(newNumber: number) {
  return {
    type: NUM_ALTER_MIN,
    payload: newNumber
  }
}

export function alterMaxNumber(newNumber: number){
  return {
    type: NUM_ALTER_MAX,
    payload: newNumber
  }
}