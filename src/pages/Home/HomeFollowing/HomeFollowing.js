import { useEffect, useState, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import { postss } from './postss';
import styles from './HomeFollowing.module.scss';
import Post from '~/components/Post';
import Progress from '~/components/Progress';
import { getFollowing } from '~/services/getFollowingService';
import { getPost } from '~/services/getPost';

const cx = classNames.bind(styles);

function HomeFollowing() {
    const [followings, setFollowings] = useState([]);
    const [postShow, setPostShow] = useState([]);
    const [loading, setLoading] = useState(true);

    let i = useRef(0);

    // useEffect(() => {
    //     const fetchFollowingAPI = async () => {
    //         try {
    //             console.log(1, 'set page 1');
    //             const rs = await getFollowing();
    //             setFollowings(rs.blogs);
    //             console.log(rs);
    //         } catch (error) {
    //             return error;
    //         }
    //     };
    //     fetchFollowingAPI();
    // }, []);
    // console.log(followings);

    // useEffect(() => {
    //     console.log(2);
    //     setLoading(true);

    //     if (followings.length > 0) {
    //         const postRS = [];
    //         const getPosts = () => {
    //             followings.forEach(async (following) => {
    //                 try {
    //                     const rs = await fetch(
    //                         `https://api.tumblr.com/v2/blog/${encodeURI(
    //                             following.name,
    //                         )}/posts?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&limit=3`,
    //                     )
    //                         .then((res) => res.json())
    //                         .then((data) => postRS.push(data.response.posts));

    //                     // const rs = await getPost(following.name, 3);
    //                     // postRS.push(rs.data.response.posts);
    //                 } catch (error) {
    //                     console.log(error);
    //                 }
    //             });
    //         };
    //         getPosts();
    //         setLoading(false);
    //         setPosts(postRS);
    //     }
    // }, [followings]);

    const renderPost = useCallback(() => {
        console.log(i.current);
        let j = i.current + 5;
        console.log(j);
        const rs = [];
        for (i.current; i.current < j && i.current < postss.length; i.current++) {
            rs.push(<Post key={i.current} data={postss[i.current]} />);
        }
        if (rs.length === 0) {
            return;
        }
        console.log(rs);
        console.log(postShow);
        setPostShow((postShow) => [...postShow, ...rs]);
        setLoading(false);
    }, []);

    useEffect(() => {
        const checkWindowEnd = () => {
            if (window.scrollY === document.documentElement.offsetHeight - window.innerHeight) {
                setLoading(true);
                setTimeout(renderPost, 1000);
            }
        };

        window.addEventListener('scroll', checkWindowEnd);

        return () => {
            console.log('sthing');
            window.removeEventListener('scroll', checkWindowEnd);
        };
    }, [postShow]);

    return (
        <div className={cx('wrapper')}>
            {/* <button
                onClick={() => {
                    console.log(postShow);
                }}
            >
                Show
            </button> */}
            {postShow.length === 0
                ? (function () {
                      setTimeout(renderPost, 1500);
                  })()
                : postShow}

            {loading && (
                <div className={cx('progress-container')}>
                    <Progress
                        wrapperWidth="100%"
                        containerWidth="78px"
                        boxStyle={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '3px',
                            marginRight: '3px',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default HomeFollowing;
