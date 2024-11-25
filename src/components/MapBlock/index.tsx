import React from 'react';
import MapImage from '../../assets/homeImage/Map.png';
import styles from './MapBlock.module.scss';

const MapBlock: React.FC = () => {
  return (
    <section className={styles.map}>
      <h3
        className={styles.map__header}
        tabIndex={1}
        aria-label="Header: You can use our services anywhere in the world"
      >
        You can use our services anywhere in the world
      </h3>
      <p
        className={styles.map__text}
        tabIndex={1}
        aria-label="Text: Withdraw and transfer money online through our application"
      >
        Withdraw and transfer money online through our application
      </p>
      <img
        className={styles.map__image}
        src={MapImage}
        alt="World map"
        aria-label="World map showing service availability"
        tabIndex={3}
      />
    </section>
  );
};

export default MapBlock;
