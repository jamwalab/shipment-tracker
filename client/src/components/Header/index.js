import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

//---MATERIAL UI IMPORTS---//
import {AppBar, Typography, Tabs, Tab, Box, Container, Icon, ThemeProvider, createTheme, Button} from '@mui/material';

import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

//const primary = purple[50]; // #f44336
const theme = createTheme({
  palette: {
    primary: {
      main: '#fbfbfb'
    },
    secondary: {
      main: "#1976d2"
    }
  }
});

export default function Header() {
  const [value, setValue] = useState("home");

  const homeClick = () => {
    setValue("home");
  }

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/tracker" && value !== "tracker") setValue("tracker")
    else if (path === "/" && value !== "home") setValue("home");
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar className="d-flex row-direction flex-justify-between align-center header" color="primary">
          <Typography component="div">
            <Link to="/" className='align-center d-flex row-direction iconSpace' onClick={homeClick}>  
              <DirectionsBoatIcon fontSize="large" color="secondary"/>
              <div className="iconText">
                <p>SHIPMENT</p>
                <p>TRACKER</p>
              </div>
            </Link>
          </Typography>
          <Typography className='align-center d-flex row-direction' component="div">
            <Tabs 
              value={value}
              onChange={handleChange} 
              indicatorColor="secondary" 
              textColor="secondary"
              className="menuTabs"
            >
              <Tab value="home" label={<span className="menuItems">Home</span>} component={Link} to="/"/>
              <Tab value="tracker" label={<span className="menuItems">Tracker</span>} component={Link} to="/tracker"/>
            </Tabs>
            <Button color="secondary" variant="contained">Login</Button>
          </Typography>
        </AppBar>
      </ThemeProvider>
    </>
  )
};