import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import mail from "./assets/mail.svg";
import phoneicon from "./assets/phone.svg";
import map from "./assets/map.svg";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";

function App() {
  const [user, setUser] = useState({});
  const [show, setShow] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      let singleUser = data.results[0];
      // console.log(singleUser);
      setUser(singleUser);
    }
    getData();
  }, [count]);

  function handleHover(event) {
    console.log(event);
    setShow(event.target.ariaLabel);
    console.log(typeof show);
    console.log(show);
  }

  console.log(user);
  const { cell, dob, email, name, phone, picture } = user;
  return (
    <article className="wrapper">
      <div className="container">
        <div className="part1">
          <img src={picture?.large} alt="" />
        </div>
        <div className="part2">
          <h4 className="property">My something something</h4>
          <h2 className="data">sonuc {user?.show}</h2>
          <div className="hovers">
            <div
              className="icon"
              onMouseEnter={handleHover}
              id="email"
              aria-label="email"
            >
              <img src={mail} alt="" />
            </div>
            <div className="icon" id="phone">
              <img src={phoneicon} alt="" data-label="phone" />
            </div>

            <div className="icon" id="man">
              <img
                src={user.gender === "male" ? man : woman}
                alt=""
                data-label="man"
              />
            </div>
            <div className="icon" id="map">
              <img src={map} alt="" data-label="map" />
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => setCount((count) => count + 1)}>
              NEW USER
            </button>
            <button>ADD USER</button>
          </div>
        </div>
        <div className="ignore"></div>
      </div>
    </article>
  );
}

export default App;
