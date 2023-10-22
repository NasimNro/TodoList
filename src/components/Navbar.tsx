import React, { useContext } from "react";
import { AppContext } from "../App";
import appIcon from "../assets/to-do-list.png"; // Adjust the path as needed

const Navbar = () => {
  const [loggedInUser, setlogedInUser] = useContext(AppContext);

  return (
    <div className="bg-[#43618f] w-full h-16 mb-10 flex justify-between items-center sm:mb-6 sm:h-12">
      <div className="w-1/3 logo-container pl-4">
        <img src={appIcon} className="h-10 w-10 sm:h-6 sm:w-6" alt="App Icon" />
      </div>
      <div className="w-1/3 flex justify-center">
        <h1 className="text-2xl sm:text-lg">TodoList App</h1>
      </div>
      <div className="w-1/3 flex justify-end pr-4 hover:underline">
        {/* <p>Welcome {loggedInUser.name}</p> */}
      </div>
    </div>
  );
};

export default Navbar;
