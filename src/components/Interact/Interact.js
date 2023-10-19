import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/shift-away.css';

import styles from './Interact.module.scss';
import { CloseIcon12, LikeIcon, LikedIcon, ReblogIcon, ReplyIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function Interact({ showReplySec = false, sPad = false, hasReply = true, notes = 0, onReplyClick = function () {} }) {
    const [like, setLike] = useState(false);

    const buttonRef = useRef();

    const handleLike = () => {
        setLike((like) => !like);
    };

    return (
        <div className={cx('wrapper', { 's-pad': sPad })}>
            {!showReplySec && (
                <button className={cx('note-btn')} onClick={onReplyClick}>
                    {notes} <span className={cx('f-light')}>notes</span>
                </button>
            )}

            {showReplySec && (
                <button className={cx('note-btn', 'cls-n-btn')} onClick={onReplyClick}>
                    <CloseIcon12 />
                    Close notes
                </button>
            )}

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

                {hasReply && (
                    <Tippy
                        animation="shift-away"
                        theme={'material'}
                        content={<span style={{ fontWeight: 500 }}>Reply</span>}
                        arrow
                    >
                        <button className={cx('reply-btn')} onClick={onReplyClick}>
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

                {like ? (
                    <Tippy
                        className={cx('liked-tippy')}
                        animation="shift-away"
                        theme="red"
                        content={<span style={{ color: 'rgb(34, 34, 34)' }}>Liked</span>}
                        arrow
                    >
                        <button className={cx('like-btn')} onClick={handleLike}>
                            <LikedIcon className={cx('liked')} />
                        </button>
                    </Tippy>
                ) : (
                    <Tippy
                        animation="shift-away"
                        theme={'material'}
                        content={<span style={{ fontWeight: 500 }}>Like</span>}
                        arrow
                    >
                        <button className={cx('like-btn')} onClick={handleLike}>
                            <LikeIcon className={cx('like')} />
                        </button>
                    </Tippy>
                )}
            </div>
        </div>
    );
}

export default Interact;
