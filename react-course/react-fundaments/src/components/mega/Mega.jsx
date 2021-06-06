import { useState } from "react";

import './Mega.css'

export default props => {

  function generateNumbers(valueMin = 0, valueMax = 61, amount = 7) {
    let array = [];
    let count = 0;
    while(count < amount){
      let aux = (parseInt(Math.random() * (valueMax - valueMin) + valueMin))
      if(array.includes(aux)){
      }else {
        array.push(aux)
        count++;
      }
    }
    return array.sort((n1, n2) => n1 - n2)
  }

  const [amount, setAmount] = useState(props.qtde || 6)
  const numerosIniciais = generateNumbers(1, 61, amount)
  const [numbers, setNumbers] = useState(numerosIniciais)

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numbers.join(' ')}</h3>
      <div>
        <label>Amount of numbers: </label>
        <input type="number" value={amount} onChange={e => setAmount(+e.target.value)}/>
      </div>
      <button onClick={() => setNumbers(generateNumbers(1,61,amount))}>Generate Numbers</button>
    </div>
  );
}