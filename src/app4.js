import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import ServerChart from './charts';

function App1() {
  return (
    <div>
    <div className="dashboard">
      <div className="app">
        <img src="https://www.pngall.com/wp-content/uploads/2016/04/Server-Download-PNG.png"></img>
        <div>App 1</div>
      </div>
      <div className="app">
        <img src="https://www.pngall.com/wp-content/uploads/2016/04/Server-Download-PNG.png"></img>
        <div>App 2</div>
      </div>
      <div className="app">
        <img src="https://www.pngall.com/wp-content/uploads/2016/04/Server-Download-PNG.png"></img>
        <div>App 3</div>
      </div>
      <div className="app">
        <img src="https://www.pngall.com/wp-content/uploads/2016/04/Server-Download-PNG.png"></img>
         <div>App 4</div>
      </div>
    </div>
    <ServerChart></ServerChart>
    <ServerChart></ServerChart>
    </div>
  );
}

export default App1;
