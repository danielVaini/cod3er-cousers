import { connect } from 'react-redux'

import Card from './Card';

interface sumProps {
  min: number,
  max: number,
}
 function Sum({min, max}: sumProps) {


  return (
    <Card title="Sum of numbers" headerBg="#2e7d32" contenBg="#4caf50">
      <div>

        <span>
          <span>Result: </span>
          <strong>{min + max}</strong>
         
        </span>
      </div>
    </Card>
  )
}

const mapSumProps = (state:any) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}

export default connect(mapSumProps)(Sum)