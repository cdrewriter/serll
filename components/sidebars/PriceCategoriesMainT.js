import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Badge, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { ListGroup } from 'react-bootstrap';
import BgCard from '../../components/bgcard';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle, InfoCaption } from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import MainCard from '../cardsflip/MainCard';
import Card from '../../components/cardssc/Card';

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
  },
  margin: {
    margin: 10,
  },
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexFlow: 'column',
    borderBottom: '1px solid #fafafa',
    backgroundColor: 'white',
    margin: '0.1rem auto',
  },
  listitemtext: {
    marginRight: '1rem',
    position: 'relative',
    fontWeight: 700,
    color: 'grey',
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
const StyledBadge = withStyles((theme) => ({
  badge: {
   
 
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '2.25rem',
    backgroundColor: 'rgba(9, 30, 66, 0.06)',
    border: '1px solid transparent',
    color: '#f44336',
    fontSize: '1rem',
    padding: '0.5rem',
  },
}))(Badge);

function ListItemLink(subitem) {
  //console.log(subitem.name);
  const { name, id } = subitem;
  return name, id;
}

function SubItems({ props, category }) {

  const allsubitems = [];
  for (let i = 0; i < props.length; ++i) {
    allsubitems.push(
      <Card
        key={props[i].id}
        engine={props[i].engine}
        year={props[i].year}
        name={props[i].name}
        category={category}
        price={props[i].pricevalue}
        image={props[i].photos.publicUrl}
        data={props[i]}
      />
    );
  }
  return <React.Fragment>{allsubitems}</React.Fragment>;
}

const AllLinks = ({ props, slug }) => {
  //console.log(props.length);
  const subitems = [];
  if (props && props.length) {
    for (let i = 0; i < props.length; ++i) {
      subitems.push(<MainCard key={props[i].id} href={`/cars/${slug}/${props[i].slug}`} data={props[i]} />);
    }
  }
  return (
    <React.Fragment>
      <Box className="App">{subitems}</Box>
    </React.Fragment>
  );
};

const PriceCategories = ({ priceCategories, activeKey }) => {
  const classes = useStyles();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const borderColor = 'grey.400';
  const styles = useGutterBorderedGridStyles({ borderColor, height: '80%' });
  const items = [];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];
    const active = activeKey === cat.slug;
    const avatarStyles = useDynamicAvatarStyles({
      height: 24,
      width: 12,
      radius: 8,
      maxWidth: '1rem',
    });

    items.push(
      <Grid item key={cat.id} xs={12} md={12} lg={12} className={classes.list}>
        <Box pt={4} pl={4} >
              <Box className="uptitle">
                <Typography variant="subtitle2" className={classes.subtit} gutterBottom>
                  Всего в разделе
                </Typography>
                <StyledBadge  style={{display: 'inlineFlex'}} badgeContent={cat.items.length} max={99999} className={classes.badge} />
              </Box>
              <Typography className="category__heading" variant="h4" component="h2" style={{ lineHeight: 1, textTransform: 'uppercase' }} color="primary">
              <Link href={`/cars/${cat.slug}`}>
                {active ? cat.names : <a className={classes.listitemtext}>{cat.name}</a>}
              </Link>  </Typography>
            </Box>

            <hr />        
      
        <Box className="subitems">
          <SubItems props={cat.items} category={cat.name} />
          {/*<AllLinks props={cat.items} slug={cat.slug} qty={cat._itemsMeta.count} />*/}
        </Box>
             
          
          
       
      </Grid>
    );
  }
  return (
    <Grid container justify="space-evenly" spacing={8} direction="row" alignItems="stretch" className="post-categories">
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
