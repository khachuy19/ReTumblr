import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function NavigationItem({ to, title, selectedIndex = false, onClick = false, index }) {
    return (
        <NavLink
            onClick={
                onClick
                    ? () => onClick(index)
                    : () => {
                          return;
                      }
            }
            className={(nav) => cx('navigation-item', { active: nav.isActive || selectedIndex === index })}
            to={to}
        >
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default NavigationItem;
