import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cards.module.scss';
import {Typography, Box, Button, CardActions} from '@material-ui/core';


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
      <Button size="small"  style={{    width: '100%' }}  variant="outlined" color="primary" href="#outlined-buttons">
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
        <span className="date">{category}</span>
        <Typography component="h3" variant="h6" style={{ fontWeight: 700, lineHeight: 1, minHeight: '3rem', letterSpacing:'1px'}}>
          {this.props.title}
        </Typography>

        <ul className="specs">
          <li>           
            <Typography variant="subtitle2">
              <span className="label">Год выпуска</span>
              <span className="value">{year}</span>
            </Typography>
          </li>
          <li>
          <Typography variant="subtitle2" gutterBottom>
              <span className="label">Двигатель</span>
              <span className="value">{engine}</span>
            </Typography>
          </li>
        </ul>

        
        
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    const { name, image, price, category, year, engine } = this.props;
    return (
      <article className="card">
        <CardHeader image={image} />
        <CardBody
          year={year}
          engine={engine}
          price={price}
          title={name}
          category={category}
          text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}
        />
        <CardActions>
          <div className="pricevalue">
            <em className="prefix-pricevalue">цена</em>
            {price}
            <em className="sufix-pricevalue">р</em>
          </div>
          <Buttons />
        </CardActions>
      </article>
    );
  }
}
export default Card;
