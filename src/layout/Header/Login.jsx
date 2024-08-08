import React, { useState } from 'react';
import s from "./login.module.css" 


const LogIn = ({openModalLogin}) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
  <div className={s.backDrop}>
    <div className={s.modal}>
      <p>Log in</p>
      <button className={s.closeBtn} onClick={openModalLogin}>X</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          onBlur={() => {
            if(form.name == "") {
              document.getElementById("name-notice").style.display = "block"
            } else {
              document.getElementById("name-notice").style.display = "none"
            }
          }}
        />
        <p className="notice" id="name-notice">Name cannot be empty!</p>
        <hr/>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <p className="notice" id="email-notice">Email cannot be empty!</p>
        <hr/>

        <button type="submit">Submit</button>
      </form>
    </div></div>
  );
};

export default LogIn;
