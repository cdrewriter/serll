import React from 'react';
import styles from './FullCard.module.scss';
import MyGallery from '../Gallery/Gallery';

const FullCard = ({ data }) => {
  const {
    name,
    slug,
    id,
    year,
    pricevalue,
    isEnabled,
    description,
    photos,
    gallery: {images},
    engine,
    chassis,
    netweight,
    categories,
  } = data[0];
  console.log(description);
  function inHtml() {
    return <div dangerouslySetInnerHTML={{ __html: `${description}` }} />;
  }
  return (
    <div className="fullcard">
      <div className={styles.heading}>
        <h1>{name}</h1>
      </div>
      {isEnabled ? <div className={styles.enabled}><span className={styles.enabled}>Авто в наличии</span></div> : null}
      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.specs}>
            {year ? <div className={styles.spec}><span className={styles.def}>Год выпуска:</span><span className={styles.value}>{year}</span></div> : null}
            {engine ? <div className={styles.spec}><span className={styles.def}>Двигатель:</span><span className={styles.value}>{engine}</span></div> : null}
            {chassis ? <div className={styles.spec}><span className={styles.def}>Шасси:</span><span className={styles.value}>{chassis}</span></div> : null}
            {netweight ? <div className={styles.spec}><span className={styles.def}>Грузоподъемность:</span><span className={styles.value}>{netweight}</span></div> : null}
          </div>
          <div className={styles.description}>
              { inHtml()}
          </div>
        </div>
        <div className={styles.gallery}>
          <MyGallery images={images}/>
        </div>
      </div>
      <a>ФуллКад</a>
    </div>
  );
};

export default FullCard;
