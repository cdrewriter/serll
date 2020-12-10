import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './cards.module.scss';
import { Typography, Box, Button, CardActions } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import ButtonBase from '@material-ui/core/ButtonBase';
const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

class CardHeader extends React.Component {
  render() {
    const { image, price, category } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">{price}</h4>
      </header>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <Button size="small" style={{ width: '100%' }} variant="outlined" color="primary" href="#outlined-buttons">
        Подробнее
      </Button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    const { category, price, year, engine } = this.props;
    return (
      <div className="card-body">
        <ul className="specs">
          <li>
            <Typography gutterBottom variant="caption">
              Год выпуска
            </Typography>
            <Typography variant="body2" gutterBottom>
              {year}
            </Typography>
          </li>
          <li>
            <Typography gutterBottom variant="caption">
              Двигатель{' '}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {engine}
            </Typography>
          </li>
        </ul>
      </div>
    );
  }
}

const Card = (props) => {
  //console.log(props);
  const classes = useStyles();
  const { name, image, price, category, year, engine } = props;
  return (

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           
            <CardHeader image={image} />
          
         
          </Grid>
          <Grid item>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs={12}>
                <span className="date">{category}</span>
                <Typography
                  component="h3"
                  variant="h6"
                  style={{ fontWeight: 700, lineHeight: 1, letterSpacing: '1px' }}
                >
                  {props.name}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CardBody
                  year={year}
                  engine={engine}
                  price={price}
                  title={name}
                  category={category}
                  text={
                    'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Typography variant="subtitle1" className="pricevalue">
                      {' '}
                      {price}
                      <em className="sufix-pricevalue">р</em>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      <Buttons />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  
  );
};

export default Card;
