import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGraphQL } from 'graphql-react';
import { Box, Paper, Container, Grid, SvgIcon } from '@material-ui/core';
import { Badge, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../../templates/PageLayoutmslug';
import PriceCategories from '../../../components/sidebars/PriceCategoriesMainT';
import { makeStyles } from '@material-ui/styles';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import BlockHead from '../../../templates/BlockHead';
import { grey } from '@material-ui/core/colors';
//import BgCard from '../../../components/bgcard';
import Card from '../../../components/layouts/Card';
import CircularIndeterminate from '../../../components/loading';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(0),
  },
}));
const StyledBadge = withStyles((theme) => ({
    badge: {
     
   
      height: '2.5rem',
      width: '2.5rem',
      borderRadius: '2.25rem',
      backgroundColor: 'rgba(9, 30, 66, 0.06)',
      border: '1px solid transparent',
      color: '#0d1e70',
      fontSize: '1rem',
      padding: '0.5rem',
    },
  }))(Badge);
  
function SparePartsIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="translate(-121 -5635)">
        <path
          d="M78.794,26.355,73.33,23.319a36.571,36.571,0,0,0,.258-3.944,36.571,36.571,0,0,0-.258-3.943l5.464-3.037a3.8,3.8,0,0,0,1.851-4.436A39.608,39.608,0,0,0,71-8.1,4.137,4.137,0,0,0,66.072-8.8L60.616-5.763a39.482,39.482,0,0,0-7.094-3.948v-6.067a3.907,3.907,0,0,0-3.1-3.769,43.434,43.434,0,0,0-19.23,0,3.907,3.907,0,0,0-3.1,3.769v6.067A39.471,39.471,0,0,0,21-5.763L15.547-8.8a4.137,4.137,0,0,0-4.932.691A39.609,39.609,0,0,0,.974,7.959a3.8,3.8,0,0,0,1.851,4.436l5.464,3.037a36.571,36.571,0,0,0-.258,3.943,36.572,36.572,0,0,0,.258,3.944L2.825,26.355A3.8,3.8,0,0,0,.974,30.791a39.609,39.609,0,0,0,9.64,16.064,4.138,4.138,0,0,0,4.932.691L21,44.513A39.47,39.47,0,0,0,28.1,48.462v6.067a3.907,3.907,0,0,0,3.1,3.769,43.434,43.434,0,0,0,19.23,0,3.907,3.907,0,0,0,3.1-3.769V48.462a39.491,39.491,0,0,0,7.094-3.948l5.456,3.032A4.137,4.137,0,0,0,71,46.855a39.609,39.609,0,0,0,9.64-16.064A3.8,3.8,0,0,0,78.794,26.355Zm-10.972,16.2-7.759-4.313c-4.522,3.721-6.126,4.657-11.9,6.622v8.626a45.435,45.435,0,0,1-7.351.722,45.435,45.435,0,0,1-7.351-.722V44.868c-5.633-1.916-7.264-2.806-11.9-6.622L13.8,42.559A34.554,34.554,0,0,1,6.436,30.307L14.2,25.994c-1.095-5.712-1.1-7.523,0-13.239L6.436,8.443A34.577,34.577,0,0,1,13.8-3.81L21.556.506c4.587-3.78,6.21-4.688,11.9-6.624v-8.626a45.365,45.365,0,0,1,7.351-.723,45.365,45.365,0,0,1,7.351.723v8.626c5.693,1.936,7.316,2.845,11.9,6.624L67.823-3.81A34.574,34.574,0,0,1,75.184,8.443l-7.763,4.313c1.1,5.714,1.1,7.523,0,13.239l7.763,4.313A34.553,34.553,0,0,1,67.823,42.559ZM40.81,3.891c-8.87,0-16.086,6.946-16.086,15.484S31.94,34.859,40.81,34.859,56.9,27.913,56.9,19.375,49.679,3.891,40.81,3.891Zm0,25.807A10.541,10.541,0,0,1,30.086,19.375a10.731,10.731,0,0,1,21.447,0A10.541,10.541,0,0,1,40.81,29.7Z"
          transform="translate(140.19 5655.625)"
          fill="#ebebeb"
        />
        <path
          d="M78.794,26.355,73.33,23.319a36.571,36.571,0,0,0,.258-3.944,36.571,36.571,0,0,0-.258-3.943l5.464-3.037a3.8,3.8,0,0,0,1.851-4.436A39.608,39.608,0,0,0,71-8.1,4.137,4.137,0,0,0,66.072-8.8L60.616-5.763a39.482,39.482,0,0,0-7.094-3.948v-6.067a3.907,3.907,0,0,0-3.1-3.769,43.434,43.434,0,0,0-19.23,0,3.907,3.907,0,0,0-3.1,3.769v6.067A39.471,39.471,0,0,0,21-5.763L15.547-8.8a4.137,4.137,0,0,0-4.932.691A39.609,39.609,0,0,0,.974,7.959a3.8,3.8,0,0,0,1.851,4.436l5.464,3.037a36.571,36.571,0,0,0-.258,3.943,36.572,36.572,0,0,0,.258,3.944L2.825,26.355A3.8,3.8,0,0,0,.974,30.791a39.609,39.609,0,0,0,9.64,16.064,4.138,4.138,0,0,0,4.932.691L21,44.513A39.47,39.47,0,0,0,28.1,48.462v6.067a3.907,3.907,0,0,0,3.1,3.769,43.434,43.434,0,0,0,19.23,0,3.907,3.907,0,0,0,3.1-3.769V48.462a39.491,39.491,0,0,0,7.094-3.948l5.456,3.032A4.137,4.137,0,0,0,71,46.855a39.609,39.609,0,0,0,9.64-16.064A3.8,3.8,0,0,0,78.794,26.355Zm-10.972,16.2-7.759-4.313c-4.522,3.721-6.126,4.657-11.9,6.622v8.626a45.435,45.435,0,0,1-7.351.722,45.435,45.435,0,0,1-7.351-.722V44.868c-5.633-1.916-7.264-2.806-11.9-6.622L13.8,42.559A34.554,34.554,0,0,1,6.436,30.307L14.2,25.994c-1.095-5.712-1.1-7.523,0-13.239L6.436,8.443A34.577,34.577,0,0,1,13.8-3.81L21.556.506c4.587-3.78,6.21-4.688,11.9-6.624v-8.626a45.365,45.365,0,0,1,7.351-.723,45.365,45.365,0,0,1,7.351.723v8.626c5.693,1.936,7.316,2.845,11.9,6.624L67.823-3.81A34.574,34.574,0,0,1,75.184,8.443l-7.763,4.313c1.1,5.714,1.1,7.523,0,13.239l7.763,4.313A34.553,34.553,0,0,1,67.823,42.559ZM40.81,3.891c-8.87,0-16.086,6.946-16.086,15.484S31.94,34.859,40.81,34.859,56.9,27.913,56.9,19.375,49.679,3.891,40.81,3.891Zm0,25.807A10.541,10.541,0,0,1,30.086,19.375a10.731,10.731,0,0,1,21.447,0A10.541,10.541,0,0,1,40.81,29.7Z"
          transform="translate(120.19 5668.625)"
          fill="#c7c7c7"
        />
      </g>
    </SvgIcon>
  );
}

