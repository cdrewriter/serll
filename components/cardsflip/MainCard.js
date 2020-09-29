import React, { Fragment } from 'react';
import CardHeader from './CardHeader';

import CardContent from './CardContent';




const MainCard = ({ data }) => {
  
  //console.log(data)
  const { name, slug, photos, id, engine, chassis, themeColorRGB } = data;
  return ( 
              <Fragment>
              <div className="main-card-wrapper">        
                  <Fragment>
                    <CardHeader make={name} imgUrl={photos.publicUrl} themeColorRGB={themeColorRGB} />
                    <CardContent carData={data} />
                  </Fragment>
              
              </div>
            </Fragment>
        )   
  
  
};


export default MainCard;