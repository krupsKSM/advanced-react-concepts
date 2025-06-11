import { useState } from "react";
import { useAuth } from "../customHooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    // states for login form input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { login, loading, error } = useAuth();

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password)
            alert("Please enter email or password");
        try {
            await login(email, password);
            navigate("/dashboard")
        } catch (error) {
            console.error(error);

        }
    }
    return (
        <>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />

                <input type="password" placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />

                <button onClick={handleLogin} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}</button>

                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>


    );

}

export default LoginPage

