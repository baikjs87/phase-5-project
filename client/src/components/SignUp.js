import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './styles/signup.css'

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then(res => {
      if(res.ok){
          res.json().then((user) => {
            setUser(user)
            navigate('/')
          })
      }else {
          res.json().then(json => setErrors(json.errors))
      }
  })
 
}

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="heading">Sign Up</h1>
        {errors?errors.map(e => <div style={{color:'red'}}>{e[0]+': ' + e[1]}</div>):null}
        <div  className="form">
          <div className="input">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password" className="label confirmation">Password Confirmation</label>
            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
