import MenuBurger from '../../components/HomePageComponents/MenuBurger/MenuBurger';
import styles from './NavHeader.module.scss';
import { Link } from 'react-router-dom';

export const NAV_ITEMS: string[] = ['Credit card', 'Product', 'Account', 'Resources'];
const NavHeader = () => {
  return (
    <nav>
      <MenuBurger />
      <ul className={styles.navigate}>
        {NAV_ITEMS.map((string: string, index: number) => (
          <li key={string} className={styles.navigate__item}>
            <Link to="/" aria-label={`Navigate to ${string}`} tabIndex={2 + index}>
              {string}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
