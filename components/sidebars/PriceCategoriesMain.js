import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '440px',
  },
  iconlogo: {
    position: 'relative',
  },
  paper: {
    minWidth: '100%',
    backgroundColor: '#f4f4f4e8',
    border: '0.125rem solid #e3e3e3',
    borderRadius: 0,
  },
  badge: {},
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listitemtext: {
    flex: 1,
    marginRight: '1rem',

    fontSize: '1rem',
    fontWeight: 700,
lineHeight: 1,
textDecoration: 'underline',
  },
  listitem: {
    minHeight: '5rem',
    height: '100%',
  },
  'listitem:nthChild(3n)': {
    borderLeft: '2px solid blue',
  },
  Icon: {
    root: {
      '& > .fa': {
        margin: theme.spacing(2),
      },
    },
  },
}));
function ListItemTextN(props) {
  return <Typography  component="a" variant="h2" {...props} />;
}
const PriceCategories = ({ priceCategories, activeKey }) => {
  const classes = useStyles();
  const items = [];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];
    const active = activeKey === cat.slug;
    items.push(
      <Grid item key={cat.id} xs={12} md={6} lg={6} className={classes.list}>
        <Paper elevation={0} className={classes.paper}>
          <ListItem button className={classes.listitem}>
           
              {active ? (
                 <Link href={`/catalog/${cat.slug}`} className="active">{cat.name}</Link>
              ) : (
                <Link href={`/catalog/${cat.slug}`} >{cat.name}</Link>
              )}
          
          </ListItem>
        </Paper>
      </Grid>
    );
  }
  return (
    <Grid container justify="space-evenly" spacing={4} direction="row" alignItems="stretch" className="post-categories">
      {items}
    </Grid>
  );
};

PriceCategories.propTypes = {
  activeKey: PropTypes.string,
  priceCategories: PropTypes.arrayOf(PropTypes.shape(pricecategoryPropTypes)),
};
PriceCategories.defaultProps = {
  activeKey: '',
};
export default PriceCategories;
