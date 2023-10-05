import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

import styles from './Explore.module.scss';
import config from '~/config';
import Navigation, { NavigationItem } from '~/components/Navigation';
import Search from '~/components/Search';
import { ClearIcon, ToTopIcon } from '~/components/Icons';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Explore({ children }) {
    const exploreRef = useRef();

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (exploreRef.current != null) {
                let exploreComputedSt = getComputedStyle(exploreRef.current);
                if (window.scrollY >= 260 && window.oldScroll < window.scrollY) {
                    let offsetVal = exploreComputedSt.getPropertyValue('--offset');
                    if (offsetVal !== '53px') {
                        // console.log(offsetVal);
                        exploreRef.current.style.setProperty('--offset', '53px');
                        exploreRef.current.style.setProperty('--dashboard-tabs-header-height', '0px');
                    }
                } else if (window.oldScroll > window.scrollY) {
                    // console.log('up');
                    let offsetVal = exploreComputedSt.getPropertyValue('--offset');

                    if (offsetVal !== '0px') {
                        // console.log(offsetVal);
                        try {
                            exploreRef.current.style.setProperty('--offset', '0px');
                            exploreRef.current.style.setProperty('--dashboard-tabs-header-height', '53px');
                        } catch {
                            console.log('ccc');
                            return;
                        }
                    }
                }
                window.oldScroll = window.scrollY;
            }
        });
    }, []);

    return (
        <div ref={exploreRef} className={cx('wrapper')}>
            <div className={cx('main-content')}>
                <Navigation>
                    <NavigationItem to={config.routes.exploreToday} title="Today" />
                    <NavigationItem to={config.routes.exploreForYou} title="For You" />
                    <NavigationItem to={config.routes.exploreTrending} title="Trending" />
                    <NavigationItem to={config.routes.exploreStaffPicks} title="Staff Picks" />
                    <NavigationItem to={config.routes.exploreAnswertime} title="Answer Time" />
                </Navigation>

                {children}
            </div>

            <aside className={cx('sidebar')}>
                <Search />

                {window.location.pathname.includes('/trending') && (
                    <div className={cx('trending-container')}>
                        <div className={cx('card')}>
                            <div className={cx('head')}>
                                <h3>Trending Blogs</h3>
                            </div>

                            <div className={cx('content')}>
                                <ul className={cx('trending-list')}>
                                    <li className={cx('trending-item')}>
                                        <Link to="/someone" className={cx('blog-link')}>
                                            <Image className={cx('img')} src={images.trdBLImg} />

                                            <div className={cx('blog-title')}>
                                                <p className={cx('blog-name')}>re-dracula</p>
                                                <p className={cx('blog-des')}>Re: Dracula</p>
                                            </div>
                                        </Link>

                                        <button className={cx('follow-btn')}>Follow</button>

                                        <button className={cx('clear-btn')}>
                                            <ClearIcon />
                                        </button>
                                    </li>

                                    <li className={cx('trending-item')}>
                                        <Link to="/webcomicname" className={cx('blog-link')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://64.media.tumblr.com/avatar_44d7cb4c7049_64.pnj"
                                            />

                                            <div className={cx('blog-title')}>
                                                <p className={cx('blog-name')}>webcomicname</p>
                                                <p className={cx('blog-des')}>webcomic name</p>
                                            </div>
                                        </Link>

                                        <button className={cx('follow-btn')}>Follow</button>

                                        <button className={cx('clear-btn')}>
                                            <ClearIcon />
                                        </button>
                                    </li>

                                    <li className={cx('trending-item')}>
                                        <Link to="/catwheezie" className={cx('blog-link')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://64.media.tumblr.com/8232f87889c3ef63216bef463ae559a7/54a353a8edaad1c3-0e/s64x64u_c1/ef8018856c3d55a2ecb22cb3c2fd224ab07ee2d5.jpg"
                                            />

                                            <div className={cx('blog-title')}>
                                                <p className={cx('blog-name')}>catwheezie</p>
                                                <p className={cx('blog-des')}>Catwheezie</p>
                                            </div>
                                        </Link>

                                        <button className={cx('follow-btn')}>Follow</button>

                                        <button className={cx('clear-btn')}>
                                            <ClearIcon />
                                        </button>
                                    </li>

                                    <li className={cx('trending-item')}>
                                        <Link to="/fourbrickstall" className={cx('blog-link')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://64.media.tumblr.com/f31719b8d921a69b58ae6d0bb8413778/a458e32525bbd7f4-13/s96x96u_c1/37463cca7f3d315ae1b4e9537d889f5ad6245139.pnj"
                                            />

                                            <div className={cx('blog-title')}>
                                                <p className={cx('blog-name')}>fourbrickstall</p>
                                                <p className={cx('blog-des')}>Four Bricks Tall</p>
                                            </div>
                                        </Link>

                                        <button className={cx('follow-btn')}>Follow</button>

                                        <button className={cx('clear-btn')}>
                                            <ClearIcon />
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <footer className={cx('card-footer')}>
                                <button className={cx('btn')}>Show more blogs</button>
                            </footer>
                        </div>
                    </div>
                )}

                <div className={cx('following-container')}>
                    <div className={cx('card')}>
                        <div className={cx('head')}>
                            <h3>Following</h3>
                            <button className={cx('btn')}>Manage</button>
                        </div>

                        <div className={cx('content')}>
                            <ul className={cx('following-list')}>
                                <li>
                                    <Link to="/tagged/coding" className={cx('link')}>
                                        <Image
                                            src="https://64.media.tumblr.com/1606a4a0e7c45840b0628e40b4af6df5/002b2a6879d57369-60/s640x960/3813d517d5a337de1703dabc9172ea0024d17b44.pnj"
                                            className={cx('img')}
                                        />

                                        <div className={cx('following-info')}>
                                            <p className={cx('following-tag')}>#coding</p>
                                            <p className={cx('tag-des')}>25 recent posts</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/tagged/hanoi" className={cx('link')}>
                                        <Image
                                            src="https://64.media.tumblr.com/0650f12bc11d1425b5cbf0e25784ac01/fa425b25aa6f26f8-49/s640x960/2c2ef4f77275f8d64564e78a9e3bc060e2c74521.jpg"
                                            className={cx('img')}
                                        />

                                        <div className={cx('following-info')}>
                                            <p className={cx('following-tag')}>#hanoi</p>
                                            <p className={cx('tag-des')}>4 recent photos</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/tagged/mưa" className={cx('link')}>
                                        <Image
                                            src="https://64.media.tumblr.com/7659c88c6ce813c38c98ae60dd16fbb2/c411ba7a640cba7e-49/s250x400/b6640484a660fe7257c75a623f801b4f8db1c10e.gifv"
                                            className={cx('img')}
                                        />

                                        <div className={cx('following-info')}>
                                            <p className={cx('following-tag')}>#mưa</p>
                                            <p className={cx('tag-des')}>3 recent photos</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/tagged/hà%20nội" className={cx('link')}>
                                        <Image
                                            src="https://64.media.tumblr.com/c403727454913d09baf9387590865033/72971cdf8c2b5e15-d2/s640x960/3f3bad0cf184377af31d9a3805f2d7af80931dd7.jpg"
                                            className={cx('img')}
                                        />

                                        <div className={cx('following-info')}>
                                            <p className={cx('following-tag')}>#hà nội</p>
                                            <p className={cx('tag-des')}>1 recent photos</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <footer className={cx('card-footer')}>
                            <button className={cx('btn')}>Show more tags</button>
                        </footer>
                    </div>
                </div>

                <div className={cx('hidden-box')}></div>

                <footer className={cx('sidebar-footer')}>
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

                {true && (
                    <button className={cx('to-top-btn')}>
                        <ToTopIcon />
                    </button>
                )}
            </aside>
        </div>
    );
}

export default Explore;
