import reducer  from './reducers/index'
import { numberAdd2 } from './actions/number'

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco...
  number: 0,
};


export {
  reducer,
  initialState,
  numberAdd2
}