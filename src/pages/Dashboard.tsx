import { useAuth } from "../customHooks/useAuth";
import useCounter from "../customHooks/useCounter";
import { useTheme } from "../customHooks/useTheme";
import useToggle from "../customHooks/useToggle";

const Dashboard = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    const { value, toggle } = useToggle();
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();

    return (
        <div
            style={{
                textAlign: "center",
                margin: "10px",
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h1>Welcome, {user?.name}</h1>
            <button onClick={logout}>Logout</button>
            <h2>Counter : {count}</h2>
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
        </div>)
}

export default Dashboard