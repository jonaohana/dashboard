import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Login with React</h1>
      <Link to="/dashboard">
        <button type="button" className="loginBtn">
          Login to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default Home;
