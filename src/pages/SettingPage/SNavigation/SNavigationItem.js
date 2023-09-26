import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './SNavigation.module.scss';

const cx = classNames.bind(styles);

function NavigationItem({ to, des, title, selectedIndex = false, onClick = false, index }) {
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
            <div className={cx('title')}>{title}</div>
            <div className={cx('des')}>{des}</div>
        </NavLink>
    );
}

export default NavigationItem;
