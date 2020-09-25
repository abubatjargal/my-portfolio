import { Button, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactJson from 'react-json-view';
import cvJson from './cv.json';
import profileImage from '../../profile-image.jpg';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos'

function CVSummary() {
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <Grid item xs={12} style={{ marginTop: 40 }}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} lg={2} style={{ height: "100%" }}>
                    <Card variant="outlined" style={{ marginRight: isDesktop ? 40 : 0 }}>
                        <CardContent>
                            <Grid container direction="column" justify="space-between" spacing={2}>
                                <Grid item xs={12}>
                                    <img src={profileImage} alt="profile-image" style={{ borderRadius: "50%" }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Summary</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color="primary" variant="outlined" endIcon={<RightArrowIcon />}>View Details</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ReactJson src={cvJson} theme="hopscotch" displayDataTypes={false} enableClipboard={false} style={{ textAlign: 'left', padding: 20 }} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CVSummary;