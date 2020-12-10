import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography, Badge } from '@material-ui/core';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';

import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

import Card from '../../components/layouts/Card';

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
  },
  badge: {
    paddingLeft: '1rem',
    display: 'inline-flex',
  },
  subtit: {
    display: 'inline-flex',
    marginRight: '1rem',
  },
  margin: {
    margin: 10,
  },
  category_bar: {
    gridColumn: 'span 6',
  },
  listline: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.14);',
  },
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexFlow: 'column',

    margin: '0.1rem auto',
  },
  listitemtext: {
    marginRight: '1rem',
    position: 'relative',
    fontWeight: 700,
    color: 'rgb(0 0 0 / 50%)',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    '&:after': {
      content: '" "',
      height: '2px',
      width: '100%',
      backgroundColor: '#8080804d',
      position: 'absolute',
      bottom: '0px',
      left: 0,
    },
  },

  listitem: {
    minHeight: '5rem',
    height: '100%',
    fontSize: '2rem',
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
function SubItems({ props, category, caturl }) {
  const allsubitems = [];
  for (let i = 0; i < props.length; ++i) {
    allsubitems.push(
      <Card
        key={props[i].id}
        engine={props[i].engine}
        year={props[i].year}
        name={props[i].name}
        categorys={category}
        price={props[i].pricevalue}
        caturl={caturl}
        image={props[i].photos.publicUrlTransformed}
        data={props[i]}
      />
    );
  }
  return <React.Fragment>{allsubitems}</React.Fragment>;
}

const PriceCategories = ({ priceCategories, activeKey, activeslug }) => {
  const classes = useStyles();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const borderColor = 'grey.400';

  const styles = useGutterBorderedGridStyles({ borderColor, height: '80%' });
  const items = [];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];

    const [categories] = priceCategories[i];
    const active = activeKey === cat.slug;
    const avatarStyles = useDynamicAvatarStyles({
      height: 24,
      width: 12,
      radius: 8,
      maxWidth: '1rem',
    });
    items.push(
      <Box className={classes.category_list}>
      <Box className={classes.category_bar}>
          <Typography variant="h5" component="h3" style={{ lineHeight: 1, textTransform: 'uppercase' }} color="primary">
            {categories.categories[0].name}
          </Typography>
          <Box pt={4} className="uptitle">
            <Typography variant="subtitle2" className={classes.subtit} gutterBottom>
              Всего в разделе
            </Typography>
            <StyledBadge
              style={{ display: 'inlineFlex' }}
              badgeContent={categories.categories[0]._itemsMeta.count}
              max={99999}
              className={classes.badge}
            />
          </Box>
        </Box>
      <Box className={`${classes.listline} +  subitems`}>
        
        <SubItems props={cat} category={cat.name} caturl={activeslug} />
      </Box>
      </Box>
    );
  }
  return (
    <Box container justify="space-evenly" spacing={8} direction="row" alignItems="stretch" className="post-categories">
      {items}
    </Box>
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
