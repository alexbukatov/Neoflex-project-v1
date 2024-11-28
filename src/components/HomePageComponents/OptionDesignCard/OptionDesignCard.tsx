import React from 'react';
import { Link } from 'react-router-dom';
import image1 from 'assets/img-card/cardImage1.png';
import image2 from 'assets/img-card/cardImage2.png';
import image3 from 'assets/img-card/cardImage3.png';
import image4 from 'assets/img-card/cardImage4.png';
import styles from './OptionDesignCard.module.scss';

const IMAGE_ITEMS: string[] = [image1, image2, image3, image4];

const OptionDesignCard = () => {
  return (
    <section className={styles.option}>
      <div className={styles.option__block}>
        <h2
          className={styles.option__blockHeader}
          tabIndex={1}
          aria-label="Choose the design you like and apply for a card right now">
          Choose the design you like and apply for card right now
        </h2>
        <Link to="/" className="link-blue" aria-label="Choose your card design" tabIndex={2}>
          Choose the card
        </Link>
      </div>
      <div className={styles.option__image}>
        {IMAGE_ITEMS.map((item: string, index: number) => (
          <img
            key={index}
            src={item}
            alt={`Card design ${index + 1}`}
            aria-label={`Preview of card design ${index + 1}`}
            tabIndex={index + 3}
          />
        ))}
      </div>
    </section>
  );
};

export default OptionDesignCard;
