import React from "react";
import cmpstyle from './Button.module.css'

const Button = ({style,bgColor="grey",children,type="button"}) => {
  //console.trace(style);
  //console.log(props);
  console.log(children);
  return (
    <button 
    type={type}
    className={cmpstyle.Button} 
    style ={{ backgroundColor: bgColor, ...style  }} 
    data-testid="Button">
      {children}
    </button>
  );
};

export default Button;
  