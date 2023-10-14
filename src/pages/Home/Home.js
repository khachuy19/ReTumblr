import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Home.module.scss';
import Image from '~/components/Image/Image';
import images from '~/assets/images';
import config from '~/config';
import Navigation, { NavigationItem } from '~/components/Navigation';
import {
    TextIcon,
    QuoteIcon,
    CameraIcon,
    VideoIcon,
    LinkIcon,
    AudioIcon,
    ChatIcon,
    AddMessageIcon,
    MoreIcon,
    GearIcon,
} from '~/components/Icons';
import Search from '~/components/Search';
import Checkout from '~/components/Checkout';
import Radar from '~/components/Radar';

const cx = classNames.bind(styles);

function Home({ children }) {
    const homeRef = useRef();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const homeComputedSt = getComputedStyle(homeRef.current);
        window.addEventListener('scroll', () => {
            if (homeRef.current != null) {
                if (window.scrollY >= 260 && window.oldScroll < window.scrollY) {
                    let offsetVal = homeComputedSt.getPropertyValue('--offset');
                    if (offsetVal != '53px') {
                        // console.log(offsetVal);
                        homeRef.current.style.setProperty('--offset', '53px');
                        homeRef.current.style.setProperty('--dashboard-tabs-header-height', '0px');
                    }
                } else if (window.oldScroll > window.scrollY) {
                    // console.log('up');
                    let offsetVal = homeComputedSt.getPropertyValue('--offset');

                    if (offsetVal != '0px') {
                        // console.log(offsetVal);
                        homeRef.current.style.setProperty('--offset', '0px');
                        homeRef.current.style.setProperty('--dashboard-tabs-header-height', '53px');
                    }
                }
                window.oldScroll = window.scrollY;
            }
        });
    }, []);

    const handleClick = (i) => {
        setSelectedIndex(i);
    };

    return (
        <div ref={homeRef} className={cx('wrapper')}>
            <div className={cx('main-content')}>
                <Navigation>
                    <NavigationItem
                        selectedIndex={selectedIndex}
                        index={0}
                        onClick={handleClick}
                        to={config.routes.dashboardFollowing}
                        title="Following"
                    />
                    <NavigationItem
                        selectedIndex={selectedIndex}
                        index={1}
                        onClick={handleClick}
                        to={config.routes.dashboardForYou}
                        title="For you"
                    />
                    <NavigationItem
                        selectedIndex={selectedIndex}
                        index={2}
                        onClick={handleClick}
                        to={config.routes.dashboardYourTags}
                        title="Your tags"
                    />
                    <NavigationItem
                        selectedIndex={selectedIndex}
                        index={3}
                        onClick={handleClick}
                        to={config.routes.settingLabs}
                        title="Manage..."
                    />
                </Navigation>

                <div className={cx('action-bar')}>
                    <HeadlessTippy
                        // onHide={handleMouseLeave}
                        placement="bottom"
                        interactive
                        delay={[400, 200]}
                        render={(attrs) => (
                            <div
                                className={cx('checkout-popper')}
                                style={{ backgroundColor: '#256EA3' }}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <div className={cx('popper-wrapper')}>
                                    <main className={cx('main')}>
                                        <Link to="/khachuy23" className={cx('popper-link')}>
                                            <Image
                                                src="https://64.media.tumblr.com/5009f0d63531633c8bf1898fd2e3f5a7/bfc46daa84453fae-9c/s2048x3072_c30082,0,95887,99683/67f023dab313a252c2ceab2494899a11576eb588.png"
                                                className={cx('top-img')}
                                            />
                                        </Link>

                                        <div className={cx('content')}>
                                            <header className={cx('head')}>
                                                <Link to="/ohsocozynights" className={cx('head-link')}>
                                                    <div className={cx('text')}>ohsocozynights</div>
                                                </Link>

                                                <div className={cx('head-control')}>
                                                    <button className={cx('setting-btn')}>
                                                        <GearIcon />
                                                    </button>

                                                    <div className={cx('more-btn')}>
                                                        <MoreIcon />
                                                    </div>
                                                </div>
                                            </header>

                                            <Link to="/ohsocozynights" className={cx('avt-link')}>
                                                <div className={cx('img-wrapper')}>
                                                    <div
                                                        className={cx('img-round')}
                                                        style={{ backgroundColor: '#256EA3' }}
                                                    >
                                                        <Image
                                                            src="https://64.media.tumblr.com/8f2d065969ef09b6587bf193add026b3/bfc46daa84453fae-a8/s64x64u_c1/b3e0c6f30417cab97ca50dc4f7197ed972796f19.jpg"
                                                            className={cx('avt')}
                                                        />
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className={cx('title')}
                                                style={{ '--blog-title-color': 'rgb(48, 79, 124)' }}
                                            >
                                                <h2
                                                    className={cx('heading')}
                                                    style={{
                                                        fontFamily: 'Sans Serif',
                                                        fontWeight: 'normal',
                                                    }}
                                                >
                                                    Twenties
                                                </h2>
                                                <p className={cx('des')}></p>
                                            </div>
                                        </div>

                                        <div className={cx('recent-posts')}>
                                            <Link
                                                to="https://www.tumblr.com/khachuy23/708677941767389184"
                                                className={cx('post-link')}
                                            >
                                                <Image
                                                    src="https://64.media.tumblr.com/e3f0a3e0d0d19c79bbea0bec785f38bc/f9854d613d373f7a-15/s250x250_c1/1421ffa6b233fb2fd126000dc2743673296b9760.jpg"
                                                    className={cx('post-img')}
                                                />
                                            </Link>

                                            <Link to="https://www.tumblr.com/khachuy23" className={cx('post-link')}>
                                                <Image src="" className={cx('post-img')} />
                                            </Link>

                                            <Link to="https://www.tumblr.com/khachuy23" className={cx('post-link')}>
                                                <Image src="" className={cx('post-img')} />
                                            </Link>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/khachuy23" className={cx('link')}>
                            <Image className={cx('img')} src={images.avt} />
                        </Link>
                    </HeadlessTippy>
                    <ul className={cx('action-list')}>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <TextIcon />
                                </span>
                                Text
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <CameraIcon />
                                </span>
                                Photo
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <QuoteIcon />
                                </span>
                                Quote
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <LinkIcon />
                                </span>
                                Link
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <ChatIcon />
                                </span>
                                Chat
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <AudioIcon />
                                </span>
                                Audio
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn')}>
                                <span className={cx('icon')}>
                                    <VideoIcon />
                                </span>
                                Video
                            </button>
                        </li>
                    </ul>
                </div>

                {children}
            </div>

            <aside className={cx('sidebar')}>
                <Search />

                <Checkout />

                <Radar />

                <div className={cx('hidden-box')}></div>

                <footer className={cx('footer')}>
                    <Link to="/about" className={cx('footer-link')}>
                        About
                    </Link>
                    <Link to="/apps" className={cx('footer-link')}>
                        Apps
                    </Link>
                    <Link to="/policy" className={cx('footer-link')}>
                        Legal
                    </Link>
                    <Link to="/policy" className={cx('footer-link')}>
                        Privacy
                    </Link>
                    <Link to="/help" className={cx('footer-link')}>
                        Help
                    </Link>
                </footer>
            </aside>
        </div>
    );
}

export default Home;
