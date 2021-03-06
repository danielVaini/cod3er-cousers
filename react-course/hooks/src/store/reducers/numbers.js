export default function numberReducer(state, action) {
  switch (action.type) {
  
      case "numberAdd2":
        return { ...state, number: state.number + 2 };
    case "multiplyFor7":
      return {...state, number: state.number * 7};
    case "divideFor25":
      return {...state, number: state.number / 25}
    case "transformeInt":
      return {...state, number: parseInt(state.number)}
    case "addAnyNumber":
      return {...state, number: state.number + action.payload}
    default:
      return state;
  }
}