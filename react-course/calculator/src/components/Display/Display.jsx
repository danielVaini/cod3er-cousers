import './Display.css'

export default  props => {
  return(
    <div className="Display">
      <div className="Result">
        <p>{props.result}</p>

      </div>
      <div className="Count">
        <p> = </p>
        <p>{props.value}</p>
      </div>
    </div>
  );
}