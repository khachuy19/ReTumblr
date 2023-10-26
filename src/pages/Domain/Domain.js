import classNames from 'classnames/bind';

import styles from './Domain.module.scss';

const cx = classNames.bind(styles);

function Domain() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Domain Page</h2>
        </div>
    );
}

export default Domain;
