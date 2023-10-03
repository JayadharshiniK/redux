import React from "react";
import Login from "./Components/Login";
import "./App.css";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user? <Logout/> : <Login />}
    </div>
  );
}

export default App;
