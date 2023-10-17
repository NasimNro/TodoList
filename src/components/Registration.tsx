import { useState } from "react";

interface props {
  handleSubmit: (e:any) => void;
}
const Registration = ({ handleSubmit }: props) => {
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
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="Name"
                name="name"
                type="text"
                onChange={handleChange}
              />
              <input
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="Username"
                type="text"
                name="username"
                onChange={handleChange}
              />
              <input
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="Password"
                type="text"
                name="password"
                onChange={handleChange}
              />
              <input
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="E-Mail"
                name="Email"
                type="text"
                onChange={handleChange}
              />
              <button
                className="h-12 w-6/12 bg-green-400 rounded-md"

                onClick={() => handleSubmit(formData)}
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center ">
              <p>You already have an account ?</p>
              <a href="www.google.com">Go to Login</a>
            </div>
          </fieldset>

      </div>
    </div>
  );
};

export default Registration;
