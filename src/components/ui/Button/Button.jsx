import React from "react";
import cmpstyle from './Button.module.css'

const Button = ({style,bgColor,value,type="button"}) => {
  //console.trace(style);
  //console.log(props);
  return (
    <button 
    type={type}
    className={cmpstyle.Button} 
    style ={{ ...style, backgroundColor: bgColor }} 
    data-testid="Button">
      {value}
    </button>
  );
};

export default Button;
  