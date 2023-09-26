import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/shift-away.css';

import styles from './Interact.module.scss';
import { LikeIcon, LikedIcon, ReblogIcon, ReplyIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function Interact({ reply = true, notes }) {
    const buttonRef = useRef();

    const handleLike = () => {
        buttonRef.current.classList.toggle(cx('active'));
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('note-btn')}>
                {notes} <span className={cx('f-light')}>notes</span>
            </button>

            <div className={cx('interact-list')}>
                <Tippy
                    animation="shift-away"
                    theme={'material'}
                    content={<span style={{ fontWeight: 500 }}>Share</span>}
                    arrow
                >
                    <button className={cx('share-btn')}>
                        <ShareIcon />
                    </button>
                </Tippy>

                {reply && (
                    <Tippy
                        animation="shift-away"
                        theme={'material'}
                        content={<span style={{ fontWeight: 500 }}>Reply</span>}
                        arrow
                    >
                        <button className={cx('reply-btn')}>
                            <ReplyIcon />
                        </button>
                    </Tippy>
                )}

                <Tippy
                    animation="shift-away"
                    theme={'material'}
                    content={<span style={{ fontWeight: 500 }}>Reblog</span>}
                    arrow
                >
                    <Link className={cx('share-link')} to="/reblog/post">
                        <ReblogIcon />
                    </Link>
                </Tippy>

                <Tippy
                    animation="shift-away"
                    theme={'material'}
                    content={<span style={{ fontWeight: 500 }}>Like</span>}
                    arrow
                >
                    <button ref={buttonRef} className={cx('like-btn')} onClick={handleLike}>
                        <LikeIcon className={cx('like')} />
                        <LikedIcon className={cx('liked')} />
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default Interact;
