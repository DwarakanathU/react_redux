import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import nameChange from "../redux/nameRedux/actions";

const NameInputValue = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const updateName = () => {
    dispatch(nameChange(name));
  };

  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <input type="text" onChange={changeName} />
      <button onClick={updateName}>submit</button>
      <br />
      {name}
    </div>
  );
};

export default NameInputValue;
