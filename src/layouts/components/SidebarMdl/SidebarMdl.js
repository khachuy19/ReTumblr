import classNames from 'classnames/bind';
import { forwardRef, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import MediaQuery, { useMediaQuery } from 'react-responsive';
import { animated } from '@react-spring/web';

import sidebarStyles from './SidebarMdl.module.scss';
import btnStyles from '~/components/Button/Button.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';
import Menu, { MenuItem } from '../Sidebar/Menu';
import {
    HomeIcon,
    ExploreIcon,
    ActivityIcon,
    MessagesIcon,
    AccountIcon,
    SettingsIcon,
    GetDomainIcon,
    AdFreeIcon,
    PenIcon,
    CaretIcon,
    LogoIcon,
    ModalCloseIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import config from '~/config';
import NewTxtPostMdl from '~/components/NewTxtPostMdl';

const cx = classNames.bind(sidebarStyles);
const cxx = classNames.bind(btnStyles);

function SidebarMdl({ springs, handleClsClick }) {
    const [homeActive, setHomeActive] = useState('/');
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const [showCreaNewTxtPostMdl, setShowCreaNewTxtPostMdl] = useState(false);

    const subnavRef = useRef();
    const glassContainer = useRef();

    const handleToggleNavBar = () => {
        subnavRef.current.classList.toggle(cx('active'));
        subnavRef.current.previousElementSibling.classList.toggle(cxx('active'));
    };

    const handleCreaNewTxtPostClick = () => {
        document.body.classList.toggle('has-modal');
        setShowCreaNewTxtPostMdl(!showCreaNewTxtPostMdl);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <animated.aside className={cx('sidebar')} style={{ ...springs }}>
                    <div className={cx('container')}>
                        <header className={cx('header')}>
                            <div className={cx('header-logo-cont')}>
                                <Link className={cx('logo-btn')} to={config.routes.dashboard} onClick={handleClsClick}>
                                    <div className={cx('colorful-bg-logo')}></div>
                                    <LogoIcon className={cx('sidebar-logo')} />
                                </Link>

                                <button className={cx('cls-btn')} onClick={handleClsClick}>
                                    <ModalCloseIcon />
                                </button>
                            </div>
                        </header>

                        <Menu>
                            <MenuItem
                                title="Home"
                                to={homeActive}
                                onClick={() => {
                                    // console.log(homeActive);
                                    setHomeActive(config.routes.dashhandleClsClick);
                                    handleClsClick();
                                }}
                                iconLeft={<HomeIcon />}
                            />

                            <MenuItem
                                title="Explore"
                                to={config.routes.exploreToday}
                                iconLeft={<ExploreIcon />}
                                onClick={handleClsClick}
                            />

                            <MenuItem
                                title="Activity"
                                to={config.routes.activity}
                                iconLeft={<ActivityIcon />}
                                onClick={handleClsClick}
                            />

                            <MenuItem
                                title="Messages"
                                to={config.routes.messages}
                                iconLeft={<MessagesIcon />}
                                onClick={handleClsClick}
                            />

                            <Button
                                className="sidebar-nav-btn"
                                onClick={handleToggleNavBar}
                                leftIcon={<AccountIcon />}
                                rightIcon={<CaretIcon />}
                            >
                                Account
                            </Button>

                            <div ref={subnavRef} className={cx('sub-nav')}>
                                <NavLink
                                    className={(nav) => cx({ active: nav.isActive })}
                                    to={config.routes.likes}
                                    onClick={handleClsClick}
                                >
                                    <span>Likes</span>
                                    <span>105</span>
                                </NavLink>

                                <NavLink
                                    className={(nav) => cx({ active: nav.isActive })}
                                    to={config.routes.following}
                                    onClick={handleClsClick}
                                >
                                    <span>Following</span>
                                    <span>19</span>
                                </NavLink>

                                <Button className="sidebar-nav-log-out-btn" onClick={handleClsClick}>
                                    Log out
                                </Button>

                                <Button disabled rightIcon={'+ New'}>
                                    BLogs
                                </Button>

                                <div className={cx('personal-info')}>
                                    <Link className={cx('personal-link')} to={config.routes.blog}>
                                        <Image className="avatar" src={images.avt} />
                                        <div className={cx('title')}>
                                            <p>khachuy19</p>
                                            <p className={cx('sub-title')}>Twenties</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <MenuItem
                                title="Settings"
                                to={config.routes.settingAccount}
                                iconLeft={<SettingsIcon />}
                                onClick={handleClsClick}
                            />

                            <MenuItem
                                title="Get a domain"
                                to={config.routes.domain}
                                iconLeft={<GetDomainIcon />}
                                onClick={handleClsClick}
                            />

                            <MenuItem
                                title="Go Ad-Free"
                                to={config.routes.adFree}
                                iconLeft={<AdFreeIcon />}
                                onClick={handleClsClick}
                            />
                        </Menu>
                    </div>

                    <footer className={cx('footer')}>
                        <button className={cx('sidebar-footer-btn')} onClick={handleCreaNewTxtPostClick}>
                            <PenIcon />
                            Create
                        </button>
                    </footer>
                    {/* <SuggestedAccounts label="Suggested accounts" />
                    <SuggestedAccounts label="Following accounts" /> */}
                </animated.aside>
            </div>

            <div ref={glassContainer} id={cx('glass-container')}>
                {showCreaNewTxtPostMdl && (
                    <div className={cx('create-modal')}>
                        <NewTxtPostMdl onClick={handleCreaNewTxtPostClick} />
                    </div>
                )}
            </div>
        </>
    );
}

export default forwardRef(SidebarMdl);
