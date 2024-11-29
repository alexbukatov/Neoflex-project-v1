import currencySvg from '../../../assets/svg/currencySvg.svg';
import styles from './CoursesBlock.module.scss';
import { Link } from 'react-router-dom';

type TrateItems = {
  name: string;
  price: number;
};

const RATE_ITEMS: TrateItems[] = [
  { name: 'USD', price: 60.78 },
  { name: 'CHY', price: 9.08 },
  { name: 'CHF', price: 64.78 },
  { name: 'EUR', price: 68.78 },
  { name: 'JPY', price: 0.46 },
  { name: 'TRY', price: 3.39 },
];

const CoursesBlock = () => {
  return (
    <section className={styles.currency}>
      <div className={styles.currency__top}>
        <h3>Exchange rate in internet bank</h3>
        <p className={styles.currency__topUpdate}>Update every 15 minutes, MSC 09.08.2022</p>
      </div>
      <div className={styles.currency__rate}>
        <div>
          <p className={styles.currency__rateHeader}>Currency</p>
          <div className={styles.currency__rateMiddle}>
            <ul className={styles.currency__rateList}>
              {RATE_ITEMS.map((currencyObj, index) => (
                <li key={currencyObj.name} className={styles.currency__rateItem}>
                  <p className={styles.currency__rateItem__name}>{currencyObj.name}:</p>
                  <p className={styles.currency__rateItem__text} tabIndex={index + 1}>
                    {currencyObj.price}
                  </p>
                </li>
              ))}
            </ul>
            <img src={currencySvg} alt="Currency illustration" aria-label="Currency illustration" />
          </div>
        </div>
        <Link tabIndex={8} to="/" className={styles.currency__rateBottom}>
          All courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesBlock;
