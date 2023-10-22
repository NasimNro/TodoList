import { useState, useContext } from "react";
import { AppContext } from "../App";

import { Link, Navigate } from "react-router-dom";

  // const [loggedInUser, setlogedInUser] = useContext(AppContext)


const Login = () => {
  const handleLogin = (loginData: any) => {
    const { username, password } = loginData;

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response as JSON
        } else {
          console.error("Error logging in user");
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log("User logged in successfully");
        console.log(data);
        // setlogedInUser(data.username, data.id)
        
      })
      .catch((error) => {
        console.error("Network error or login failed:", error.message);
      });
  };

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
    console.log(loginData);
  };

  return (
    <div className=" bg-[#a2a8d3] flex items-center h-screen justify-center">
      <div className="bg-[#6d94cf] h-1/4 flex w-1/2 rounded-md ">
        <fieldset className="rounded-md flex flex-col items-center border-2 w-full h-full ">
          <legend className="ml-2">
            <b>Login</b>
          </legend>
          <div className="flex flex-col w-full h-full items-center jutify-between">
            <input
              className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="Username"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <input
              className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <button
              onClick={() => handleLogin(loginData)}
              className="h-12 w-6/12 bg-green-400 rounded-md"
            >
              Login
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <p>You dont have an account ?</p>
            <Link to="/registration"> go to registation</Link>
          </div>
        </fieldset>
      </div>
      {/* {(loggedInUser.name != "") && <Navigate to="/" />} */}
    </div>
  );
};

export default Login;
