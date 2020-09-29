import React from 'react'
import { Spring } from 'react-spring'

const CardContent = ( {carData} ) => {
  const { name, slug, photos, pricevalue, id, engine, chassis, themeColorRGB } = carData;
  const dataall = carData;
  //console.log(dataall)
  const contentLines = [];
  if (carData && carData.length) {
    for (let i = 0; i < carData.length; ++i) {
      contentLines.push(
        <>
        <ContentLine className="lina"
        key={id}
        title={name}
        value={pricevalue}
        delay={100 + 40 * i}
      />
      </>
      );
    }
  };

  return (
    <div className='content-wrapper'>
      <Spring
        to={{ transform: 'scaleY(1)' }}
        from={{ transform: 'scaleY(0)' }}
        config={{ tension: 550, friction: 50, clamp: true }}
      >
        {props => (
          <div className='content-section heading-main' style={props}>
            <span className='content-heading'>
              <h2>{name}</h2> <span className='subheading'>{chassis}</span>
            </span>
            <span className='subheading'>{engine}</span>
          </div>
        )}
      </Spring>
      {contentLines}
    </div>
  )
}

const ContentLine = ({ title, value, delay }) => {
  return (
    <Spring
      to={{ transform: 'scaleY(1)' }}
      from={{ transform: 'scaleY(0)' }}
      config={{ tension: 550, friction: 50, clamp: true }}
      delay={delay}
    >
      {props => (
        <div style={props} className='content-section content-line'>
          <span className='content-line-title'>{title}</span>
          <span className='content-line-value'>{value}</span>
        </div>
      )}
    </Spring>
  )
}

export default CardContent
