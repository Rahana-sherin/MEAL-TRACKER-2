import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    navigate("/menu");

    // try {
    //   const response = await fetch('https://your-api-url.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Login failed');
    //   }

    //   const data = await response.json();
    //   console.log('Login successful:', data);

    //   // Handle successful login (e.g., save token, redirect)
    // } catch (error) {
    //   console.error('Error:', error);
    //   setErrorMessage('Login failed. Please check your credentials.');
    // }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back !</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account?  Sign up</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
