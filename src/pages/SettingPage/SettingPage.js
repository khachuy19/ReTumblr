import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

import styles from './SettingPage.module.scss';
import config from '~/config';
import Search from '~/components/Search';
import { ToTopIcon } from '~/components/Icons';
import Image from '~/components/Image';
import SNavigation, { SNavigationItem } from './SNavigation';

const cx = classNames.bind(styles);

function SettingPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-content')}>{children}</div>

            <aside className={cx('sidebar')}>
                <Search />

                <SNavigation>
                    <SNavigationItem to={config.routes.settingAccount} title="Account" des="The essentials" />
                    <SNavigationItem
                        to={config.routes.settingDashboard}
                        title="Dashboard"
                        des="Appearance options, text editor"
                    />
                    <SNavigationItem
                        to={config.routes.settingNotifications}
                        title="Notifications"
                        des="Via email & mobile"
                    />
                    <SNavigationItem
                        to={config.routes.settingDomains}
                        title="Domains"
                        des="Buy and manage custom domains"
                    />
                    <SNavigationItem
                        to={config.routes.settingAdFree}
                        title="Ad-Free Browsing"
                        des="Manage your subscription"
                    />
                    <SNavigationItem
                        to={config.routes.settingPurchases}
                        title="Payment & purchases"
                        des="Manage your payment method and view purchases"
                    />
                    <SNavigationItem
                        to={config.routes.settingSubscriptions}
                        title="Subscriptions"
                        des="Manage your subscriptions"
                    />
                    <SNavigationItem to={config.routes.settingApps} title="Apps" des="Things you've connected" />
                    <SNavigationItem
                        to={config.routes.settingPrivacy}
                        title="Privacy"
                        des="Manage your privacy settings"
                    />
                    <SNavigationItem to={config.routes.settingLabs} title="Labs" des="Weird new stuff we're making" />
                    <SNavigationItem
                        to={config.routes.settingGifts}
                        title="Gifts"
                        des="View and accept gifts sent to your blogs."
                    />
                </SNavigation>

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

                {false && (
                    <button className={cx('to-top-btn')}>
                        <ToTopIcon />
                    </button>
                )}
            </aside>
        </div>
    );
}

export default SettingPage;
