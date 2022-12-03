import React from 'react';
import logo from './logo.png';
import './App.css';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from '@mui/material/Stack';
declare global {
  interface Window {
      myObject: any;
  }
}

function App() {
  var remainingXats;
  const openInNewTab=(url:String)=> {
    (window as any).myObject.open(url, '_blank').focus();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Total Earnings: <code>remainingXats</code>
        </p>
        <p>
          Total Ads Consumed: <code>61k</code>
        </p>
        <p>
          Highest Ad Streak: <code>3</code>
        </p>
        <Button onClick={()=>{openInNewTab('www.google.com');}} variant="contained" endIcon={<OpenInNewIcon />} fullWidth>Dashboard</Button>
    
      </header>
    </div>
  );
}

export default App;
