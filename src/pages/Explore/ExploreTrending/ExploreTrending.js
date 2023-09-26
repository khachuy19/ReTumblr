import classNames from 'classnames/bind';

import styles from './ExploreTrending.module.scss';
import Post from '~/components/Post';
import Progress from '~/components/Progress';

const cx = classNames.bind(styles);

function ExploreTrending() {
    return (
        <div className={cx('wrapper')}>
            {true && (
                <div className={cx('progress-container')}>
                    <Progress
                        wrapperWidth="100%"
                        containerWidth="78px"
                        boxStyle={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '3px',
                            marginRight: '3px',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default ExploreTrending;
