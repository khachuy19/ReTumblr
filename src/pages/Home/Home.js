import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import styles from './Home.module.scss';
import Image from '~/components/Image/Image';
import images from '~/assets/images';
import config from '~/config';
import Navigation, { NavigationItem } from '~/components/Navigation';
import { TextIcon, QuoteIcon, CameraIcon, VideoIcon, LinkIcon, AudioIcon, ChatIcon } from '~/components/Icons';
import Search from '~/components/Search';
import Checkout from '~/components/Checkout';
import Radar from '~/components/Radar';
import ToTop from '~/components/ToTop';

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
                        console.log(offsetVal);
                        homeRef.current.style.setProperty('--offset', '53px');
                        homeRef.current.style.setProperty('--dashboard-tabs-header-height', '0px');
                    }
                } else if (window.oldScroll > window.scrollY) {
                    // console.log('up');
                    let offsetVal = homeComputedSt.getPropertyValue('--offset');

                    if (offsetVal != '0px') {
                        console.log(offsetVal);
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
                        title="For You"
                    />
                    <NavigationItem
                        selectedIndex={selectedIndex}
                        index={2}
                        onClick={handleClick}
                        to={config.routes.dashboardYourTags}
                        title="Your Tags"
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
                    <div>
                        <Link>
                            <Image className={cx('img')} src={images.avt} />
                        </Link>
                    </div>
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

                {true && <ToTop />}
            </aside>
        </div>
    );
}

export default Home;
