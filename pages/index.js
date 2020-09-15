import React from 'react';
import Formdata from '../components/Formdata';
import { Paper, Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';
import PriceSection from '../components/sections/Pricecat';
import ServiceBlock from '../components/sections/ServiceCatlist';

export default function Home() {

  return (
    <React.Fragment>
        
          <Demo className='fh' key="slidesmain"/>
       
        
          <Carous key="carussel" />
       
        <Box my={12}>
          <Typography variant="h3" component="h3" align="center">
            Вы не нашли интересующую Вас технику?
          </Typography>
        </Box>
       
          <Container maxWidth="lg">
            <Paper css={{ padding: '2rem' }} elevation={12}>
              <Formdata key="form" />
            </Paper>
          </Container>
             
        <Container fixed>
      
          <PriceSection />
          <ServiceBlock />
        </Container>
      </React.Fragment>
  );
}
