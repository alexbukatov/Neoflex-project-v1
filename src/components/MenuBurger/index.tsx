import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBurger.module.scss';
import menuSvg from '../../assets/svg/menu-burger.svg';

const MenuBurger: React.FC = () => {
  const navList = ['Credit card', 'Product', 'Account', 'Resources'];
  const [isVisible, setIsVisible] = React.useState(false);

  const onClickMenuBurger = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={styles.navigate}>
      <img
        onClick={onClickMenuBurger}
        src={menuSvg}
        alt="Menu button"
        aria-label="Toggle navigation menu"
        tabIndex={1}/>
      {isVisible && (
        <ul className={styles.navigate__items}>
          {navList.map((string: string, index: number) => (
            <li
              onClick={onClickMenuBurger}
              key={string}
              className={styles.navigate__item}>
              <Link
                to="/"
                aria-label={`Navigate to ${string}`}
                tabIndex={index + 2}>
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
