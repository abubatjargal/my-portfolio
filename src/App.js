import React, { useState } from 'react';
import profileImage from './profile-image.jpg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import CVSummary from './Components/CV/CVSummary';
import { Box, createMuiTheme, Grid, Switch, ThemeProvider } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container justify="center">
          <Box width={1800} style={{ overflow: 'hidden' }}>
            <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <CVSummary />
          </Box>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
