import React from 'react';
import Formdata from '../components/Formdata';
import { Paper, Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';
import PriceSection from '../components/sections/Pricecat';
import ServiceBlock from '../components/sections/ServiceCatlist';
import { shadows } from '@material-ui/system';


import PageLayout from '../templates/PageLayouti';




export default function Home() {
  return (
    <React.Fragment>
      <PageLayout id="catalog-cars">
      <Box p={4}>
        <Demo className="fh" key="slidesmain" />
      </Box>
      <Box boxShadow={4} position="relative" pb={30}>
        <Carous className="carouselmain" key="karus" />
        <Box my={12}>
          <Typography variant="h3" component="h3" align="center">
            Вы не нашли интересующую Вас технику?
          </Typography>
        </Box>
   
      </Box>
      <Box className="pricelist__block up">
          <Container maxWidth="lg">
            <Paper css={{ padding: '2rem', margin: 0 }} elevation={12}>
              <Formdata key="form" />
            </Paper>
          </Container>
        </Box>
      <Box m={0} className="pricelist__block down">
        <Container fixed>
          <PriceSection />
         
        </Container>
      </Box>
      <ServiceBlock />
      </PageLayout>
    </React.Fragment>
    
  );
}