const BlogDetail = () => {
  const { query } = useRouter();
  const { slug } = query;

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query PostDetail($postWhere: String) {
        allItemCars(where: { categories_some: { slug: $postWhere } }) {
          name
          slug
          id
          year
          pricevalue
          description
          photos {
            publicUrlTransformed(transformation: {gravity:"center",height:"400",width:"600"})
          }
          engine
          chassis
          categories {
            name
            slug
            id
            description
            _itemsMeta {
              count
            }
          }          
        }
        allItemCarCategories {
          name
          slug
          id
          description
          _itemsMeta {
            count
          }
        }
      }
      `,
      variables: {
        postWhere: slug,
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  const classes = useStyles();

  const { loading, cacheValue } = result;

  if (cacheValue && cacheValue.data) {
    const { allItemCars, allItemCarCategories } = cacheValue.data;
 //console.log(allItemCars)
 //console.log(allItemCarCategories)
    const { categories } = allItemCars[0];
    const postname = categories[0].name;
    const postslug = categories[0].slug;
    const postdescription = allItemCars[0].description;
    const cars = [];
    const carscat = [];

    if (allItemCarCategories && allItemCarCategories.length) {
        for (let i = 0; i < allItemCarCategories.length; ++i) {
         
            
         
            const active = slug === allItemCarCategories[i].slug;
     
            carscat.push(
           
            <Grid item xs={3}>
            <Box  pl={4} >
                  
                  <Typography className="category__heading" variant="h3" component="h2" style={{ lineHeight: 1, textTransform: 'uppercase' }} color="primary">
                  <Link href={`/cars/${allItemCarCategories[i].slug}`}>
                    <a className={classes.listitemtext}>{allItemCarCategories[i].name}</a>
                  </Link>  </Typography>
                  <Box  pt={4} className="uptitle">
                    <Typography variant="subtitle2" className={classes.subtit} gutterBottom>
                      Всего в разделе
                    </Typography>
                    <StyledBadge  style={{display: 'inlineFlex'}} badgeContent={allItemCarCategories[i]._itemsMeta.count} max={99999} className={classes.badge} />
                  </Box>
                </Box>
                </Grid>
            
          );
         
        }
      };
      if (allItemCars && allItemCars.length) {
        for (let i = 0; i < allItemCars.length; ++i) {
         
         
          //console.log(postname)
          cars.push(
           
              <Card
                className="vert"
                key={allItemCars[i].id}
                engine={allItemCars[i].engine}
                year={allItemCars[i].year}
                name={allItemCars[i].name}
                categorys={allItemCars[i].categories}
                price={allItemCars[i].pricevalue}
                image={allItemCars[i].photos.publicUrlTransformed}
                data={allItemCars[i]}
              />
          
          );
     
        }
      };
    

    if (!allItemCars.length) {
      // When post is not found
      return 'Not fou1nd';
    };
    //console.log(postslug);
    return (
      <>
       <Layout categ={allItemCarCategories} activeKey={slug} id="catalog-cars">
          <Box display="flex" flexDirection="column" justifyContent="center">
            
              <Box>
                <Breadcrumbs
                  pageTitle="Каталог Техники"
                  pagePath="/cars"
                  parts={[
                    {
                      title: 'Главная',
                      href: '/',
                    },
                  ]}
                />
              </Box>
              <Box my={8} style={{ display: 'flex', flexWrap: 'wrap' }}>
                <SparePartsIcon
                  style={{
                    marginLeft: '2rem',
                    marginRight: '2rem',
                    marginBottom: '2rem',
                    transform: 'scale(2.5) translateY(0.5rem)',
                    color: grey[300],
                  }}
                  viewBox="0 0 80 91.429"
                />
                <BlockHead heading={postname}  justifyContent="center" />
            
              </Box>
              {cars}
              <PriceCategories priceCategories={allItemCars} activeslug={postslug} activeKey={slug} />
            
         
          </Box>
         <Box className="categorycars">
        
          </Box>
        
        </Layout>
      </>
    );
  }

  return loading ? <CircularIndeterminate /> : '';
};

BlogDetail.propTypes = {
  activeKey: PropTypes.any,
};

export default BlogDetail;
