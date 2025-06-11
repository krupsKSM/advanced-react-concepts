import "./styles.css";
import useCounter from "./customHooks/useCounter";
import useToggle from "./customHooks/useToggle";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useState } from "react";
import { useTheme } from "./customHooks/useTheme";
import { useAuth } from "./customHooks/useAuth";

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const { value, toggle } = useToggle();
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout,loading, error } = useAuth();

  // states for login form input
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  const handleLogin = async () =>{
    if(!email || !password)
      alert("Please enter email or password");
    try{
      await login(email,password);
    }catch(error){
      console.error(error);
      
    }
  }
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
              <input
              type="email"
              placeholder="Enter e-mail"
              value= {email}
              onChange={(e)=>setEmail(e.target.value)}/>
              <br />

              <input type="password" placeholder="Enter password" value={password}
                onChange={(e)=>setPassword(e.target.value)}
               /> <br />

              <button onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}</button>

              {error && <p style={{color:"red"}}>{error}</p>}
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default App;
