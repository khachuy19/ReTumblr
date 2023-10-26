import classNames from 'classnames/bind';

import styles from './AdFree.module.scss';

const cx = classNames.bind(styles);

function AdFree() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>AdFree Page</h2>
        </div>
    );
}

export default AdFree;
