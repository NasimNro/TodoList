import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (formData: any) => {
    const { name, Email, username, password } = formData;

    // Assuming you have a registration API endpoint
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        Email,
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful registration
          console.log("User registered successfully");
          setIsRegistered(true);
        } else {
          // Handle registration error
          console.error("Error registering user");
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  };

  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    username: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  return (
    <div className=" bg-[#a2a8d3] flex items-center h-screen justify-center">
      <div className="bg-[#6d94cf] h-1/2 flex w-1/2 rounded-md ">
        <fieldset className="rounded-md flex flex-col items-center border-2 w-full h-full ">
          <legend className="ml-2">
            <b>Registration</b>
          </legend>
          <div className="flex flex-col w-full h-full items-center jutify-between">
            <input
              className="required h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="Name"
              name="name"
              type="text"
              onChange={handleChange}
            />
            <input
              className="required h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="Username"
              type="text"
              name="username"
              onChange={handleChange}
            />
            <input
              className="required h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <input
              className="required h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
              placeholder="E-Mail"
              name="Email"
              type="text"
              onChange={handleChange}
            />
            <button
              className="h-12 w-6/12 bg-green-400 rounded-md"
              onClick={() => handleRegistration(formData)}
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <p>You already have an account ?</p>
            <Link to="/login"> go to login</Link>
          </div>
        </fieldset>
      </div>
      {isRegistered && <Navigate to="/login" />}
    </div>
  );
};

export default Registration;
