import numberReducer  from './numbers'
import { userReducer } from './login'
export default function reducer(state, action) {
  let newState = numberReducer(state, action)
  return userReducer(newState, action)
}