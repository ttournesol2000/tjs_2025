import React from 'react';
import style from './NavBar.module.css'

const NavBar = (props) => { 
  return (
    <div className={style.NavBar} data-testid="NavBar">
       <div> Ma Nav Bar </div>
    </div>
  )
};

export default NavBar;
