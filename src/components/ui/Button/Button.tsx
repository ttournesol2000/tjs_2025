import React from "react";
import cmpstyle from "./Button.module.css";
import { useEffect, useState } from "react";
import store from "../../../store/store";
import { saveRessources } from "../../../store/asyncCaller";


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
    setState(true)
    console.log(evt);
    //console.log(clickAction);
    if(clickAction)
    {
      clickAction("Button -- bouton cliqué!")    }
  };

  const [state, setState] = useState(false);

  useEffect(() => {
      return () => {
        console.log('Button --  State updated:', state)
      };
    });

    useEffect(() => {
      return () => {
        setTimeout(()=>{setState(false);},300);
/*         if(state==true)
          store.dispatch(saveRessources(store.getState().current.meme)); */
      };
    },[state]);

  //console.trace(style);
  //console.log(props);
  //console.log(children);
  return (
    <button
      type={type}
      className={`${cmpstyle.Button}${state?' '+cmpstyle.clicked:''}`}
      style={{ backgroundColor: bgColor, ...style }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
