import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBurger.module.scss';
import menuSvg from 'assets/svg/menu-burger.svg';
import { NAV_ITEMS } from 'ui/NavHeader/NavHeader';

const MenuBurger = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickMenuBurger = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={styles.navigate} tabIndex={-1}>
      <img
        onClick={onClickMenuBurger}
        src={menuSvg}
        alt="Menu button"
        aria-label="Toggle navigation menu"
      />
      {isVisible && (
        <ul className={styles.navigate__items}>
          {NAV_ITEMS.map((string: string, index: number) => (
            <li onClick={onClickMenuBurger} key={string} className={styles.navigate__item}>
              <Link to="/" aria-label={`Navigate to ${string}`}>
                {string}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MenuBurger;
