import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Button, Grid, IconButton, Menu, MenuItem } from '@material-ui/core';
import LightModeIcon from '@material-ui/icons/Brightness4Outlined';
import DarkModeIcon from '@material-ui/icons/Brightness4';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function HideAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar color="primary">
                    <Toolbar>
                        <Grid container direction="row" justify="space-between">
                            <Grid item>
                                <Typography variant="h6">Abu's Portfolio</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" spacing={3} style={{ marginLeft: 'auto' }} alignItems="center">
                                    <Grid item>
                                        <Button color="inherit" variant="outlined">Curriculum Vitae</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button color="inherit" variant="outlined" onClick={handleMenu}>Projects</Button>
                                    </Grid>
                                    <Grid item>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Undergraduate Projects</MenuItem>
                                            <MenuItem onClick={handleClose}>Personal Projects</MenuItem>
                                        </Menu>
                                        <Grid />
                                        <Grid item>
                                            {props.darkMode ?
                                                (
                                                    <IconButton onClick={props.toggleDarkMode}>
                                                        <LightModeIcon />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton onClick={props.toggleDarkMode}>
                                                        <DarkModeIcon />
                                                    </IconButton>
                                                )
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}