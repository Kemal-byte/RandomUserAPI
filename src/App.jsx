import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      let singleUser = data.results[0];
      // console.log(singleUser);
      setUser(singleUser);
    }
    getData();
  }, []);

  console.log(user);
  return (
    <div className="wrapper">
      <div className="bg1 bg"></div>
      <div className="bg2 bg"></div>
      <div className="container"></div>
    </div>
  );
}

export default App;
