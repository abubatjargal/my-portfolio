import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// Images
import curiboLogin from '../../Assets/Curibo_Login.png'
import curiboIntroduction from '../../Assets/Curibo_Chat_Bot_Introduction.png'
import curiboGetStarted from '../../Assets/Curibo_Get_Started.png'
import curiboLearnMore from '../../Assets/Curibo_Learn_More.png'

export default function Curibo() {
    return (
        <Grid container justify="center" spacing={3} style={{ marginBottom: 40 }}>
            <Grid item xs={6} style={{ paddingRight: 50 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                        <Typography variant="h3" align="left">Curibo</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                        <Typography variant="h4" align="left" style={{ fontWeight: 200, marginBottom: 10}}>The Problem:</Typography>
                        <Typography variant="body1" align="left">
                            Currently there is a large gap in sexual education for teenagers around the United States. Varying school
                            curriculums result in unequal access to proper informational resources. This leaves students susceptible 
                            to unwanted pregnancies and sexually transmitted diseases and infections. Moreover, sex and sexuality
                            and the stigma arround it make it an awkward conversation for teens, deterring their inquiries regarding 
                            certain topics
                </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="left" style={{ fontWeight: 200, marginBottom: 10}}>The Solution:</Typography>
                        <Typography variant="body1" align="left">
                            Curibo is a sexual health and wellness chat bot powered by AI. Users are able to anonymously query
                            topics surrounding sex and sexuality and receive information backed by legitimate research data.
                            The application's emphasis on anonymity helps users to feel at ease when interacting with Curibo, allowing
                            them to explores topics that feel uncomfortable otherwise.
                </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Card variant="elevation" elevation={3}>
                    <CardContent>
                        <Carousel
                            infinite
                            arrows
                            autoPlay={3000}
                            centered={true}
                            stopAutoPlayOnHover>
                            <img src={curiboLogin} />
                            <img src={curiboIntroduction} />
                            <img src={curiboGetStarted} />
                            <img src={curiboLearnMore} />
                        </Carousel>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}