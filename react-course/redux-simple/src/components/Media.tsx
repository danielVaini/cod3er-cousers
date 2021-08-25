import { connect } from 'react-redux'
import Card from './Card';

function Media(props: any) {
  const { min, max } = props
 
  console.log(props)
  return (
    <Card title="Media of numbers" headerBg="#1565c0" contenBg="#2196f3">
      <div>

        <span>
          <span>Result: </span>
          <strong>{(max + min) / 2}</strong>
         
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state: any) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,

  }
}

export default connect(mapStateToProps)(Media)