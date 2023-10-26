import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useShowtime } from 'react-showtime';

import styles from './Header.module.scss';
import { ShortLogoIcon, SearchIcon, CloseIcon12, CloseIcon18 } from '~/components/Icons';
import config from '~/config';
import SidebarMdl from '../SidebarMdl/SidebarMdl';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function Header() {
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    const [ref, isMounted, show, hide] = useShowtime({
        startHidden: true,
        showTransition: { transform: 'translateX(0)' },
        hideTransition: { transform: 'translateX(-100%)' },
        showDuration: 250,
        showEasing: 'ease-in-out',
    });

    const searchInputRef = useRef();

    return (
        <>
            <header className={cx('wrapper')}>
                <button
                    className={cx('menu-btn', { opened: isMounted })}
                    onClick={() => {
                        document.body.classList.toggle('has-modal');
                        if (showSearchResult) {
                            setShowSearchResult(!showSearchResult);
                        }
                        show();
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

            {isMounted && <SidebarMdl ref={ref} isMouted={isMounted} hide={hide} />}
        </>
    );
}

export default Header;
