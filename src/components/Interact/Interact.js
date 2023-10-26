import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/shift-away.css';

import styles from './Interact.module.scss';
import { CloseIcon12, LikeIcon, LikedIcon, ReblogIcon, ReplyIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function Interact({
    showReplySec = false,
    hasReply = true,
    notes = 0,
    isLiked,
    onReplyClick = function () {},
    handleLike = function () {},
    handleDLike = function () {},
}) {
    const buttonRef = useRef();

    const isMobNTablet = useMediaQuery({ maxWidth: 319 });

    return (
        <div className={cx('wrapper')}>
            {!showReplySec && (
                <button className={cx('note-btn')} onClick={onReplyClick}>
                    {notes} <span className={cx('f-light')}>notes</span>
                </button>
            )}

            {showReplySec &&
                (isMobNTablet ? (
                    <button className={cx('note-btn', 'cls-n-btn')} onClick={onReplyClick}>
                        <CloseIcon12 />
                    </button>
                ) : (
                    <button className={cx('note-btn', 'cls-n-btn')} onClick={onReplyClick}>
                        <CloseIcon12 />
                        Close notes
                    </button>
                ))}

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

                <MediaQuery maxWidth={1059}>
                    {isLiked ? (
                        <button className={cx('like-btn')} onClick={handleDLike}>
                            <LikedIcon className={cx('liked')} />
                        </button>
                    ) : (
                        <button className={cx('like-btn')} onClick={handleLike}>
                            <LikeIcon className={cx('like')} />
                        </button>
                    )}
                </MediaQuery>

                <MediaQuery minWidth={1060}>
                    {isLiked ? (
                        <Tippy
                            className={cx('liked-tippy')}
                            animation="shift-away"
                            theme="red"
                            content={<span style={{ color: 'rgb(34, 34, 34)' }}>Liked</span>}
                            arrow
                        >
                            <button className={cx('like-btn')} onClick={handleDLike}>
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
                </MediaQuery>
            </div>
        </div>
    );
}

export default Interact;
