import classNames from 'classnames/bind';

import styles from './Blaze.module.scss';
import { BlazeIcon } from '../Icons';

const cx = classNames.bind(styles);

function Blaze() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('blaze-btn')}>
                <BlazeIcon />
                Blaze
            </button>
        </div>
    );
}

export default Blaze;
