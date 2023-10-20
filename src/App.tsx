import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./register/Registration";
import Login from "./components/Login";
import Home from "./home/Home";

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
      <Routes>
        <Route
          path="/"
          element={<Home user={loggedInUser}></Home>}
        />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/login"
          element={
            <Login
              setlogedInUser={(name, id) => {
                updateUser(name, id);
              }}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
