export default (props) => {

  const min = 50;
  const max = 100;

  const generateAge = () => {
    return parseInt(Math.random() * (max - min)) + min
  }  
  const generateNerd = () => {
    return Math.random() > 0.5
  }  

  return (
    <div>
      <div>Child</div>
      <button onClick={
        function(e) {
          props.whenClicked('João', generateAge(), generateNerd())
        }
      }>Provide information</button>
    </div>
  );
};
