import "./styles.css";
import useCounter from "./customHooks/useCounter";
import useToggle from "./customHooks/useToggle";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { useTheme } from "./customHooks/useTheme";
import { useAuth } from "./customHooks/useAuth";

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const { value, toggle } = useToggle();
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "10px",
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
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
        <hr />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <hr />
        <div>
          <h1>Authentication</h1>
          {user ? (
            <>
              <p>Welcome, {user.name}!</p>
              <button onClick={() => logout()}>Logout</button>
            </>
          ) : (
            <>
              <p>Click to Login</p>
              <button onClick={() => login({ name: 'Yo Ani', email: "yo@ex.com" })}>Login</button>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default App;
