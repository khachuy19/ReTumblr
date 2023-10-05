import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import styles from './Popover.module.scss';
import Image from '../Image';
import { AddMessageIcon, MoreIcon } from '../Icons';

const cx = classNames.bind(styles);

function Popover({ data, children, ...props }) {
    return (
        <HeadlessTippy
            {...props}
            // onHide={handleMouseLeave}
            placement="bottom"
            interactive
            delay={[400, 200]}
            render={(attrs) => (
                <div
                    className={cx('checkout-popper')}
                    tabIndex="-1"
                    style={{ backgroundColor: data.trail[0]?.blog?.theme.background_color } ?? '#fff'}
                    {...attrs}
                >
                    <div className={cx('popper-wrapper')}>
                        <main className={cx('main')}>
                            <Link to={`/${data.blog_name}`} className={cx('popper-link')}>
                                <Image
                                    src={data.trail[0]?.blog?.theme.header_image ?? data.photos[0].alt_sizes[0].url}
                                    className={cx('top-img')}
                                />
                            </Link>

                            <div className={cx('content')}>
                                <header className={cx('head')}>
                                    <Link to={`/${data.blog_name}`} className={cx('head-link')}>
                                        <div className={cx('text')}>{data.blog_name}</div>
                                    </Link>

                                    <div className={cx('head-control')}>
                                        <button className={cx('add-ms-btn')}>
                                            <AddMessageIcon />
                                        </button>

                                        <div className={cx('more-btn')}>
                                            <MoreIcon />
                                        </div>

                                        <button className={cx('popper-follow-btn')}>Follow</button>
                                    </div>
                                </header>

                                <Link to={`/${data.blog_name}`} className={cx('avt-link')}>
                                    <div className={cx('img-wrapper')}>
                                        <div
                                            className={cx('img-round')}
                                            style={
                                                { backgroundColor: data.trail[0]?.blog?.theme.background_color } ??
                                                '#fff'
                                            }
                                        >
                                            <Image
                                                src={
                                                    data.trail[0]?.blog?.theme.header_image ??
                                                    data.photos[0].alt_sizes[0].url
                                                }
                                                className={cx('avt')}
                                            />
                                        </div>
                                    </div>
                                </Link>

                                <div
                                    className={cx('title')}
                                    style={{ '--blog-title-color': data.trail[0]?.blog?.theme.title_color }}
                                >
                                    <h2
                                        className={cx('heading')}
                                        style={{
                                            fontFamily: data.trail[0]?.blog?.theme.title_font ?? 'sans-serif',
                                            fontWeight: data.trail[0]?.blog?.theme.title_font_weight,
                                        }}
                                    >
                                        {data.blog.title}
                                    </h2>
                                    <p className={cx('des')}>
                                        {data.blog.description.replace(/(<p>)|(<br>)|(<\/p>)|(<h3>)|(<\/h3>)/g, '')}
                                    </p>
                                </div>
                            </div>

                            <div className={cx('recent-posts')}>
                                <Link to={data.post_url} className={cx('post-link')}>
                                    <Image
                                        src={data.trail[0]?.blog?.theme.header_image_scaled}
                                        className={cx('post-img')}
                                    />
                                </Link>

                                <Link to={data.post_url} className={cx('post-link')}>
                                    <Image src="" className={cx('post-img')} />
                                </Link>

                                <Link to={data.post_url} className={cx('post-link')}>
                                    <Image
                                        src={data.trail[0]?.blog?.theme.header_image_scaled}
                                        className={cx('post-img')}
                                    />
                                </Link>
                            </div>
                        </main>
                    </div>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Popover;
