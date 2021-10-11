import React, {useState} from 'react';
import './style.css';

//---MATERIAL UI IMPORTS---//
import {AppBar, Typography, Tabs, Tab, Box, Container, Icon, ThemeProvider, createTheme, Button} from '@mui/material';

import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

//const primary = purple[50]; // #f44336
const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee'
    },
    secondary: {
      main: "#1976d2"
    }
  }
});

export default function Header() {
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar className="d-flex row-direction flex-justify-between align-center header" color="primary">
          <Typography className='align-center d-flex row-direction iconSpace' component="div">
            <DirectionsBoatIcon fontSize="large" color="secondary"/>
            <div className="iconText">
              <p>SHIPMENT</p>
              <p>TRACKER</p>
            </div>
          </Typography>
          <Typography className='align-center d-flex row-direction' component="div">
            <Tabs 
              value={value}
              onChange={handleChange} 
              indicatorColor="secondary" 
              textColor="secondary"
              className="menuTabs"
            >
              <Tab value="home" label="Home"/>
              <Tab value="tracker" label="Tracker"/>
            </Tabs>
            <Button color="secondary" variant="contained">Login</Button>
          </Typography>
        </AppBar>
      </ThemeProvider>
    </>
  )
};