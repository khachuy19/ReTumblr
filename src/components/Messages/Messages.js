import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './Messages.module.scss';
import Image from '~/components/Image/Image';
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

const cx = classNames.bind(styles);

function Messages() {
    const contactList = useRef();

    const implementShaking = useCallback(() => {
        setInterval(() => {
            contactList?.current?.children[
                Math.floor(Math.random() * contactList.current.children.length)
            ].classList.toggle(cx('shake-conversation-btn'));
        }, 4000);
    }, []);

    useEffect(() => {
        implementShaking();
    }, []);

    return (
        <div className={cx('ms-popper-wrapper')}>
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
    );
}

export default Messages;
