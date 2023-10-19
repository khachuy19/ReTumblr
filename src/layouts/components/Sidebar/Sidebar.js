import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import HeadlessTippy from '@tippyjs/react/headless';

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
} from '~/components/Icons';
import images from '~/assets/images';
import config from '~/config';
import NewTxtPostMdl from '~/components/NewTxtPostMdl';

const cx = classNames.bind(sidebarStyles);
const cxx = classNames.bind(btnStyles);

function Sidebar() {
    const [homeActive, setHomeActive] = useState('/');
    const [showMessage, setShowMessage] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showCreModal, setShowCreModal] = useState(false);
    const [showNewTxtPostCreaMdl, setShowNewTxtPostCreaMdl] = useState(false);

    const subnavRef = useRef();
    const contactList = useRef();
    const glassContainer = useRef();

    const handleShowCreModal = () => {
        document.body.classList.toggle('has-modal');
        setShowCreModal(!showCreModal);
    };

    const isLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    const handleToggleNavBar = () => {
        subnavRef.current.classList.toggle(cx('active'));
        subnavRef.current.previousElementSibling.classList.toggle(cxx('active'));
    };

    const handleNewTxtPostCreaClick = () => {
        document.body.classList.toggle('has-modal');
        setShowCreModal(!showCreModal);
        setShowNewTxtPostCreaMdl(!showNewTxtPostCreaMdl);
    };

    const implementShaking = useCallback(() => {
        setInterval(() => {
            contactList.current.children[
                Math.floor(Math.random() * contactList.current.children.length)
            ].classList.toggle(cx('shake-conversation-btn'));
        }, 3000);
    }, []);

    return (
        // isLaptop && (
        //
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
                                // console.log(homeActive);
                                setHomeActive(config.routes.dashboard);
                            }}
                            iconLeft={<HomeIcon />}
                        />

                        <MenuItem title="Explore" to={config.routes.exploreToday} iconLeft={<ExploreIcon />} />

                        <HeadlessTippy
                            appendTo={glassContainer.current}
                            placement="right"
                            interactive
                            offset={[20, 12]}
                            onClickOutside={() => setShowActivity(!showActivity)}
                            visible={showActivity}
                            render={(attrs) => (
                                <div className={cx('ActivityPopper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('header-ms')}>
                                            <p className={cx('name')}>khachuy23</p>
                                        </div>

                                        <nav className={cx('activity-nav')}>
                                            {[
                                                { label: 'Activity' },
                                                { label: 'Mentions' },
                                                { label: 'Reblogs' },
                                                { label: 'Replies' },
                                            ].map((item, i) => {
                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            setSelectedIndex(i);
                                                        }}
                                                        className={cx('nav-btn', { active: i === selectedIndex })}
                                                    >
                                                        {item.label}
                                                    </button>
                                                );
                                            })}
                                        </nav>

                                        {selectedIndex === 0 && (
                                            <ul className={cx('activity-list')}>
                                                <li className={cx('activity-item')}>
                                                    <div className={cx('activity-time')}>
                                                        <span>31 days ago</span>
                                                        <span>Monday, September 11</span>
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container', 'badge')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://assets.tumblr.com/images/tumblrmart/601-post-views/management_thumbnail.png?_v=956aed0c6b75a759eebc47f3a4986f88"
                                                            />
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            You saw more than 601 posts yesterday and earned the 601
                                                            Limit Breaker badge!
                                                        </div>

                                                        <button className={cx('act-mng-btn')}>Manage</button>
                                                        {/* </a> */}
                                                    </div>
                                                </li>

                                                <li className={cx('activity-item')}>
                                                    <div className={cx('activity-time')}>
                                                        <span>34 days ago</span>
                                                        <span>Friday, September 8</span>
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/a45ec57280299c4b2f56b108b1e82f72/ba4add9d06d0deff-27/s64x64u_c1/3b86a947c66ab2a0c0990c8b85229cb98c6dce9b.pnj"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundHeartIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/namthangdoicho12" className={cx('info-link')}>
                                                                namthangdoicho12
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Liked your post </span>
                                                                “..Tiếng mưa vẫn đang rơi lách tách trên mái nhà.....”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                </li>

                                                <li className={cx('activity-item')}>
                                                    <div className={cx('activity-time')}>
                                                        <span>41 days ago</span>
                                                        <span>Friday, September 1</span>
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/e36c7f9d16fca289cf4ebd8132bc5784/1493f60d1403e3fe-1b/s64x64u_c1/63e79fbe22dc93b4543f18d347beb871d6709273.jpg"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundReblogIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/the-man-in-the-wind" className={cx('info-link')}>
                                                                the-man-in-the-wind
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Reblogged your post </span>
                                                                “~September again..”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/e36c7f9d16fca289cf4ebd8132bc5784/1493f60d1403e3fe-1b/s64x64u_c1/63e79fbe22dc93b4543f18d347beb871d6709273.jpg"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundHeartIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/the-man-in-the-wind" className={cx('info-link')}>
                                                                the-man-in-the-wind
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Liked your post </span>
                                                                “~September again..”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/82877864d0e9af020ff2a586dba40b1d/4e77b31be46b82e5-1c/s64x64u_c1/a5a24d56fa98943d8933bf2cf16345e43a2a10fd.pnj"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundReblogIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/sandra-lovie" className={cx('info-link')}>
                                                                sandra-lovie
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Reblogged your post </span>
                                                                “~September again..”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                </li>

                                                <li className={cx('activity-item')}>
                                                    <div className={cx('activity-time')}>
                                                        <span>90 days ago</span>
                                                        <span>Friday, July 14</span>
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/b706a61db4f9335b88fef0cc2f26212d/adb233d72d4dd1c4-26/s64x64u_c1/1f4544d0ecdbc0ca00419d04398674faa54ce0a4.jpg"
                                                            />
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/clou26" className={cx('info-link')}>
                                                                clou26
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Added your genre-defying work to a post </span>
                                                                “Trong những mùa mưa rả rích em vẫn thường nhớ tới...”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <Image src="https://64.media.tumblr.com/eba3ef811537e410dcd171ad49d4b281/dfcf2cdb003fa444-9f/s75x75_c1/dcfd053ab0fe3a0a13c5b7e88d810f93748075d2.gif" />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        )}

                                        {selectedIndex === 1 && (
                                            <div className={cx('mention-list')}>
                                                <p>Check out this tab when you make a post to see Mentions.</p>
                                            </div>
                                        )}

                                        {selectedIndex === 2 && (
                                            <ul className={cx('reblog-list')}>
                                                <li className={cx('activity-item')}>
                                                    <div className={cx('activity-time')}>
                                                        <span>41 days ago</span>
                                                        <span>Friday, September 1</span>
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/e36c7f9d16fca289cf4ebd8132bc5784/1493f60d1403e3fe-1b/s64x64u_c1/63e79fbe22dc93b4543f18d347beb871d6709273.jpg"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundReblogIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/the-man-in-the-wind" className={cx('info-link')}>
                                                                the-man-in-the-wind
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Reblogged your post </span>
                                                                “~September again..”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>

                                                    <div className={cx('activity-content')}>
                                                        {/* <a> */}
                                                        <div className={cx('activity-img-container')}>
                                                            <Image
                                                                className={cx('activity-img')}
                                                                src="https://64.media.tumblr.com/82877864d0e9af020ff2a586dba40b1d/4e77b31be46b82e5-1c/s64x64u_c1/a5a24d56fa98943d8933bf2cf16345e43a2a10fd.pnj"
                                                            />

                                                            <div className={cx('act-react')}>
                                                                <RoundReblogIcon />
                                                            </div>
                                                        </div>

                                                        <div className={cx('activity-info')}>
                                                            <Link to="/sandra-lovie" className={cx('info-link')}>
                                                                sandra-lovie
                                                            </Link>

                                                            <p className={cx('info-text')}>
                                                                <span>Reblogged your post </span>
                                                                “~September again..”
                                                            </p>
                                                        </div>

                                                        <div className={cx('text-in-box')}>
                                                            <SmallTextIcon />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        )}

                                        {selectedIndex === 3 && (
                                            <div className={cx('reply-list')}>
                                                <p>Check out this tab when you make a post to see Replies.</p>
                                            </div>
                                        )}

                                        {(selectedIndex === 0 || selectedIndex === 2) && (
                                            <footer className={cx('act-footer')}>
                                                <Link className={cx('footer-link')} to="/blog/khachuy23/activity">
                                                    See Everything
                                                </Link>
                                            </footer>
                                        )}
                                    </div>
                                </div>
                            )}
                        >
                            <Button
                                className="sidebar-nav-btn"
                                active={showActivity}
                                onClick={() => {
                                    setShowActivity(!showActivity);
                                }}
                                leftIcon={<ActivityIcon />}
                            >
                                Activity
                            </Button>
                        </HeadlessTippy>

                        <HeadlessTippy
                            appendTo={glassContainer.current}
                            placement="right"
                            interactive
                            offset={[20, 12]}
                            onMount={implementShaking}
                            onClickOutside={() => setShowMessage(!showMessage)}
                            visible={showMessage}
                            render={(attrs) => (
                                <div className={cx('MessagePopper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('header-ms')}>
                                            <p className={cx('name')}>khachuy23</p>
                                            <button className={cx('new-ms-btn')}>New Message</button>
                                        </div>

                                        <div className={cx('body-ms')}>
                                            <SmileFaceMessageIcon />

                                            <h2>Talk to a Tumblr</h2>

                                            <div ref={contactList} className={cx('contact-list')}>
                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/adf370716dbd463f5ff793b797180076/1b223b005b7db6f4-d7/s64x64u_c1/2fd4f32e40e7aa46670f09fc2b8d7c6e7bd6eef4.jpg" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/ee2582d1867b231f85044a2762359c8a/c608bab2ad49f738-3b/s64x64u_c1/31fa8ca9aa32283799e3af214882e4388959e93b.pnj" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/b45a4cc06ed5e447874968178496f556/5774d9a5b7f42c4e-a8/s64x64u_c1/b665418e91fa5c18db6e82005f41a3f1e6ea9a02.jpg" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/b366b9617e11fe41aa754fa54dda5ea1/afd0742ce1366b12-f7/s64x64u_c1/d9f2f7ab491be8b23d6e6f0d9c889bd1d58c5ba9.jpg" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/avatar_ba9f842dfbc1_64.pnj" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/ac2b8e4c87c0f0e0f99b4bf55cd06513/e187dffc80f74ebc-92/s64x64u_c1/7b441a11e4ee51aa4c6685f740bb53b2634c28b9.jpg" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/avatar_b1d0a71fb9c2_64.pnj" />
                                                </button>

                                                <button className={cx('start-conversation-btn')}>
                                                    <Image src="https://64.media.tumblr.com/41b9f962f95a9d2976746ec2d78d7803/8982b15b4acb705b-03/s64x64u_c1/c111398ea91bdb6aaebfb25ea8c3ea9cf3e3a9fe.jpg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Button
                                className="sidebar-nav-btn"
                                active={showMessage}
                                onClick={() => {
                                    setShowMessage(!showMessage);
                                }}
                                leftIcon={<MessagesIcon />}
                            >
                                Messages
                            </Button>
                        </HeadlessTippy>

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
                            {/* <MenuItem title="Likes" to={config.routes.likes} iconRight={105} />
                                <MenuItem title="Following" to={config.routes.following} iconRight={19} /> */}
                            <NavLink className={(nav) => cx({ active: nav.isActive })} to={config.routes.likes}>
                                <span>Likes</span>
                                <span>105</span>
                            </NavLink>

                            <NavLink className={(nav) => cx({ active: nav.isActive })} to={config.routes.following}>
                                <span>Following</span>
                                <span>19</span>
                            </NavLink>

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

                <div ref={glassContainer} id={cx('glass-container')}></div>

                <footer className={cx('footer')}>
                    <button className={cx('sidebar-footer-btn')} onClick={handleShowCreModal}>
                        <PenIcon />
                        Create
                    </button>

                    {showNewTxtPostCreaMdl && <NewTxtPostMdl onClick={handleNewTxtPostCreaClick} />}

                    {showCreModal && (
                        <div className={cx('create-modal')}>
                            <button
                                className={cx('mdl-btn')}
                                onClick={() => {
                                    document.body.classList.toggle('has-modal');
                                    setShowCreModal(!showCreModal);
                                }}
                            ></button>

                            <div className={cx('modal-actions')}>
                                <div className={cx('action')}>
                                    <button className={cx('act-btn')} onClick={handleNewTxtPostCreaClick}>
                                        <div className={cx('icon-cont', 'cr-txt-btn')}>
                                            <TextIcon />
                                        </div>
                                        Text
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-pht-btn')}>
                                            <CameraIcon />
                                        </div>
                                        Photo
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-qot-btn')}>
                                            <QuoteIcon />
                                        </div>
                                        Quote
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-link-btn')}>
                                            <LinkIcon />
                                        </div>
                                        Link
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-cht-btn')}>
                                            <ChatIcon />
                                        </div>
                                        Chat
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-aud-btn')}>
                                            <AudioIcon />
                                        </div>
                                        Audio
                                    </button>
                                </div>

                                <div className={cx('action')}>
                                    <button className={cx('act-btn')}>
                                        <div className={cx('icon-cont', 'cr-vid-btn')}>
                                            <VideoIcon />
                                        </div>
                                        Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </footer>
                {/* <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" /> */}
            </aside>
        </MediaQuery>
    );
}

export default Sidebar;
