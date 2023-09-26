import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, iconLeft, iconRight, onClick = false }) {
    return (
        <NavLink onClick={onClick} className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {iconLeft && <span className={cx('icon-left')}>{iconLeft}</span>}
            <span className={cx('title')}>{title}</span>
            {iconRight && <span className={cx('icon-right')}>{iconRight}</span>}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string.isRequired,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
};

export default MenuItem;
