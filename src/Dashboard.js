import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';



function Private() {
  return (
    <div className="dashboard">
      <div className="app">
        <img src="https://i.pinimg.com/474x/1d/a0/05/1da0054d99bef65a07df1e89e36830bf.jpg"></img>
        <Link to="/app1">
        <button type="button" className="loginBtn">
          App 1
        </button>
      </Link>
      </div>
      <div className="app">
        <img src="https://i.pinimg.com/474x/1d/a0/05/1da0054d99bef65a07df1e89e36830bf.jpg"></img>
        <Link to="/app2">
            <button type="button" className="loginBtn">
              App 2
            </button>
          </Link>
      </div>
      <div className="app">
        <img src="https://i.pinimg.com/474x/1d/a0/05/1da0054d99bef65a07df1e89e36830bf.jpg"></img>
        <Link to="/app3">
            <button type="button" className="loginBtn">
              App 3
            </button>
          </Link>
      </div>
      <div className="app">
        <img src="https://i.pinimg.com/474x/1d/a0/05/1da0054d99bef65a07df1e89e36830bf.jpg"></img>
         <Link to="/app4">
            <button type="button" className="loginBtn">
              App 4
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Private;
