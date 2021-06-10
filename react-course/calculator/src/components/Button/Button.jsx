import { useState } from 'react';
import './Button.css'

const Button = props => {



  return(
      <button  className="Button" style={{
        color: props.operator ? "#1E95F4" : "black"
      }}
      onClick={e => props.click && props.click(props.label)}
      >
        {props.label}
      </button>  
  );
}

export default Button;