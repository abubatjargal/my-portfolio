import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// Images
import numapsHome from '../../Assets/NUMaps_Home.png'
import numapsMapContext from '../../Assets/NUMaps_Map_Context.png'
import numapsFoodDining from '../../Assets/NUMaps_Food_&_Dining.jpg'
import numapsHaleyHouse from '../../Assets/NUMaps_Haley_House_Bakery.png'
import numapsCannabis from '../../Assets/NUMaps_Cannabis.jpg'
import numapsNETA from '../../Assets/NUMaps_NETA.jpg'
import numapsOpportunityZones from '../../Assets/NUMaps_Opportunity_Zone.jpg'

export default function NUMaps() {
    return (
        <Grid container justify="center" spacing={3} style={{ marginBottom: 40 }}>
            <Grid item xs={6} style={{ paddingRight: 50 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                        <Typography variant="h3" align="left">NUMaps</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                        <Typography variant="h4" align="left" style={{ fontWeight: 200, marginBottom: 10}}>The Problem:</Typography>
                        <Typography variant="body1" align="left">
                            Small businesses in the Nubian Square area of Roxbury, MA do not have a strong online presence. One of the main causes
                            of this is the lack of access to the proper resources. Unlike the larger chains and franchises in the surrounding area,
                            these businesses do not have the manpower or capital needed to build and develop online marketing campaigns.
                            <br/>
                            <br/>
                            Additionally, the legalization of recreational marijuana in Massachusetts creates new business opportunities in the 
                            multi-billion dollar cannabis industry. However, an overwhelming majority of marijuana business licenses in Massachusetts were 
                            issued to white business operators. This issue closely mirrors the skewed proportion of cannabis related
                            convictions in America, where despite equal usage rates among white and minorities, the latter (specifically African-Americans) 
                            have a higher probability of being charged with cannabis related crimes.
                </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h4" align="left" style={{ fontWeight: 200, marginBottom: 10}}>The Solution:</Typography>
                        <Typography variant="body1" align="left">
                            NUMaps is a mobile platform geared towards developing and growing small businesses in underprivleged and underserved communities.
                            By working directly with businesses and providing necessary advertising services (photography, videography, writing etc), we
                            are able to effectively tell the story of each business and its owner(s) while simultaneaously promoting their products and services.
                            <br/>
                            <br/>
                            Leveraging publicly available geographical data allows NUMaps to identify potential opportunity zones for cannabis dispensaries.
                            This data can provide a crucial starting point for minority entrepreneurs looking to enter the cannabis industry.
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
                            <img src={numapsHome} />
                            <img src={numapsMapContext} />
                            <img src={numapsFoodDining} />
                            <img src={numapsHaleyHouse} />
                            <img src={numapsCannabis} />
                            <img src={numapsNETA} />
                            <img src={numapsOpportunityZones} />
                        </Carousel>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}