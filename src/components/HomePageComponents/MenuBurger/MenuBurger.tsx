import { Link } from 'react-router-dom';
import styles from './MenuBurger.module.scss';
import menuSvg from 'assets/svg/menu-burger.svg';
import { NAV_ITEMS } from 'ui/NavHeader/NavHeader';

const MenuBurger = () => {
  return (
    <div className={styles.menuBurger}>
      <input id="menuToogle" className={styles.menuBurger__toogle} type="checkbox" />
      <label className={styles.menuBurger__btn} htmlFor="menuToogle">
        <img
          className={styles.menuBurger__image}
          src={menuSvg}
          alt="Menu button"
          aria-label="Toggle navigation menu"
        />
      </label>
      <ul className={styles.menuBurger__items}>
        {NAV_ITEMS.map((string: string, index: number) => (
          <li key={string} className={styles.menuBurger__item}>
            <Link to="/" aria-label={`Navigate to ${string}`} tabIndex={2 + index}>
              {string}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBurger;
