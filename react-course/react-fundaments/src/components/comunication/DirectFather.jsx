import DirectChild from "./DirectChild";

export default props => {
  return(
    <div>
      <DirectChild name="Daniel" age={23} nerd={false} />
      <DirectChild name="Gabriel" age={26} nerd={true} />
      <DirectChild name="Bruno" age={29} nerd={true} />
      <DirectChild name="Felipe" age={31} nerd={true} />

    </div>
  );
}