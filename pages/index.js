import React from 'react';
import Formdata from '../components/Formdata';
import { Paper, Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';
import IntroSection from '../components/sections/IntroSection';
import WhySection from '../components/sections/WhySection';
import PriceSection from '../components/sections/Pricecat';
import ServiceSection from '../components/sections/ServiceCatlist';

export default function Home() {

  return (
    <React.Fragment>
        <Box className='fh'>
          <Demo />
        </Box>
        <Box>
          <Carous key="carus"/>
        </Box>
        <Box my={12}>
          <Typography variant="h3" component="h3" align="center">
            Вы не нашли интересующую Вас технику?
          </Typography>
        </Box>
        <Box>
          <Container maxWidth="lg">
            <Paper css={{ padding: '2rem' }} elevation={12}>
              <Formdata key="form" />
            </Paper>
          </Container>
        </Box>      
        <Container fixed>
      
          <PriceSection />
          <ServiceSection />
        </Container>
      </React.Fragment>
  );
}
