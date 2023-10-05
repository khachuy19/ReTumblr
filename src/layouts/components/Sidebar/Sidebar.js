import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import sidebarStyles from './Sidebar.module.scss';
import btnStyles from '~/components/Button/Button.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';
import Menu, { MenuItem } from './Menu';
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
} from '~/components/Icons';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(sidebarStyles);
const cxx = classNames.bind(btnStyles);

function Sidebar() {
    const [homeActive, setHomeActive] = useState('/');
    const subnavRef = useRef();
    const logoRef = useRef();

    const isLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    const handleToggleNavBar = () => {
        subnavRef.current.classList.toggle(cx('active'));
        subnavRef.current.childNodes[0].style.color = 'white';
        subnavRef.current.childNodes[1].style.color = 'white';
        subnavRef.current.childNodes[2].style.color = 'white';
        subnavRef.current.previousElementSibling.classList.toggle(cxx('active'));
    };

    return (
        // isLaptop && (
        //     <aside className={cx('wrapper')}>
        //         <div className={cx('container')}>
        //             <header className={cx('header')}>
        //                 <Button className="logo-btn" to={config.routes.dashboard}>
        //                     <img className={cx('sidebarLogo')} src={images.logo} alt="Tumblr" />
        //                 </Button>
        //             </header>

        //             <Menu>
        //                 <MenuItem
        //                     title="Home"
        //                     to={homeActive}
        //                     onClick={() => {
        //                         console.log(homeActive);
        //                         setHomeActive(config.routes.dashboard);
        //                     }}
        //                     iconLeft={<HomeIcon />}
        //                 />
        //                 <MenuItem title="Explore" to={config.routes.exploreToday} iconLeft={<ExploreIcon />} />
        //                 <Button className="sidebar-nav-btn" leftIcon={<ActivityIcon />}>
        //                     Activity
        //                 </Button>
        //                 <Button className="sidebar-nav-btn" leftIcon={<MessagesIcon />}>
        //                     Messages
        //                 </Button>
        //                 <MenuItem title="Inbox" to={config.routes.inbox} iconLeft={<InboxIcon />} />
        //                 <Button
        //                     className="sidebar-nav-btn"
        //                     onClick={handleToggleNavBar}
        //                     leftIcon={<AccountIcon />}
        //                     rightIcon={<CaretIcon />}
        //                 >
        //                     Account
        //                 </Button>
        //                 <div ref={subnavRef} className={cx('sub-nav')}>
        //                     <MenuItem title="Likes" to={config.routes.likes} iconRight={105} />
        //                     <MenuItem title="Following" to={config.routes.following} iconRight={19} />
        //                     <Button className="sidebar-nav-log-out-btn">Log out</Button>
        //                     <Button disabled rightIcon={'+ New'}>
        //                         BLogs
        //                     </Button>
        //                     <div className={cx('personal-info')}>
        //                         <Link className={cx('personal-link')} to={config.routes.blog}>
        //                             <Image className="avatar" src={images.avt} />
        //                             <div className={cx('title')}>
        //                                 <p>khachuy19</p>
        //                                 <p className={cx('sub-title')}>Twenties</p>
        //                             </div>
        //                         </Link>
        //                     </div>
        //                 </div>
        //                 <MenuItem title="Settings" to={config.routes.settingAccount} iconLeft={<SettingsIcon />} />
        //                 <MenuItem title="Get a domain" to={config.routes.domain} iconLeft={<GetDomainIcon />} />
        //                 <MenuItem title="Go Ad-Free" to={config.routes.adFree} iconLeft={<AdFreeIcon />} />
        //             </Menu>
        //         </div>

        //         <footer className={cx('footer')}>
        //             <Button className={cx('sidebar-footer-btn')} leftIcon={<PenIcon />}>
        //                 Create
        //             </Button>
        //         </footer>
        //         {/* <SuggestedAccounts label="Suggested accounts" />
        //     <SuggestedAccounts label="Following accounts" /> */}
        //     </aside>
        // )

        <MediaQuery minWidth={1224}>
            {/* You can also use a function (render prop) as a child */}
            {/* {(matches) => (matches ? <p>You are retina</p> : <p>You are not retina</p>)} */}

            <aside className={cx('wrapper')}>
                <div className={cx('container')}>
                    <header className={cx('header')}>
                        <div className={cx('header-logo-cont')}>
                            <Link className={cx('logo-btn')} to={config.routes.dashboard}>
                                <div className={cx('colorful-bg-logo')}></div>

                                <LogoIcon className={cx('sidebar-logo')} />
                            </Link>
                        </div>
                    </header>

                    <Menu>
                        <MenuItem
                            title="Home"
                            to={homeActive}
                            onClick={() => {
                                console.log(homeActive);
                                setHomeActive(config.routes.dashboard);
                            }}
                            iconLeft={<HomeIcon />}
                        />
                        <MenuItem title="Explore" to={config.routes.exploreToday} iconLeft={<ExploreIcon />} />
                        <Button className="sidebar-nav-btn" leftIcon={<ActivityIcon />}>
                            Activity
                        </Button>
                        <Button className="sidebar-nav-btn" leftIcon={<MessagesIcon />}>
                            Messages
                        </Button>
                        <MenuItem title="Inbox" to={config.routes.inbox} iconLeft={<InboxIcon />} />
                        <Button
                            className="sidebar-nav-btn"
                            onClick={handleToggleNavBar}
                            leftIcon={<AccountIcon />}
                            rightIcon={<CaretIcon />}
                        >
                            Account
                        </Button>
                        <div ref={subnavRef} className={cx('sub-nav')}>
                            <MenuItem title="Likes" to={config.routes.likes} iconRight={105} />
                            <MenuItem title="Following" to={config.routes.following} iconRight={19} />
                            <Button className="sidebar-nav-log-out-btn">Log out</Button>
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
                        <MenuItem title="Settings" to={config.routes.settingAccount} iconLeft={<SettingsIcon />} />
                        <MenuItem title="Get a domain" to={config.routes.domain} iconLeft={<GetDomainIcon />} />
                        <MenuItem title="Go Ad-Free" to={config.routes.adFree} iconLeft={<AdFreeIcon />} />
                    </Menu>
                </div>

                <footer className={cx('footer')}>
                    <Button className={cx('sidebar-footer-btn')} leftIcon={<PenIcon />}>
                        Create
                    </Button>
                </footer>
                {/* <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" /> */}
            </aside>
        </MediaQuery>
    );
}

export default Sidebar;
