import React, { useState } from 'react';
import Login from './Login';
import s from "./header.module.css"

const Header = () => {
const [loginIsOpen, setLoginIsOpen] = useState (false)
const openModalLogin = () => setLoginIsOpen (!loginIsOpen) 
    return (
    <header>
      <div className="container">
      <div className={s.headerContainer}><h1>CineCart</h1>
      <ul>
        <li>
            <button type='button' onClick={openModalLogin}> Log In </button>
        </li>
        </ul>
      {loginIsOpen && <Login openModalLogin = {openModalLogin}/>}</div>
      </div>
    </header>
  );
};

export default Header;
