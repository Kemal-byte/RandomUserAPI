import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./Components/AddedUser.css";
import { useEffect } from "react";
import mail from "./assets/mail.svg";
import phoneicon from "./assets/phone.svg";
import map from "./assets/map.svg";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import AddedUser from "./Components/AddedUser";

function App() {
  const [user, setUser] = useState({});
  const [show, setShow] = useState("email");
  const [count, setCount] = useState(0);
  const [save, setSave] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      let singleUser = data.results[0];

      let q = [];
      q.push({
        name: singleUser.name.first,
        email: singleUser.email,
        phone: singleUser.phone,
        picture: singleUser.picture.large,
        gender: singleUser.gender,
        address: singleUser.location.city,
        age: singleUser.dob.age,
      });

      setUser(q[0]);
    }
    getData();
    // console.log(user);
  }, [count]);

  function handleHover(event) {
    if (event.target.id) {
      setShow(event.target.id);
    }
    return;
  }
  useEffect(() => {
    if (show) {
      setShow((prev) => prev);
    }
  }, [show]);
  // console.log("show value is " + show);
  //
  function handleAdd() {
    let pass = true;
    save.map((item) => {
      if (item.email == user.email) {
        pass = false;
        return;
      }
    });
    if (pass) {
      setSave((current) => [
        ...current,
        {
          name: user.name,
          email: user.email,
          phone: user.phone,
          age: user.age,
        },
      ]);
    }
  }

  function handleDelete() {
    setSave([]);
  }
  console.log(save);

  return (
    <article className="wrapper">
      <div className="container">
        <div className="part1">
          <img src={user.picture} alt="" />
        </div>
        <div className="part2">
          <div className="response">
            <h4 className="property">
              {show ? `My ${show} is` : "Hover over to see details"}
            </h4>
            <h2 className="data">{user[show]}</h2>
          </div>
          <div className="hovers">
            <div className="icon" onMouseEnter={handleHover} id="email">
              <img src={mail} alt="" />
            </div>
            <div className="icon" id="phone" onMouseEnter={handleHover}>
              <img src={phoneicon} alt="" data-label="phone" />
            </div>

            <div className="icon" id="name" onMouseEnter={handleHover}>
              <img
                src={user.gender === "male" ? man : woman}
                alt=""
                data-label="man"
              />
            </div>
            <div className="icon" id="address" onMouseEnter={handleHover}>
              <img src={map} alt="" data-label="map" />
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => setCount((count) => count + 1)}>
              NEW USER
            </button>
            <button onClick={handleDelete}>DELETE USERS</button>
            <button onClick={handleAdd}>ADD USER</button>
          </div>
          {save.length > 0 && <AddedUser {...save} />}
        </div>
      </div>
    </article>
  );
}

export default App;
