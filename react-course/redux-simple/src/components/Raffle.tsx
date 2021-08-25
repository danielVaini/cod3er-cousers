import { connect } from 'react-redux'

import Card from './Card';

interface RaffleProps {
  min: number,
  max: number
}

function Raffle({min, max, ...props}:RaffleProps) {
  const radonNumber = Math.floor(Math.random() * (max - min) + min)
 
  return (
    <Card title="Raffle of one number" headerBg="#7776bC" contenBg="#7776fC">
      <div>

        <span>
          <span>Result: </span>
          <strong>{radonNumber}</strong>
         
        </span>
      </div>
    </Card>
  )
}

const mapRaffleProps = (state: any) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}


export default connect(mapRaffleProps)(Raffle)