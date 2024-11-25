import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/svg/logoSvg.svg';
import styles from '../Header/Header.module.scss';
import MenuBurger from '../MenuBurger';

const Header: React.FC = () => {
  const navList = ['Credit card', 'Product', 'Account', 'Resources'];

  return (
    <header className={styles.header}>
      <div className={styles.header__items}>
        <Link to='/'>
          <img
            src={logoSvg}
            alt="Neoflex logo"
            aria-label="Neoflex logo"
            tabIndex={1}/>
        </Link>
        <nav>
          <MenuBurger />
          <ul className={styles.header__navigateItems}>
            {navList.map((string: string, index: number) => (
              <li key={string} className={styles.header__navigateItem}>
                <Link
                  to="/"
                  aria-label={`Navigate to ${string}`}
                  tabIndex={2 + index}>
                  {string}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/"
          className="link-blue"
          aria-label="Go to Online Bank"
          tabIndex={navList.length + 2}>
          Online Bank
        </Link>
      </div>
    </header>
  )
}

export default Header;
