import classNames from 'classnames/bind';

import styles from './Activity.module.scss';

const cx = classNames.bind(styles);

function Activity() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Activity Page</h2>
        </div>
    );
}

export default Activity;
