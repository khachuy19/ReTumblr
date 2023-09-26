import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Radar.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { MoreIcon } from '../Icons';
import Interact from '../Interact';
import Blaze from '../Blaze';

const cx = classNames.bind(styles);

function Radar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Radar</h1>

                <article className={cx('card')}>
                    <header className={cx('head')}>
                        <Image src={images.userAvt} className={cx('avt')} />

                        <div className={cx('action')}>
                            <div className={cx('follow')}>
                                <Link to="/sajanrai" className={cx('link')}>
                                    sajanrai
                                </Link>

                                <button className={cx('follow-btn')}>Follow</button>
                            </div>
                            <div className={cx('more')}>
                                <button className={cx('more-btn')}>
                                    <MoreIcon />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className={cx('img')}>
                        <Link to="/sajanrai/post">
                            <Image className={cx('img')} src={images.userImg} />
                        </Link>
                    </div>

                    <footer className={cx('foot')}>
                        <Blaze />

                        <Interact reply={false} notes={199} />
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default Radar;
