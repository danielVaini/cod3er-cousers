import React from 'react';


export default (props) => {
  let min = props.min;
  let max = props.max;


  if(min > max) {
    let aux = max;
    max = min;
    min = aux;
   
  }

  let RandomNumber = Math.floor(Math.random() * (max - min) + min)
  return (
    <>
      <p>Number aleatory between {min} and {max} = {RandomNumber}</p>
    </>
  );
}

