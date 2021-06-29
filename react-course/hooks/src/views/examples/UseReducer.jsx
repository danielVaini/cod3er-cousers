import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from '../../store/config'
import {numberAdd2, login} from '../../store/actions'

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(0);
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
          <button className="btn" onClick={() => login(dispatch, "Daniel")}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
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
          <button className="btn" onClick={() => dispatch({ type: "addAnyNumber", payload: parseInt(number) })}>
             + {number}
          </button>
        </div>
        <div>
          <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
