import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
   
    '& > *': {
      margin: theme.spacing(1),
    },
    '& > svg': {
      marginRight: theme.spacing(2),
      width: theme.spacing(8),
      height: theme.spacing(8),
      alignSelf: 'center',
    },
  },
  center: {
    margin: 'auto',
  },
  iconlogo: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  SvgIcon: {},
}));

const BlockHead = (props) => {


  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="inline-flex"
      flexDirection="row"
      alignItems="left"
      justifyContent="start"
      p={1}
      m={1}
    >
      {props.children}
      <Box className="title__subtitle">
      <Typography
        variant="h4"
        component="h2"
        style={{ lineHeight: 1, textTransform: 'uppercase', }}
        color="primary"
      >
        {props.heading}
      </Typography>
      <Typography variant="subtitle1" color="secondary" display="inline">
        {props.subheading}
      </Typography>
      </Box>
    </Box>
  );
};

export default BlockHead;
