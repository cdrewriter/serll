import React from 'react';
import { jsx } from '@emotion/core';
import Link from 'next/link';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Box, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
/** @jsx jsx */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ServiceItems(props) {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      <Box m={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}
ServiceItems.propTypes = {
  children: PropTypes.node,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

function ItemCategory({ itemcategory }) {
  const [expanded, setExpanded] = React.useState('panel-${itemcategory.id}');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid item xs={6}>
      <ExpansionPanel
        square
        expanded={expanded === `panel-${itemcategory.id}`}
        onChange={handleChange(`panel-${itemcategory.id}`)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${itemcategory.id}d-content`}
          id={`panel-${itemcategory.id}d-header`}
        >
          <Typography>{itemcategory.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table>
            <TableBody>
              {itemcategory.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.pricevalue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
}

export default function TabServ({ itemcategories }){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className={classes.root}>
      <Box bgcolor="common.white" color="primary.contrastText">
        <Container maxWidth="lg">
          <AppBar style={{ color: '#0D1E70', backgroundColor: 'transparent', boxShadow: 'none' }} position="static">
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
              <LinkTab label="Доработки техники" href="/drafts" {...a11yProps(0)} />
              <LinkTab label="Монтаж КМУ" href="/trash" {...a11yProps(1)} />
              <LinkTab label="Ремонт агрегатов" href="/spam" {...a11yProps(2)} />
              <LinkTab label="Техническое обслуживание" href="/spam" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </Container>
        <Box style={{ background: '#EBEBEB' }}>
          <Container maxWidth="lg">
            <TabPanel value={value} index={0}>
     
                <Grid container spacing={3}>
                  {itemcategories.length ? (
                    itemcategories.map(itemcategory => <ItemCategory itemcategory={itemcategory} key={itemcategory.id} slugcat={itemcategory.slugcat} items={itemcategories.items}/>)
                  ) : (                 
                    <p>No posts to display</p>
                  )}
                </Grid>
                  
            </TabPanel>
            <TabPanel value={value} index={1}>
              Page Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Page Three
            </TabPanel>
          </Container>
        </Box>
      </Box>
    </div>
  );
};
