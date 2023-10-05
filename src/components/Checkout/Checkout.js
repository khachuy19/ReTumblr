import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Checkout.module.scss';
import Image from '../Image';
import { AddMessageIcon, ClearIcon, MoreIcon } from '../Icons';
import Popover from '../Popover';

const cx = classNames.bind(styles);

function Checkout() {
    const [show, setShow] = useState(true);

    const link1Ref = useRef();
    const link2Ref = useRef();
    const link3Ref = useRef();
    const link4Ref = useRef();

    const handleMouseLeave = () => {
        setShow(true);
    };

    useEffect(() => {
        const handleMouseEnter = () => {
            setTimeout(() => {
                setShow(false);
            }, 1000);
        };

        link1Ref.current.addEventListener('mouseenter', handleMouseEnter);
        link2Ref.current.addEventListener('mouseenter', handleMouseEnter);
        link3Ref.current.addEventListener('mouseenter', handleMouseEnter);
        link4Ref.current.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            link1Ref.current?.removeEventListener('mouseenter', handleMouseEnter);
            link2Ref.current?.removeEventListener('mouseenter', handleMouseEnter);
            link3Ref.current?.removeEventListener('mouseenter', handleMouseEnter);
            link4Ref.current?.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [show]);

    return (
        <div className={cx('wrapper')}>
            <h1>Check out these blogs</h1>

            <ul className={cx('blog-list')}>
                <li className={cx('blog-item')}>
                    {show ? (
                        <HeadlessTippy
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('box-container')}>
                                            <div className={cx('loading3')}></div>
                                            <div className={cx('box-content')}>
                                                <p>spookyseasonthings</p>
                                                <div className={cx('box')}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link1Ref} to="/spookyseasonthings" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/4818941ec1c1da247646a5eb75bc086e/7758254d3baf3b9b-8c/s96x96u_c1/951e82672e7c23623d904eb68b7ffc3f30277357.jpg"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>spookyseasonthings</p>
                                    <p className={cx('blog-des')}>Because Every day should be Halloween</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    ) : (
                        <HeadlessTippy
                            onHide={handleMouseLeave}
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <main className={cx('main')}>
                                            <Link to="/spookyseasonthings" className={cx('popper-link')}>
                                                <Image
                                                    src="https://64.media.tumblr.com/fc4e6f7bc739b73f123ab3b145f7f962/2fec9bdb58723f51-c4/s2048x3072/ed2630dda697a59cae597fa4e930b6a999105913.jpg"
                                                    className={cx('top-img')}
                                                />
                                            </Link>

                                            <div className={cx('content')}>
                                                <header className={cx('head')}>
                                                    <Link to="/spookyseasonthings" className={cx('head-link')}>
                                                        <div className={cx('text')}>spookyseasonthings</div>
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

                                                <Link to="/spookyseasonthings" className={cx('avt-link')}>
                                                    <div className={cx('img-wrapper')}>
                                                        <div className={cx('img-round')}>
                                                            <Image
                                                                src="https://64.media.tumblr.com/4818941ec1c1da247646a5eb75bc086e/7758254d3baf3b9b-8c/s96x96u_c1/951e82672e7c23623d904eb68b7ffc3f30277357.jpg"
                                                                className={cx('avt')}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className={cx('title')} style={{ '--blog-title-color': '#000' }}>
                                                    <h2
                                                        className={cx('heading')}
                                                        style={{
                                                            fontFamily: 'Sans Serif',
                                                            fontWeight: 'normal',
                                                        }}
                                                    >
                                                        Because Every day should be Halloween
                                                    </h2>
                                                    <p className={cx('des')}>
                                                        #Autumncore #Nostalgiacore #Halloweencore
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={cx('recent-posts')}>
                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653973503606785"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/e7c6e21d24745a076c0c32b59d2c0f1f/fc62b4f58effe1aa-9d/s540x810/d8270aa0ba3c7ca6fdbad04941095f69c62c27a9.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653585141432320"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/88f7a0f4fc6e34c590b1f0083927afe2/6e7b9bf3ac82dbf0-b9/s1280x1920/c5d808bbac7279760fb548e8ddfa883499eb6104.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729646287919759360"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/b3238a8db301110eacc120a3e3b226d8/d07a8a887b794a39-2b/s540x810/ff141c56ea9b3754e2b453e5b49e7e1db593d25b.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link1Ref} to="/spookyseasonthings" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/4818941ec1c1da247646a5eb75bc086e/7758254d3baf3b9b-8c/s96x96u_c1/951e82672e7c23623d904eb68b7ffc3f30277357.jpg"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>spookyseasonthings</p>
                                    <p className={cx('blog-des')}>Because Every day should be Halloween</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    )}

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    {show ? (
                        <HeadlessTippy
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('box-container')}>
                                            <div className={cx('loading3')}></div>
                                            <div className={cx('box-content')}>
                                                <p>seasonofcozydreams</p>
                                                <div className={cx('box')}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link2Ref} to="/seasonofcozydreams" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/avatar_48a357da628e_64.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>seasonofcozydreams</p>
                                    <p className={cx('blog-des')}>Season of cozy dreams</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    ) : (
                        <HeadlessTippy
                            onHide={handleMouseLeave}
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div
                                    className={cx('checkout-popper')}
                                    tabIndex="-1"
                                    style={{ backgroundColor: '#df6e0a' }}
                                    {...attrs}
                                >
                                    <div className={cx('popper-wrapper')}>
                                        <main className={cx('main')}>
                                            <Link to="/seasonofcozydreams" className={cx('popper-link')}>
                                                <Image
                                                    src="https://64.media.tumblr.com/0b145d571ef5316def2e753e0c10a1b9/fe46558909edf3c4-ac/s2048x3072/58b91888804ebabdd03f4be04f085d2bb3e9ef80.jpg"
                                                    className={cx('top-img')}
                                                />
                                            </Link>

                                            <div className={cx('content')}>
                                                <header className={cx('head')}>
                                                    <Link to="/seasonofcozydreams" className={cx('head-link')}>
                                                        <div className={cx('text')}>seasonofcozydreams</div>
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

                                                <Link to="/seasonofcozydreams" className={cx('avt-link')}>
                                                    <div className={cx('img-wrapper')}>
                                                        <div
                                                            className={cx('img-round')}
                                                            style={{ backgroundColor: '#df6e0a' }}
                                                        >
                                                            <Image
                                                                src="https://64.media.tumblr.com/avatar_48a357da628e_64.pnj"
                                                                className={cx('avt')}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div
                                                    className={cx('title')}
                                                    style={{ '--blog-title-color': '#522302' }}
                                                >
                                                    <h2
                                                        className={cx('heading')}
                                                        style={{
                                                            fontFamily: 'Streetscript',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Season of cozy dreams
                                                    </h2>
                                                    <p className={cx('des')}>
                                                        “There is something incredibly nostalgic and significant about
                                                        the annual cascade of Autumn leaves.” – Joe. L. Wheeler
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={cx('recent-posts')}>
                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653973503606785"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/e7c6e21d24745a076c0c32b59d2c0f1f/fc62b4f58effe1aa-9d/s540x810/d8270aa0ba3c7ca6fdbad04941095f69c62c27a9.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653585141432320"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/88f7a0f4fc6e34c590b1f0083927afe2/6e7b9bf3ac82dbf0-b9/s1280x1920/c5d808bbac7279760fb548e8ddfa883499eb6104.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729646287919759360"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/b3238a8db301110eacc120a3e3b226d8/d07a8a887b794a39-2b/s540x810/ff141c56ea9b3754e2b453e5b49e7e1db593d25b.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link2Ref} to="/seasonofcozydreams" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/avatar_48a357da628e_64.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>seasonofcozydreams</p>
                                    <p className={cx('blog-des')}>Season of cozy dreams</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    )}

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    {show ? (
                        <HeadlessTippy
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('box-container')}>
                                            <div className={cx('loading3')}></div>
                                            <div className={cx('box-content')}>
                                                <p>ohsocozynights</p>
                                                <div className={cx('box')}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link3Ref} to="/ohsocozynights" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/d8cbb196e32549c988236d85c563dd60/93ea3d720e3daf18-91/s64x64u_c1/bd6286dec055ae42f03a3cf3577bef4018af6244.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>ohsocozynights</p>
                                    <p className={cx('blog-des')}>COZY NIGHTS</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    ) : (
                        <HeadlessTippy
                            onHide={handleMouseLeave}
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <main className={cx('main')}>
                                            <Link to="/ohsocozynights" className={cx('popper-link')}>
                                                <Image
                                                    src="https://64.media.tumblr.com/ed9efe338b635f92a6b1075aed72109e/766b933234f7706d-9e/s2048x3072/bfd838314b039ddf771080bb134a68ad35f6d627.png"
                                                    className={cx('top-img')}
                                                />
                                            </Link>

                                            <div className={cx('content')}>
                                                <header className={cx('head')}>
                                                    <Link to="/ohsocozynights" className={cx('head-link')}>
                                                        <div className={cx('text')}>ohsocozynights</div>
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

                                                <Link to="/ohsocozynights" className={cx('avt-link')}>
                                                    <div className={cx('img-wrapper')}>
                                                        <div className={cx('img-round')}>
                                                            <Image
                                                                src="https://64.media.tumblr.com/d8cbb196e32549c988236d85c563dd60/93ea3d720e3daf18-91/s64x64u_c1/bd6286dec055ae42f03a3cf3577bef4018af6244.pnj"
                                                                className={cx('avt')}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div
                                                    className={cx('title')}
                                                    style={{ '--blog-title-color': '#666666' }}
                                                >
                                                    <h2
                                                        className={cx('heading')}
                                                        style={{
                                                            fontFamily: '1785 GLC Baskerville',
                                                            fontWeight: 'normal',
                                                        }}
                                                    >
                                                        COZY NIGHTS
                                                    </h2>
                                                    <p className={cx('des')}>
                                                        Coffee and books lover. Christmas and Autumn. 🍂
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={cx('recent-posts')}>
                                                <Link
                                                    to="https://www.tumblr.com/aestum/699655104831389696/by-irena-carpaccio"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/92e046f86e1d7e45447e6c0e3053c87b/0502a19d05ddfce7-83/s540x810/008f793404ae3f491b255c885e92d9a060dabd05.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/christmas-winter/702887430541508608"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/5ff646a3a44b04d98ab641ff625519b5/672b32ae08847a6c-68/s540x810/b0a5d4cf52d1dfda36652baf597627fb54e3d1cd.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/ohsocozynights/726841910525853696"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/3743cb22162b5b17e9529d991427af81/b6bdda42e28e195c-b2/s540x810/ce47a993a987e380fadd8dd8154f515855ee2545.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link3Ref} to="/ohsocozynights" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/d8cbb196e32549c988236d85c563dd60/93ea3d720e3daf18-91/s64x64u_c1/bd6286dec055ae42f03a3cf3577bef4018af6244.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>ohsocozynights</p>
                                    <p className={cx('blog-des')}>COZY NIGHTS</p>
                                </div>
                            </Link>
                        </HeadlessTippy>

                        // <Popover onHide={handleMouseLeave}>
                        //     <Link ref={link3Ref} to="/ohsocozynights" className={cx('blog-link')}>
                        //         <Image
                        //             className={cx('img')}
                        //             src="https://64.media.tumblr.com/d8cbb196e32549c988236d85c563dd60/93ea3d720e3daf18-91/s64x64u_c1/bd6286dec055ae42f03a3cf3577bef4018af6244.pnj"
                        //         />
                        //         <div className={cx('blog-title')}>
                        //             <p className={cx('blog-name')}>ohsocozynights</p>
                        //             <p className={cx('blog-des')}>COZY NIGHTS</p>
                        //         </div>
                        //     </Link>
                        // </Popover>
                    )}

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>

                <li className={cx('blog-item')}>
                    {show ? (
                        <HeadlessTippy
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div className={cx('checkout-popper')} tabIndex="-1" {...attrs}>
                                    <div className={cx('popper-wrapper')}>
                                        <div className={cx('box-container')}>
                                            <div className={cx('loading3')}></div>
                                            <div className={cx('box-content')}>
                                                <p>autumn-wind-rain</p>
                                                <div className={cx('box')}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link4Ref} to="/autumn-wind-rain" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/avatar_371394d895a3_64.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>autumn-wind-rain</p>
                                    <p className={cx('blog-des')}>Autumn Wind & Rain</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    ) : (
                        <HeadlessTippy
                            onHide={handleMouseLeave}
                            placement="bottom-end"
                            interactive
                            delay={[400, 200]}
                            render={(attrs) => (
                                <div
                                    className={cx('checkout-popper')}
                                    tabIndex="-1"
                                    style={{ backgroundColor: '#340A00' }}
                                    {...attrs}
                                >
                                    <div className={cx('popper-wrapper')}>
                                        <main className={cx('main')}>
                                            <Link to="/autumn-wind-rain" className={cx('popper-link')}>
                                                <Image
                                                    src="https://64.media.tumblr.com/6dd1d0801c36aff7b39d1d75368cc3db/842a9692450ad9c0-03/s2048x3072_c7188,26384,92813,66023/cadc560ceb200fd24d1b323af08337de9186c80c.jpg"
                                                    className={cx('top-img')}
                                                />
                                            </Link>

                                            <div className={cx('content')}>
                                                <header className={cx('head')}>
                                                    <Link to="/autumn-wind-rain" className={cx('head-link')}>
                                                        <div className={cx('text')}>autumn-wind-rain</div>
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

                                                <Link to="/autumn-wind-rain" className={cx('avt-link')}>
                                                    <div className={cx('img-wrapper')}>
                                                        <div
                                                            className={cx('img-round')}
                                                            style={{ backgroundColor: '#340A00' }}
                                                        >
                                                            <Image
                                                                src="https://64.media.tumblr.com/avatar_371394d895a3_64.pnj"
                                                                className={cx('avt')}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div
                                                    className={cx('title')}
                                                    style={{ '--blog-title-color': '#945201' }}
                                                >
                                                    <h2
                                                        className={cx('heading')}
                                                        style={{
                                                            fontFamily: '1785 GLC Baskerville',
                                                            fontWeight: 'normal',
                                                        }}
                                                    >
                                                        Autumn Wind & Rain
                                                    </h2>
                                                    <p className={cx('des')}>
                                                        Adding a little Autumn to your day, one leaf, rain drop, and
                                                        cozy sweater at a time🍁🍂
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={cx('recent-posts')}>
                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653973503606785"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/e7c6e21d24745a076c0c32b59d2c0f1f/fc62b4f58effe1aa-9d/s540x810/d8270aa0ba3c7ca6fdbad04941095f69c62c27a9.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729653585141432320"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/88f7a0f4fc6e34c590b1f0083927afe2/6e7b9bf3ac82dbf0-b9/s1280x1920/c5d808bbac7279760fb548e8ddfa883499eb6104.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>

                                                <Link
                                                    to="https://www.tumblr.com/autumn-wind-rain/729646287919759360"
                                                    className={cx('post-link')}
                                                >
                                                    <Image
                                                        src="https://64.media.tumblr.com/b3238a8db301110eacc120a3e3b226d8/d07a8a887b794a39-2b/s540x810/ff141c56ea9b3754e2b453e5b49e7e1db593d25b.jpg"
                                                        className={cx('post-img')}
                                                    />
                                                </Link>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            )}
                        >
                            <Link ref={link4Ref} to="/autumn-wind-rain" className={cx('blog-link')}>
                                <Image
                                    className={cx('img')}
                                    src="https://64.media.tumblr.com/avatar_371394d895a3_64.pnj"
                                />
                                <div className={cx('blog-title')}>
                                    <p className={cx('blog-name')}>autumn-wind-rain</p>
                                    <p className={cx('blog-des')}>Autumn Wind & Rain</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    )}

                    <button className={cx('follow-btn')}>Follow</button>

                    <button className={cx('clear-btn')}>
                        <ClearIcon />
                    </button>
                </li>
            </ul>

            <Link to="/explore/today" className={cx('last-link')}>
                Explore all of Tumblr
            </Link>
        </div>
    );
}

export default Checkout;
