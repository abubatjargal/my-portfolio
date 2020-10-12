import React, { useState, useRef } from 'react';
import profileImage from './profile-image.jpg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import CVSummary from './Components/CV/CVSummary';
import { Box, createMuiTheme, Divider, Grid, Switch, ThemeProvider, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';
import Curibo from './Components/Projects/Curibo';
import NUMaps from './Components/Projects/NUMaps';
import CV from './Components/CV/CV';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: [
        '"Helvetica Neue"'
      ]
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToRef = (ref) => window.scroll({top: ref.current.offsetTop, left: 0, behavior: 'smooth'})

  const projectsRef = useRef(null)
  const resumeRef = useRef(null)
  const scrollToProjects = () => scrollToRef(projectsRef)
  const scrollToResume = () => scrollToRef(resumeRef)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container justify="center" >
          <Box width={1600} style={{ overflow: 'hidden' }}>
            <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToProjects={scrollToProjects} scrollToCV={scrollToResume}/>
            <Grid item xs={12} ref={projectsRef}>
              <Grid container justify="center">
                <Grid item xs={11}>
                  <Typography variant="h2" align="left" style={{fontWeight: 800, opacity: 0.2, marginTop: 50}}>Abu's Portfolio</Typography>
                </Grid>
              </Grid>
            </Grid>
            <CVSummary darkMode={darkMode}/>
            <Divider variant="middle" style={{margin: 50}}/>
            <Grid item xs={12} ref={projectsRef}>
              <Grid container justify="center">
                <Grid item xs={11}>
                  <Typography variant="h2" align="left" style={{fontWeight: 800, opacity: 0.2, marginBottom: 100}}>Projects</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Curibo />
            <Divider variant="middle" style={{margin: 50}}/>
            <NUMaps />
            <Divider variant="middle" style={{margin: 50}}/>
            <Grid item xs={12} ref={resumeRef}>
              <Grid container justify="center">
                <Grid item xs={11}>
                  <Typography variant="h2" align="left" style={{fontWeight: 800, opacity: 0.2, marginBottom: 100}}>Curriculum Vitae</Typography>
                </Grid>
              </Grid>
            </Grid>
            <CV />
          </Box>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
