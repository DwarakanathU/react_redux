const nameChange = (name) => {
  console.log("name action", name);
  return {
    type: "NAME_CHANGE",
    payload: name,
  };
};

export default nameChange;
