import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import TagItem from '~/components/TagItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import Progress from '../Progress';

const cx = classNames.bind(styles);

function Search() {
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
        fetchApi();
        setShowResult(true);
    };

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                placement="bottom"
                offset={[0, 5]}
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Tags you follow</h3>
                            {searchResult.map((result, i) => (
                                <TagItem key={i} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <div className={cx('container')}>
                        <SearchIcon className={cx('search-icon')} />
                        <input
                            ref={inputRef}
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

export default Search;
