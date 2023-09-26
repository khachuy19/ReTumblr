import classNames from 'classnames/bind';

import styles from './Inbox.module.scss';
import { MessagesIconAlt, NoMessageIcon } from '~/components/Icons';
import Search from '~/components/Search';
import { NavLink, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Inbox() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-content')}>
                <div className={cx('inbox-container')}>
                    <NoMessageIcon />

                    <p className={cx('top-parag')}>You have no messages</p>

                    <p className={cx('bottom-parag')}>Learn more.</p>
                </div>
            </div>

            <aside className={cx('sidebar')}>
                <Search />

                <div className={cx('links')}>
                    <NavLink to="/inbox" className={(nav) => cx('link', { active: nav.isActive })}>
                        <MessagesIconAlt />
                        All Messages
                    </NavLink>

                    <NavLink to="/blog/khachuy23/messages" className={(nav) => cx('link', { active: nav.isActive })}>
                        Twenties
                    </NavLink>
                </div>

                <p className={cx('instruct')}>
                    Your Inbox is an aggregate view of questions and submissions that any of your blogs receive.
                </p>

                <footer>
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

export default Inbox;
