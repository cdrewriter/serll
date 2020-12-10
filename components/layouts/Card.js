import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import { Typography, Button, Box } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CardMedia, CardContent, CardActions, Card } from '@material-ui/core';

import styles from './Card.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
  paper: {
    // padding: theme.spacing(2),
    border: '1px solid #0d1e7021',

    //maxWidth: 500,
  },
  specs: {
    padding: '0 16px',
  },
  price: {
    fontSize: 24,
    color: '#0D1E70',
  },
  rub: {
    fontSize: 16,
    color: '#0D1E70',
  },
  cardscontent: {
    padding: theme.spacing(2),
  },
  cardactions: { borderTop: '1px solid #F6F6F6', justifyContent: 'space-around' },
  specrow: {
    display: 'flex',
    alignItems: 'baseline',

    justifyContent: 'space-between',
  },
  speclabel: {
    color: '#707070',
  },
  specvalue: {},
  image: {
    // width: 128,
    //height: 128,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 240,
  },
}));

const NewCard = (props, categorys, caturl) => {
  //console.log(props)

  const classes = useStyles();
  const {
    name,
    image,
    price,
    category,
    year,
    data: { categories },
    engine,
    data: { slug },
  } = props;
  // console.log(categorys);
  //console.log(categories[0].slug)
  return (
    <Card variant="outlined" elevation={0} square className={styles.card} style={{ margin: '0px 0px 2rem' }}>
      <CardMedia className={classes.img} image={image} title={name} />

      <CardContent className={classes.cardscontent}>
        <Typography className={styles.card__link} component="h3" variant="link"  style={{ fontWeight: 700, lineHeight: 1, minHeight: '60px' }}>
          <Link href={`/cars/${categories[0].slug}/${slug}`}>{name}</Link>
        </Typography>
        <Typography className="date">{category}</Typography>
        <div className={classes.specs} >
          <div className={classes.specrow}>
            <Typography gutterBottom className={classes.speclabel} component="div">
              Год выпуска
            </Typography>
            <Typography variant="body2" className={classes.specvalue} gutterBottom component="div">
              {year}
            </Typography>
          </div>
          <div className={classes.specrow}>
            {engine ? (
              <>
                <Typography className={classes.speclabel} gutterBottom component="div">
                  Двигатель
                </Typography>
                <Typography variant="body2" className={classes.specvalue} gutterBottom component="div">
                  {engine}
                </Typography>
              </>
            ) : null}
          </div>
        </div>
      </CardContent>

      <CardActions className={classes.cardactions}>
        <div>
          <span align="right" component="span" className={classes.price}>
            {price}
          </span>
          <span className={classes.rub}>₽</span>
        </div>

        <Link href={`/cars/${categories[0].slug}/${slug}`}>
          <Button square size="medium" elevation={0} variant="outlined" color="primary">
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default NewCard;
