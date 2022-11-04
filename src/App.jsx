import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import mail from "./assets/mail.svg";
import phone from "./assets/phone.svg";
import map from "./assets/map.svg";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";

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
  const { cell, dob, email, name, phone, picture } = user;
  return (
    <article className="wrapper">
      <div className="container">
        <div className="part1">
          <img src={picture?.large} alt="" />
        </div>
        <div className="part2">
          <h4 className="property"></h4>
          <h2 className="data">input of property</h2>
          <div className="hovers">
            <div className="icon">
              <img src={mail} alt="" />
            </div>
            <div className="icon">
              <img src={mail} alt="" />
            </div>
            <div className="icon">
              <img src={mail} alt="" />
            </div>
            <div className="icon">
              <img src={mail} alt="" />
            </div>
          </div>
          <div className="buttons">
            <button>NEW USER</button>
            <button>ADD USER</button>
          </div>
        </div>
        <div className="ignore"></div>
      </div>
    </article>
  );
}

export default App;
