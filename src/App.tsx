import { useEffect, useState, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./register/Registration";
import Login from "./components/Login";
import Home from "./home/Home";
import React from "react";

export const AppContext = React.createContext<any>(null);

function App() {
  const [loggedInUser, setlogedInUser] = useState({
    name: "",
    userId: "",
  });

  const updateUser = (username: string, id: string) => {
    setlogedInUser({ name: username, userId: id });
  };

  return (
    <>
      <AppContext.Provider value={{ loggedInUser, setlogedInUser }}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
