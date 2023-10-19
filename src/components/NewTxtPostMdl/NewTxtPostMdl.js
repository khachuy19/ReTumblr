import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './NewTxtPostMdl.module.scss';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function NewTxtPostMdl({ onClick }) {
    return (
        <div className={cx('new-post-txt-mdl')}>
            <div className={cx('wrapper')}>
                <header className={cx('hd')}>
                    <span>khachuy23</span>
                </header>

                <Image
                    src="https://64.media.tumblr.com/8f2d065969ef09b6587bf193add026b3/bfc46daa84453fae-a8/s64x64u_c1/b3e0c6f30417cab97ca50dc4f7197ed972796f19.jpg"
                    className={cx('avt')}
                />

                <main className={cx('main-ctn')}>
                    <input type="text" className={cx('title')} placeholder="Title" />
                    <textarea rows={50} className={cx('ctn')} placeholder="Go ahead, put anythings."></textarea>

                    <button className={cx('btn', 'main-ctn-btn')}>#add tags to help people find your post</button>
                </main>

                <footer className={cx('ftr')}>
                    <button className={cx('btn', 'cls-btn')} onClick={onClick}>
                        Close
                    </button>

                    <button className={cx('btn', 'post-btn')}>Post now</button>
                </footer>
            </div>
        </div>
    );
}

export default NewTxtPostMdl;
