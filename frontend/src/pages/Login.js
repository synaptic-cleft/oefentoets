import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/administrator", {
        username,
        password,
      });
      if (response.data.flag) {
        localStorage.setItem("flag", response.data.flag);
      }
      navigate("/random-redirect-route-to-provide-flag");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <select value={username} onChange={(e) => setUsername(e.target.value)} required>
          <option value="admin" disabled>Admin</option>
          <option value="maja">Maja</option>
          <option value="roy">Roy</option>
          <option value="alexander">Alexander</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
