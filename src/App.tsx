import "./styles.css";
import useCounter from "./customHooks/useCounter";
import useToggle from "./customHooks/useToggle";

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const { value, toggle } = useToggle();
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h1>Counter : {count}</h1>
      <span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </span>
      <br />
      <button onClick={reset}>RESET</button>
      <br />
      <br />
      <hr />
      <p>Toggle is :{value ? "ON" : "OFF"} </p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default App;
