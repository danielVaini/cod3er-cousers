import { connect } from 'react-redux';

import './Interval.css';
import Card from './Card';
import { alterMaxNumber, alterMinNumber } from '../store/actions/numbers'

interface intervalProps {
  min: number,
  max: number,
  setMin: Function,
  setMax: Function,
}

function Interval({ min, max, setMin, setMax }: intervalProps) {
  
  return (
    <Card title="Interval of Numbers" headerBg="#c62828" contenBg="#f44336">
      <div className="Interval">

        <span>
          <strong>Minimun: </strong>
          <input type="number" value={min} onChange={e => setMin(+e.target.value)}/>
        </span>
        <span>
          <strong>Maximun: </strong>
          <input type="number" value={max} onChange={e => setMax(+e.target.value)}/>
        </span>
      </div>
    </Card>
  )
}

const mapIntervalProps = (state: any) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}

function mapDispatchToProps(dispatch: Function) {
  console.log("Dispatch: ", dispatch)
  return {
    setMin(newNumber: number) {
      // Action Creator -> Action
      const action = alterMinNumber(newNumber)
      dispatch(action)
    },
    setMax(newNumber: number){
      const action = alterMaxNumber(newNumber)
      dispatch(action)
    }

  }
}

export default connect(mapIntervalProps, mapDispatchToProps)(Interval)