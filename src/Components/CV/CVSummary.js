import { Button, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactJson from 'react-json-view';
import cvJson from './cv.json';
import profileImage from '../../profile-image.jpg';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos'

function CVSummary(props) {
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <Grid item xs={12} style={{ marginTop: isDesktop ? 150 : 40, marginBottom: isDesktop ? 300 : 0 }}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={10} lg={8} style={{maxWidth: 900}}>
                    <Card variant="elevation" elevation={8}>
                        <CardContent>
                            <Grid container justify="space-evenly" alignItems="center">
                                <Grid item md={4} lg={5}>
                                    <Card variant="elevation" elevation={3} style={{ marginRight: isDesktop ? 40 : 0, padding: 20 }}>
                                        <CardContent>
                                            <Grid container direction="column" justify="space-between" spacing={2}>
                                                <Grid item xs={12}>
                                                    <img src={profileImage} alt="profile-image" style={{ borderRadius: "50%" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button variant="outlined" endIcon={<RightArrowIcon />}>View Details</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                <ReactJson name="summary" src={cvJson} theme={props.darkMode ? "hopscotch" : ""} displayDataTypes={false} enableClipboard={false} style={{ textAlign: 'left', padding: 20 }} />
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CVSummary;