import React, { useState } from "react";

import IndirectChild from "./IndirectChild";


export default (props) => {
  // Nome idade nerd
  const [a, b] = [1, 2]
  const [name, setName] = useState('?');
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);


  function provideInformation(nome, idade, nerd){
    setName(nome)
    setAge(idade)
    setNerd(nerd)
  }
  return (
    <div>
      <div>

      <span>{name} </span>
      <span>{age} </span>
      <span>{nerd ? 'True' : 'False'}</span>

      <IndirectChild whenClicked={provideInformation}></IndirectChild>
      </div>
    </div>
  );
};
