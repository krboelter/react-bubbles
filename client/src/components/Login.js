import React, { useState } from "react";
import { axiosWithAuth as api} from "../utils/api";

const Login = (props) => {

  const [user, setUseer] = useState({
    username: "Lambda School",
    password:"i<3Lambd4"
  })

  const handleChange = event => {
    setUseer({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event, id) => {
    event.preventDefault();

    api().post("/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        props.history.push("/bubble-page")
      })
      .catch(err => {
        console.log(err)
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
