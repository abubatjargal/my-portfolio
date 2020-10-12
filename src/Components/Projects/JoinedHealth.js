import React from 'react'
import { Card, Divider, Grid, Link, Paper, Typography } from '@material-ui/core'
import ReactImageGallery from 'react-image-gallery'
import { Image } from '@material-ui/icons'
import image1 from './image1.png'
import image2 from './image2.png'


export default function JoinedHealth() {
    return (
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={12} lg={10}>
                    <Typography variant="h5" align="left">Joined Health</Typography>
                </Grid>
                <Grid item xs={12} lg={10}>
                    <Paper variant="outlined" elevation={3} style={{ padding: 20 }} align="left">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Link href="https://joined-health.herokuapp.com/donate" target="_blank">Visit Website</Link>
                                <Typography align="left">
                                    Joined Health is an initiative created in response to the COVID-19 pandemic that aims to bridge the digital divide between hospital patients and their friends and family.
                                    Through the website, users are able to specify the tablet device(s) they want to donate along with their address and contact info. From there, the device are collected
                                    via a contact-free pick up and are deployed to partner hospitals once they have been thoroughly sanitized.
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Card elevation={3}>
                                            <img src={image1} style={{ width: "100%", height: "100%" }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card elevation={3}>
                                            <img src={image2} style={{ width: "100%", height: "100%" }} />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card elevation={3}>
                                            <img src={image1} style={{ width: "100%", height: "100%" }} />
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}