import {createStore, combineReducers} from 'redux'
import numberActions from './reducers/numbersAction'


const reducers = combineReducers({
  numbers: numberActions,
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig