import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco...
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };

    case "login":
      return { ...state, user: { name: action.payload } };
    case "multiplyFor7":
      return {...state, number: state.number * 7};
    case "divideFor25":
      return {...state, number: state.number / 25}
    case "transformeInt":
      return {...state, number: parseInt(state.number)}
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text red">{state.user.name}</span>
        ) : (
          <span className="text red">User not found</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "login", payload: 'Maria' })}>
            Login
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "multiplyFor7" })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "divideFor25" })}>
             / 25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "transformeInt" })}>
             Transforme in integer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
