import React, { cloneElement } from "react";


export default props => {
  return(
    <div>
      {
        React.Children.map(props.children, (el, index) => {
          return cloneElement(el, {...props, key: index})
        })
      }
    </div>
  );
}