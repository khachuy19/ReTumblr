import classNames from 'classnames/bind';
import { forwardRef, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

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
    InboxIcon,
    AccountIcon,
    SettingsIcon,
    GetDomainIcon,
    AdFreeIcon,
    PenIcon,
    CaretIcon,
    LogoIcon,
    SmileFaceMessageIcon,
    RoundHeartIcon,
    RoundReblogIcon,
    SmallTextIcon,
    TextIcon,
    CameraIcon,
    QuoteIcon,
    LinkIcon,
    ChatIcon,
    AudioIcon,
    VideoIcon,
    ShortLogoIcon,
    ModalCloseIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import config from '~/config';
import NewTxtPostMdl from '~/components/NewTxtPostMdl';

const cx = classNames.bind(sidebarStyles);
const cxx = classNames.bind(btnStyles);

function SidebarMdl({ isMouted, hide }, ref) {
    const [homeActive, setHomeActive] = useState('/');
    const [selectedIndex, setSelectedIndex] = useState(0);
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
                <aside ref={ref} className={cx('sidebar', { active: isMouted })}>
                    <div className={cx('container')}>
                        <header className={cx('header')}>
                            <div className={cx('header-logo-cont')}>
                                <Link
                                    className={cx('logo-btn')}
                                    to={config.routes.dashboard}
                                    onClick={() => {
                                        document.body.classList.toggle('has-modal');
                                        hide();
                                    }}
                                >
                                    <div className={cx('colorful-bg-logo')}></div>
                                    <LogoIcon className={cx('sidebar-logo')} />
                                </Link>

                                <button
                                    className={cx('cls-btn')}
                                    onClick={() => {
                                        document.body.classList.toggle('has-modal');
                                        hide();
                                    }}
                                >
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
                                    setHomeActive(config.routes.dashboard);
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
                                iconLeft={<HomeIcon />}
                            />

                            <MenuItem
                                title="Explore"
                                to={config.routes.exploreToday}
                                iconLeft={<ExploreIcon />}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
                            />

                            <MenuItem
                                title="Activity"
                                to={config.routes.activity}
                                iconLeft={<ActivityIcon />}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
                            />

                            <MenuItem
                                title="Messages"
                                to={config.routes.messages}
                                iconLeft={<MessagesIcon />}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
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
                                    onClick={() => {
                                        document.body.classList.toggle('has-modal');
                                        hide();
                                    }}
                                >
                                    <span>Likes</span>
                                    <span>105</span>
                                </NavLink>

                                <NavLink
                                    className={(nav) => cx({ active: nav.isActive })}
                                    to={config.routes.following}
                                    onClick={() => {
                                        document.body.classList.toggle('has-modal');
                                        hide();
                                    }}
                                >
                                    <span>Following</span>
                                    <span>19</span>
                                </NavLink>

                                <Button
                                    className="sidebar-nav-log-out-btn"
                                    onClick={() => {
                                        document.body.classList.toggle('has-modal');
                                        hide();
                                    }}
                                >
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
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
                            />

                            <MenuItem
                                title="Get a domain"
                                to={config.routes.domain}
                                iconLeft={<GetDomainIcon />}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
                            />

                            <MenuItem
                                title="Go Ad-Free"
                                to={config.routes.adFree}
                                iconLeft={<AdFreeIcon />}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    hide();
                                }}
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
                </aside>
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
