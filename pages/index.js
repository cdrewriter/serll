import React from 'react';
import Formdata from '../components/Formdata';
import { Paper, Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';
import PriceSection from '../components/sections/Pricecat';
import ServiceBlock from '../components/sections/ServiceCatlist';
import { shadows } from '@material-ui/system';
export default function Home() {

  return (
    <React.Fragment>
        <Box p={4}>
          <Demo className='fh' key="slidesmain"/>
          </Box>
        <Box boxShadow={4} p={4}>
          <Carous key="carussel" />
          <Box my={12}>
          <Typography variant="h3" component="h3" align="center">
            Вы не нашли интересующую Вас технику?
          </Typography>
        </Box>
        </Box>
        
        <Box className='pricelist__block'>
          <Container maxWidth="lg">
            <Paper css={{ padding: '2rem', margin: 0 }} elevation={12}>
              <Formdata key="form" />
            </Paper>
          </Container>
        </Box>  
        <Box className='pricelist__block down'>    
        <Container fixed>
       
          <PriceSection />
          <ServiceBlock />
        </Container>
        </Box>
      </React.Fragment>
  );
}
