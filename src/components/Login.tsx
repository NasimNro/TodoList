const Login = () => {
  return (
    <div className=" bg-[#a2a8d3] flex items-center h-screen justify-center">
      <div className="bg-[#6d94cf] h-1/4 flex w-1/2 rounded-md ">
        <form className="  h-ful w-full">
          <fieldset className="rounded-md flex flex-col items-center border-2 w-full h-full ">
            <legend className="ml-2">
              <b>Login</b>
            </legend>
            <div className="flex flex-col w-full h-full items-center jutify-between">
              
              <input
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="Username"
                type="text"
              />
              <input
                className="h-12 bg-[#e7eaf6] rounded md w-6/12 mb-2 pl-2"
                placeholder="Password"
                type="text"
              />
             
              <button className="h-12 w-6/12 bg-green-400 rounded-md">
                Login
              </button>
            </div>
            <div className="flex flex-col items-center ">
              <p>You dont have an account ?</p>
              <a href="www.google.com">Go to Registration</a>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
