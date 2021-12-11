import "./App.css";
import CounterApp from "./components/CounterApp";
import NameInputValue from "./components/NameInputValue";
// import { useSelector } from "react-redux";
function App() {
  // const name = useSelector((state) => state.nameReducer.name);
  return (
    <div className="App">
      <h1>Hello !</h1>
      <CounterApp />
      <NameInputValue />
    </div>
  );
}

export default App;
