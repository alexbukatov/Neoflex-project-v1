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
      <h3>Exchange rate in internet bank</h3>
      <p className={styles.currency__update}>Update every 15 minutes, MSC 09.08.2022</p>
      <div className={styles.currency__rate}>
        <p className={styles.currency__rateHeader}>Currency</p>
        <div className={styles.currency__rateMiddle}>
          <ul className={styles.currency__rateList}>
            {RATE_ITEMS.map((currencyObj, index: number) => (
              <li key={currencyObj.name} className={styles.currency__rateItem}>
                <p className={styles.currency__rateItem__name}>{currencyObj.name}:</p>
                <p tabIndex={index + 1}>{currencyObj.price}</p>
              </li>
            ))}
          </ul>
          <img src={currencySvg} alt="Currency illustration" aria-label="Currency illustration" />
        </div>
      </div>
      <Link tabIndex={8} to="/" className={styles.currency__rateLink}>
        All courses
      </Link>
    </section>
  );
};

export default CoursesBlock;
