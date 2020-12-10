import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link';
import InfoIcon from '@material-ui/icons/Info';
import { Divider } from '@material-ui/core';
import PriceCarCategories from './sidebars/PriceCarCategories';
import PriceCategories from './sidebars/PriceCategories';
import { CatList } from '../components/catlistquery';
import { CatCarList } from '../components/catcarlistquery';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',    
    //margin: '11rem auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '23vh',
    overflow: 'hidden',
 
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listicon: {
    fontSize: '3rem',
    marginLeft: '8px',
  },
  submenu: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyItems: 'normal',
    marginLeft: '48px',
    width: '100%',
  },
  title_collapsed_sidebar: {
    fontSize: '10rem',
  },
}));

export default function NestedMenu({ carcat, itcat, activeKey }) {
  const classes = useStyles();
 
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);

  const handleClick = () => {
    setOpen(!open); 
    if (opened) {
      setOpened(!opened);      
    }
  };
  const handleClicked = () => {
    setOpened(!opened);
    if (open) {
      setOpen(!open);      
    }

  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <ListItem className="first_lvl_menu" key="tehnika" button onClick={handleClick}>
        <ListItemIcon className={classes.listicon}>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText  
    style={{ whiteSpace: 'nowrap', color: '#0d1e70',
    fontWeight: 'normal', fontSize: '50' }}  primary="Техника" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    
      <Collapse in={open} style={{ background: 'rgba(0, 0, 0, 0.1)',
     overflowY: 'auto',scrollbarWidth: 'none', overflowX: 'hidden' }} timeout="auto" unmountOnExit>
        <ListItem disableGutters={true}>
         
            <CatCarList className={classes.submenu} active={activeKey} pt={10}/>           
        
        </ListItem>
      </Collapse>
      <Divider />

      <ListItem className="first_lvl_menu" key="spareparts" button onClick={handleClicked}>
        <ListItemIcon className={classes.listicon}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText  
    style={{ whiteSpace: 'nowrap', color: '#0d1e70',
    fontWeight: 'normal', fontSize: '50' }}  primary="Запасные части" />
        {opened ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse  style={{ background: 'rgba(0, 0, 0, 0.1)',
     overflowY: 'auto', scrollbarWidth: 'none', overflowX: 'hidden' }} in={opened} timeout="auto" unmountOnExit>
      
        <ListItem disableGutters={true}>
        
          <CatList className={classes.submenu} active={activeKey} pt={10}/>
           
         
        </ListItem>
      </Collapse>
      <Divider />
      <ListItem className="first_lvl_menu" button>
      <ListItemIcon className={classes.listicon}>
          <BuildIcon />
        </ListItemIcon>
        <Link href="/services">
        <ListItemText  
    style={{ whiteSpace: 'nowrap', color: '#0d1e70',
    fontWeight: 'normal', fontSize: '50' }}  primary="Сервис" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem className="first_lvl_menu" button>
      <ListItemIcon className={classes.listicon}>
          <InfoIcon />
        </ListItemIcon>
        <Link href="/">
        <ListItemText  
    style={{ whiteSpace: 'nowrap', color: '#0d1e70',
    fontWeight: 'normal', fontSize: '50' }}  variant="subtitle1" primary="Контакты" />
        </Link>
      </ListItem>
    </List>
  );
}

NestedMenu.propTypes = {
  carcat: PropTypes.any,
  itcat: PropTypes.any,
};
