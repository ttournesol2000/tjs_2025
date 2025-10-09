import React, { useState } from "react";
import style from "./MemeForm.module.css";
import Button from '../../ui/Button/Button'
const MemeForm = ({meme, onMemeChange}) => {

  const [current,setCurrent] = useState(meme);

  const onNbInputChange=(evt)=>{
    const newState={...current};
    newState[evt.target.name]=parseInt(evt.target.value);
    console.log(evt.target.value);
    setCurrent(newState);
  };

  const onStringInputChange=(evt)=>{
    const newState={...current};
    newState[evt.target.name]=evt.target.value;
    setCurrent(newState);
  };

  const onCheckBoxChange=(evt)=>{
    const newState={...current};
    newState[evt.target.name]=evt.target.checked;
    setCurrent(newState);
  };

  return (
    <div className={style.MemeForm}>
      <form onSubmit={(evt)=>{
        evt.preventDefault();
        onMemeChange(current);
      }} >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={current.titre} onChange={onStringInputChange}/>
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={current.text} onChange={onStringInputChange}/>
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input className={style.smallNumber} name="x" id="x" type="number" value={current.x} onChange={onNbInputChange}/>
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input className={style.smallNumber} name="y" id="y" type="number" value={current.y} onChange={onNbInputChange}/>
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={current.color} onChange={onStringInputChange} />
        <br />
        <label htmlFor="fontSize" value={meme.fontSize} onChange={onNbInputChange}>
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={current.fontWeight}
          onChange={onStringInputChange}
        />
        <br />
        <input name="underline" id="underline" type="checkbox"  value={current.underline} onChange={onCheckBoxChange} />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" value={current.italic} onChange={onCheckBoxChange} />
        <hr />
        <br />
        <Button type="reset" bgcolor="tomato">Reset</Button>
        <Button type="submit" bgcolor="skyblue">
          save
        </Button>
      </form>
    </div>
  );
};

export default MemeForm;
