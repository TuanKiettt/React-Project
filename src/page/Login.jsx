import React from 'react';
import "../css/Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          {/* Icon */}
          <i className='bx bxs-user'></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          {/* Icon */}
          <i className='bx bxs-lock-alt'></i>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" className="btn">Login</button>

        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
}
