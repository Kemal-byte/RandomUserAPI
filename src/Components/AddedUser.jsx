import React from "react";
// import "./Addeduser.css";

const AddedUser = (props) => {
  // console.log(props);

  let arr = [];
  // arr.push(props);
  // console.log(Object.keys(props));
  Object.keys(props).forEach((key, index) => arr.push(props[key]));
  // console.log(arr);
  // console.log(arr[0]);
  let element = arr.map((item) => {
    return (
      <>
        <div className="item">{item.name}</div>
        <div className="item">{item.email}</div>
        <div className="item">{item.phone}</div>
        <div className="item">{item.age}</div>
      </>
    );
  });
  return (
    <div className="user-list">
      <div className="title">FirstName</div>
      <div className="title">Email</div>
      <div className="title">Phone</div>
      <div className="title">Age</div>
      {element}
    </div>
  );
};

export default AddedUser;
