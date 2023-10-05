import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Post.module.scss';
import Image from '../Image';
import { MoreIcon } from '../Icons';
import Interact from '../Interact';
import Blaze from '../Blaze';
import Popover from '../Popover';

const cx = classNames.bind(styles);

function Post({ data, hasFollow = false }) {
    const [showMore, setShowMore] = useState(false);

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

                    <div className={cx('img')}>
                        <a href={data.post_url}>
                            {/* <Image className={cx('img')} src={images.userImg} /> */}
                            {data.type === 'text' ? (
                                data.body && parse(data.body.replace(/\\/g, ''))
                            ) : data.type === 'video' ? (
                                parse(data.player[0].embed_code)
                            ) : (
                                <Image className={cx('img')} src={data.photos[0].original_size.url} />
                            )}
                        </a>
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
                        <Interact notes={data.note_count} />
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default Post;
