import classNames from 'classnames/bind';
import styles from './ToTop.module.scss';

import { ToTopIcon } from '../Icons';

const cx = classNames.bind(styles);

function ToTop() {
    return (
        <button
            className={cx('to-top-btn')}
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <ToTopIcon />
        </button>
    );
}

export default ToTop;
