import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import MediaQuery from 'react-responsive';

import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import ToTop from '~/components/ToTop';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showToTop, setShowToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowToTop(true);
            } else {
                setShowToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showToTop]);

    return (
        <div className={cx('wrapper')}>
            <MediaQuery minWidth={1060}>
                <Sidebar />
            </MediaQuery>

            <div className={cx('container')}>
                <MediaQuery maxWidth={1059}>
                    <Header />
                </MediaQuery>

                <div className={cx('content')}>{children}</div>
            </div>

            {showToTop && <ToTop />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
