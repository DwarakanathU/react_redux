const initialState = {
  name: "",
};

const nameReducer = (state = initialState, action) => {
  console.log("nameReducer", action.payload);
  switch (action.type) {
    case "NAME_CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default nameReducer;
