import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './SNavigation.module.scss';

const cx = classNames.bind(styles);

function Navigation({ children }, ref) {
    return (
        <nav ref={ref} className={cx('navigation')}>
            {children}
        </nav>
    );
}

export default forwardRef(Navigation);
