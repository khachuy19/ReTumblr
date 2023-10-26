import { useEffect, useState, useRef, forwardRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import TagItem from '~/components/TagItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import Progress from '../Progress';
import Image from '../Image';

const cx = classNames.bind(styles);

function Search(props, ref) {
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([1, 2, 3]);
    const [searchValue, setSearchValue] = useState('');

    const handleHideResult = () => {
        setShowResult(false);
    };

    const fetchApi = async (svl = '') => {
        setLoading(true);
        const f = fetch(`https://64fd6760596493f7af7e341f.mockapi.io/tags?tag_name=${svl}`);
        const rs = await f.then((res) => res.json());
        if (rs.length === 0) {
            setSearchResult([1, 2, 3]);
        }
        setSearchResult(rs);
        setLoading(false);
    };

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        fetchApi(debouncedValue);
    }, [debouncedValue]);

    const handleChange = (e) => {
        let searchValue = e.target.value;
        if (searchValue === '') {
            fetchApi();
        }
        setSearchValue(searchValue);
    };

    const handleFocus = () => {
        if (searchValue === '') {
            fetchApi();
            setShowResult(true);
        } else {
            fetchApi(searchValue);
            setShowResult(true);
        }
    };

    // if (searchResult.length === 0) {
    //     setSearchResult([]);
    // }

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                placement="bottom"
                offset={[0, 0]}
                interactive
                visible={showResult && searchResult}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className="max-vh">
                            {searchResult.length > 0 ? (
                                <h3 className={cx('search-title')}>Tags you follow</h3>
                            ) : (
                                <h3 className={cx('search-title')}>No result founded</h3>
                            )}

                            {searchResult.length > 0
                                ? searchResult.map((result, i) => <TagItem key={i} data={result} />)
                                : null}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <div className={cx('container')}>
                        <SearchIcon className={cx('search-icon')} />

                        <input
                            ref={ref}
                            value={searchValue}
                            placeholder="Search Tumblr"
                            spellCheck={false}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />

                        {loading && <Progress wrapperWidth="60px" containerWidth="39px" />}
                    </div>
                </div>
            </HeadlessTippy>
            <div className={cx('blur')}></div>
        </div>
    );
}

export default forwardRef(Search);
