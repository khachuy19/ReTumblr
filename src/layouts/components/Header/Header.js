import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useSpring } from '@react-spring/web';

import styles from './Header.module.scss';
import { ShortLogoIcon, SearchIcon, CloseIcon12, CloseIcon18 } from '~/components/Icons';
import config from '~/config';
import SidebarMdl from '../SidebarMdl/SidebarMdl';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function Header() {
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [springs, api] = useSpring(() => ({
        from: { x: -360 },
    }));

    const handleClsClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: -360,
            },
        });

        setTimeout(() => {
            document.body.classList.toggle('has-modal');
            setShowMenu(!showMenu);
        }, 200);
    };

    const handleOpenMenuClick = () => {
        api.start({
            from: {
                x: -360,
            },
            to: {
                x: 0,
            },
        });

        setShowMenu(!showMenu);
    };

    const searchInputRef = useRef();

    return (
        <>
            <header className={cx('wrapper')}>
                <button
                    className={cx('menu-btn')}
                    onClick={() => {
                        document.body.classList.toggle('has-modal');
                        if (showSearchResult) {
                            setShowSearchResult(!showSearchResult);
                        }
                        handleOpenMenuClick();
                    }}
                >
                    <span className={cx('bar')}></span>
                    <span className={cx('bar')}></span>
                    <span className={cx('bar')}></span>
                </button>

                {showSearchResult ? (
                    <Search ref={searchInputRef} />
                ) : (
                    <Link className={cx('link')} to={config.routes.home}>
                        <ShortLogoIcon className={cx('logo')} />
                    </Link>
                )}

                {showSearchResult ? (
                    <button
                        className={cx('search-btn')}
                        onClick={() => {
                            flushSync(() => setShowSearchResult(!showSearchResult));
                        }}
                    >
                        <CloseIcon18 />
                    </button>
                ) : (
                    <button
                        className={cx('search-btn')}
                        onClick={() => {
                            flushSync(() => setShowSearchResult(!showSearchResult));
                            searchInputRef.current.focus();
                        }}
                    >
                        <SearchIcon />
                    </button>
                )}
            </header>

            {showMenu && <SidebarMdl springs={springs} handleClsClick={handleClsClick} />}
        </>
    );
}

export default Header;
