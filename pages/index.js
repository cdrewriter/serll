import React from 'react';
import Formdata from '../components/Formdata';
import { Box, Container, Typography } from '@material-ui/core';
import Demo from '../components/Demo';
import Carous from '../components/sections/carousel';
import PriceSection from '../components/sections/Pricecat';
import ServiceBlock from '../components/sections/ServiceCatlist';

import PageLayout from '../templates/PageLayouti';

export default function Home() {
  return (
    <React.Fragment>
      <PageLayout id="catalog-cars">
        <Demo className="fh" key="fh"/>
        <Carous className="carouselmain"  key="carouselmain"/>
        <Box className="pricelist__block up" >
        <Formdata className="formdata"  key="formdata"/>
        <PriceSection  key="priceSection"/>
        </Box>
        <ServiceBlock key="serviceBlock"/>
      </PageLayout>
    </React.Fragment>
  );
}
