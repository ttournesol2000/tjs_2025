import React from "react";
import cmpstyle from "./Button.module.css";

interface IButtonProps {
  style?: object;
  bgColor: "tomato" | "brown" | "red" | "grey"|"blue";
  type?: "button" | "reset" | "submit";
  clickAction?: (unArg:string)=>void;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
}

//const Button = ({String style,bgColor="grey",children,type="button"}:IButtonProps) => {
const Button: React.FunctionComponent<IButtonProps> = ({
  style,
  bgColor = "grey",
  children,
  clickAction,
  type = "button",
}) => {
  const buttonOnClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(evt);
    //console.log(clickAction);
    if(clickAction)
    {
      clickAction("bouton cliqué!")
    }
  };

  //console.trace(style);
  //console.log(props);
  //console.log(children);
  return (
    <button
      type={type}
      className={cmpstyle.Button}
      style={{ backgroundColor: bgColor, ...style }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
