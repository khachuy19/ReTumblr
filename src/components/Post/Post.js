import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import HeadlessTippy from '@tippyjs/react/headless';
import { useCallback, useState, useEffect, useRef } from 'react';

import styles from './Post.module.scss';
import Image from '../Image';
import {
    AirPlaneIcon,
    CaretIcon,
    CheckmarkIcon,
    LikeIcon,
    MoreIcon,
    ReblogIcon,
    ReplyIcon,
    ThinReblogIcon,
    ThinReplyIcon,
} from '../Icons';
import Interact from '../Interact';
import Blaze from '../Blaze';
import Popover from '../Popover';
import PostModal from '../PostModal';
import { flushSync } from 'react-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Post({ data, hasFollow = false }) {
    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showReplySec, setShowReplySec] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const [replyInp, setReplyInp] = useState('');
    const [replies, setReplies] = useState([]);
    const [showReplySubMenu, setShowReplySubMenu] = useState(false);
    const [morSubMenuI, setMorSubMenuI] = useState(undefined);
    const [showOrdMenu, setShowOrdMenu] = useState(false);
    const [ordSelected, setOrdSelected] = useState(0);

    const txtRef = useRef();

    const handleSHowReplySec = useCallback(() => {
        setShowReplySec(!showReplySec);
    }, [showReplySec]);

    const handleSHowReplySubMenu = useCallback(
        (i) => {
            setShowReplySubMenu(!showReplySubMenu);
            setMorSubMenuI(i);
        },
        [showReplySubMenu],
    );

    const handleCreaRep = () => {
        setReplies([...replies, replyInp]);
        setReplyInp('');
        txtRef.current.focus();
    };

    const handleDelRep = (i) => {
        replies.splice(i, 1);

        flushSync(() => {
            setReplies(replies);
            setShowReplySubMenu(!showReplySubMenu);
        });
    };

    const handleShowOrdMenu = () => {
        setShowOrdMenu(!showOrdMenu);
    };

    const handleHideModal = useCallback(() => {
        setShowModal(!showModal);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowModal(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                setReplies([...replies, replyInp]);
                setReplyInp('');
                txtRef?.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [replyInp]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('empty-box')}></div>

                <article className={cx('card')}>
                    <div className={cx('sticky-container')}>
                        <Popover data={data}>
                            <Link to={`/${data.blog_name}`} className={cx('avt-link')}>
                                <Image
                                    src={data.trail[0]?.blog?.theme.header_image ?? data.photos[0].alt_sizes[0].url}
                                    className={cx('avt')}
                                />
                            </Link>
                        </Popover>
                    </div>

                    <header className={cx('head')}>
                        <div className={cx('action')}>
                            <div className={cx('follow')}>
                                <Popover data={data}>
                                    <Link to={`/${data.blog_name}`} className={cx('link')}>
                                        {data.blog_name}
                                    </Link>
                                </Popover>
                                {hasFollow && <button className={cx('follow-btn')}>Follow</button>}
                            </div>
                            <div className={cx('more')}>
                                <HeadlessTippy
                                    placement="bottom"
                                    offset={[125, 10]}
                                    interactive
                                    visible={showMore}
                                    onClickOutside={() => setShowMore(!showMore)}
                                    render={(attrs) => (
                                        <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                            <div className={cx('popper-wrapper')}>
                                                <ul className={cx('more-list')}>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <Link className={cx('more-link')}>
                                                            {data.date.slice(0, 16)}
                                                        </Link>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item', 'two-lines')}
                                                    >
                                                        <p>Community Label: Everyone</p>
                                                        <span className={cx('ms-lb-btn')}>Missing label?</span>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn')}>Copy link</button>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn')}>Unfollow</button>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn')}>
                                                            Subscribe to conversation
                                                        </button>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn')}>
                                                            Content settings
                                                        </button>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn', 'red-color')}>
                                                            Report {data.blog_name}
                                                        </button>
                                                    </li>
                                                    <li
                                                        onClick={() => setShowMore(!showMore)}
                                                        className={cx('more-item')}
                                                    >
                                                        <button className={cx('more-item-btn', 'red-color')}>
                                                            Block {data.blog_name}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <button className={cx('more-btn')} onClick={() => setShowMore(!showMore)}>
                                        <MoreIcon />
                                    </button>
                                </HeadlessTippy>
                            </div>
                        </div>
                    </header>

                    <div className={cx('img-cont')}>
                        <div
                            className={cx('img')}
                            onClick={() => {
                                document.body.classList.toggle('has-modal');
                                setShowModal(!showModal);
                            }}
                        >
                            {data.type === 'text' ? (
                                data.body && parse(data.body.replace(/\\/g, ''))
                            ) : data.type === 'video' ? (
                                parse(data.player[0].embed_code)
                            ) : (
                                <Image className={cx('img')} src={data.photos[0].original_size.url} />
                            )}
                            {showModal && <PostModal data={data} handleHideModal={handleHideModal} />}
                        </div>
                    </div>

                    <div className={cx('post-content')}>
                        {/* <p className={cx('main-post-content')}>{data.summary}</p> */}

                        <div className={cx('tag-list')}>
                            {data.tags.map((tag) => {
                                return (
                                    <Link key={tag} to={`/tagged/${tag}`} className={cx('tag-link')}>
                                        #{tag}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <footer className={cx('foot')}>
                        {data.can_blaze && <Blaze />}
                        <Interact
                            showReplySec={showReplySec}
                            notes={data.note_count}
                            onReplyClick={handleSHowReplySec}
                        />
                    </footer>

                    {showReplySec && (
                        <div className={cx('rep-sec')}>
                            <div className={cx('rep-head')}>
                                <ul className={cx('counters')}>
                                    <li className={cx('c-item')}>
                                        <button
                                            className={cx('head-btn', 'rep-btn', { active: isActive === 0 })}
                                            onClick={() => setIsActive(0)}
                                        >
                                            <ReplyIcon className={cx('rl-icon')} />0
                                        </button>
                                    </li>

                                    <li className={cx('c-item')}>
                                        <button
                                            className={cx('head-btn', 'rbl-btn', { active: isActive === 1 })}
                                            onClick={() => setIsActive(1)}
                                        >
                                            <ReblogIcon className={cx('rbl-icon')} />0
                                        </button>
                                    </li>

                                    <li className={cx('c-item')}>
                                        <button
                                            className={cx('head-btn', 'like-btn', { active: isActive === 2 })}
                                            onClick={() => setIsActive(2)}
                                        >
                                            <LikeIcon className={cx('l-icon')} />

                                            {data.note_count}
                                        </button>
                                    </li>
                                </ul>

                                <HeadlessTippy
                                    placement="bottom-end"
                                    offset={[0, 0]}
                                    interactive
                                    visible={showOrdMenu}
                                    render={(attrs) => (
                                        <div className={cx('ordering-popper')} tabIndex={-1} {...attrs}>
                                            <div className={cx('popper-wrapper')}>
                                                <button
                                                    className={cx('oldest-o-btn')}
                                                    onClick={() => {
                                                        setShowOrdMenu(!showOrdMenu);
                                                        setOrdSelected(0);
                                                    }}
                                                >
                                                    Oldest first{' '}
                                                    {ordSelected === 0 ? (
                                                        <CheckmarkIcon className={cx('checkmark-icon')} />
                                                    ) : null}
                                                </button>

                                                <button
                                                    className={cx('newest-o-btn')}
                                                    onClick={() => {
                                                        setShowOrdMenu(!showOrdMenu);
                                                        setOrdSelected(1);
                                                    }}
                                                >
                                                    Newest first
                                                    {ordSelected === 1 ? (
                                                        <CheckmarkIcon className={cx('checkmark-icon')} />
                                                    ) : null}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <button className={cx('odering-btn')} onClick={handleShowOrdMenu}>
                                        {ordSelected === 0 ? 'Oldest first' : 'Newest first'}
                                        <CaretIcon className={cx('caret-icon', { active: showOrdMenu })} />
                                    </button>
                                </HeadlessTippy>
                            </div>

                            {isActive === 0 && (
                                <div className={cx('add-rep')}>
                                    <Image
                                        src="https://64.media.tumblr.com/8f2d065969ef09b6587bf193add026b3/bfc46daa84453fae-a8/s64x64u_c1/b3e0c6f30417cab97ca50dc4f7197ed972796f19.jpg"
                                        className={cx('rep-avt')}
                                    />

                                    {/* <input
                                type="text"
                                name="rep-inp"
                                placeholder="Reply as @khachuy23"
                                className={cx('rep-inp')}
                            /> */}

                                    <div className={cx('inp-cont')}>
                                        <textarea
                                            ref={txtRef}
                                            className={cx('rep-txtarea')}
                                            placeholder="Reply as @khachuy23"
                                            value={replyInp}
                                            maxLength="475"
                                            rows={1}
                                            onChange={(e) => setReplyInp(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <button
                                        className={cx('send-btn', { enabled: replyInp.length > 0 })}
                                        onClick={handleCreaRep}
                                    >
                                        <AirPlaneIcon />
                                    </button>
                                </div>
                            )}

                            <div className={cx('rep-cont')}>
                                <div className={cx('rep-list')}>
                                    {replies.map((reply, i) => (
                                        <div className={cx('rep-item')} key={i}>
                                            <div className={cx('rep-item-cont')}>
                                                <Image
                                                    src="https://64.media.tumblr.com/8f2d065969ef09b6587bf193add026b3/bfc46daa84453fae-a8/s64x64u_c1/b3e0c6f30417cab97ca50dc4f7197ed972796f19.jpg"
                                                    className={cx('rep-item-avt')}
                                                />

                                                <div className={cx('rep-item-ctn')}>
                                                    <h4>khachuy23</h4>

                                                    <p>{reply}</p>
                                                </div>
                                            </div>

                                            <HeadlessTippy
                                                placement="bottom-end"
                                                interactive
                                                visible={showReplySubMenu && i === morSubMenuI}
                                                onClickOutside={() => setShowReplySubMenu(!showReplySubMenu)}
                                                render={(attrs) => (
                                                    <div className={cx('rep-more-btn-popper')} tabIndex={-1} {...attrs}>
                                                        <div className={cx('popper-wrapper')}>
                                                            <button className={cx('reply-rep-btn')}>Reply</button>

                                                            <button
                                                                className={cx('del-rep-btn')}
                                                                onClick={() => handleDelRep(i)}
                                                            >
                                                                Delete reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            >
                                                <button
                                                    className={cx('mor-btn')}
                                                    onClick={() => handleSHowReplySubMenu(i)}
                                                >
                                                    <MoreIcon />
                                                </button>
                                            </HeadlessTippy>
                                        </div>
                                    ))}
                                </div>

                                {isActive === 0 && replies.length <= 0 && (
                                    <div className={cx('no-rep')}>
                                        <ThinReplyIcon />

                                        <span>Be the first to Reply! Or...</span>

                                        <button className={cx('chkout-btn')}>Check out the Reblogs</button>
                                    </div>
                                )}

                                {isActive === 1 && (
                                    <div className={cx('no-rbl')}>
                                        <ThinReblogIcon />

                                        <span>No reblogs with this filter yet.</span>

                                        <button className={cx('chkout-btn')}>Try another filter?</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}

export default Post;
