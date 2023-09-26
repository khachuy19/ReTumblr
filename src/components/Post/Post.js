import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';

import styles from './Post.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { MoreIcon } from '../Icons';
import Interact from '../Interact';
import Blaze from '../Blaze';

const cx = classNames.bind(styles);

function Post({ data, follow = false }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('empty-box')}></div>

                <article className={cx('card')}>
                    <div className={cx('sticky-container')}>
                        <Image
                            src={data.trail[0]?.blog?.theme.header_image_focused ?? data.photos[0].alt_sizes[0].url}
                            className={cx('avt')}
                        />
                    </div>

                    <header className={cx('head')}>
                        <div className={cx('action')}>
                            <div className={cx('follow')}>
                                <Link to={`/${data.blog_name}`} className={cx('link')}>
                                    {data.blog_name}
                                    {follow && <button className={cx('follow-btn')}>Follow</button>}
                                </Link>
                            </div>
                            <div className={cx('more')}>
                                <button className={cx('more-btn')}>
                                    <MoreIcon />
                                </button>
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
