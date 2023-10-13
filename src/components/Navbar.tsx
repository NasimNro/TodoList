import appIcon from "../assets/to-do-list.png"; // Adjust the path as needed

const Navbar = () => {
  return (
    <div className="bg-[#43618f] w-full h-16 mb-10 flex justify-between items-center">
      <div className="container w-1/3 logo-container pl-4">
        <img src={appIcon} className="h-10 w-10" alt="App Icon" />
      </div>
      <div className="w-1/3 flex justify-center">
        <h1 className="text-2xl">TodoList App</h1>
      </div>
      <div className="w-1/3 flex justify-end pr-4 hover:underline">
        <a className="text-xl" target="_blank" href="https://www.google.com/">Source Code</a>
      </div>
    </div>
  );
};

export default Navbar;
