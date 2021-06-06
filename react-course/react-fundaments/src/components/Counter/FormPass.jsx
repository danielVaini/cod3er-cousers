export default (props) => {
  return (
    <div>
      <label htmlFor="inputPass">Pass: </label>
      <input
        id="inputPass"
        type="number"
        value={props.pass}
        onChange={e => props.setPass(+e.target.value)}
      />
    </div>
  );
};
