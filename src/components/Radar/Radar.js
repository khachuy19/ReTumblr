import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Radar.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { MoreIcon } from '../Icons';
import Interact from '../Interact';
import Blaze from '../Blaze';

const cx = classNames.bind(styles);

function Radar() {
    const [showMore, setShowMore] = useState(false);

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
                                <HeadlessTippy
                                    placement="bottom"
                                    interactive
                                    visible={showMore}
                                    onClickOutside={() => setShowMore(!showMore)}
                                    render={(attrs) => (
                                        <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                            <div className={cx('checkout-popper')} tabIndex="-1">
                                                <div className={cx('popper-wrapper')}>
                                                    <ul className={cx('more-list')}>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <Link className={cx('more-link')}></Link>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item', 'two-lines')}
                                                        >
                                                            <p>Community Label: Everyone</p>
                                                            <span className={cx('ms-lb-btn')}>Missing label?</span>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn')}>Copy link</button>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn')}>Unfollow</button>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn')}>
                                                                Subscribe to conversation
                                                            </button>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn')}>
                                                                Content settings
                                                            </button>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn', 'red-color')}>
                                                                Report sajanrai
                                                            </button>
                                                        </li>
                                                        <li
                                                            onClick={() => setShowMore(!showMore)}
                                                            className={cx('more-item')}
                                                        >
                                                            <button className={cx('more-item-btn', 'red-color')}>
                                                                Block sajanrai
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <button className={cx('more-btn')} onClick={() => setShowMore(!showMore)}>
                                        <MoreIcon />
                                    </button>
                                </HeadlessTippy>
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
