import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Checkout.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { ClearIcon } from '../Icons';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('wrapper')}>
            <h1>Check out these blogs</h1>

            <ul className={cx('blog-list')}>
                <li className={cx('blog-item')}>
                    <Link to="/seasonofcozydreams" className={cx('blog-link')}>
                        <Image
                            className={cx('img')}
                            src="https://64.media.tumblr.com/d8cbb196e32549c988236d85c563dd60/93ea3d720e3daf18-91/s64x64u_c1/bd6286dec055ae42f03a3cf3577bef4018af6244.pnj"
                        />
                        <div className={cx('blog-title')}>
                            <p className={cx('blog-name')}>ohsocozynights</p>
                            <p className={cx('blog-des')}>COZY NIGHTS</p>
                        </div>
                    </Link>

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    <Link to="/ohsocozynights" className={cx('blog-link')}>
                        <Image className={cx('img')} src="https://64.media.tumblr.com/avatar_48a357da628e_64.pnj" />
                        <div className={cx('blog-title')}>
                            <p className={cx('blog-name')}>seasonofcozydreams</p>
                            <p className={cx('blog-des')}>Season of cozy dreams</p>
                        </div>
                    </Link>

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    <Link to="/spookyseasonthings" className={cx('blog-link')}>
                        <Image
                            className={cx('img')}
                            src="https://64.media.tumblr.com/4818941ec1c1da247646a5eb75bc086e/7758254d3baf3b9b-8c/s64x64u_c1/35724fc0feae998a6234c9b3956bbfad740d1656.jpg"
                        />
                        <div className={cx('blog-title')}>
                            <p className={cx('blog-name')}>spookyseasonthings</p>
                            <p className={cx('blog-des')}>Because Every day should be Halloween</p>
                        </div>
                    </Link>

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    <Link to="/autumn-wind-rain" className={cx('blog-link')}>
                        <Image className={cx('img')} src="https://64.media.tumblr.com/avatar_371394d895a3_64.pnj" />
                        <div className={cx('blog-title')}>
                            <p className={cx('blog-name')}>autumn-wind-rain</p>
                            <p className={cx('blog-des')}>Autumn Wind & Rain</p>
                        </div>
                    </Link>

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>
            </ul>

            <Link to="/explore/today" className={cx('last-link')}>
                Explore all of Tumblr
            </Link>
        </div>
    );
}

export default Checkout;
