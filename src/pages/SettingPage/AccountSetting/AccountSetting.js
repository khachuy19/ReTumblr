import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './AccountSetting.module.scss';
import { CaretIcon, PencilIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountSetting() {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    const label1Ref = useRef();
    const label2Ref = useRef();
    const span1Ref = useRef();
    const span2Ref = useRef();
    const slDRef = useRef();
    const slMRef = useRef();
    const slYRef = useRef();

    // useEffect(() => {
    //     label1Ref.current.addEventListener('click', (e) => {
    //         console.log(label1Ref.current);
    //         label1Ref.current.lastChild.classList.toggle(cx('active'));
    //     });
    // }, [label1Ref]);

    const RenderDay = useCallback(() => {
        const d = [];
        for (let i = 1; i <= 31; i++) {
            d.push(
                <option key={i} value={i}>
                    {i}
                </option>,
            );
        }
        return d;
    }, []);

    const RenderYear = useCallback(() => {
        const y = [];
        for (let i = 2010; i >= 1990; i--) {
            y.push(
                <option key={i} value={i}>
                    {i}
                </option>,
            );
        }
        return y;
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Account Setting Page</h2>
            <ul className={cx('settings')}>
                <li className={cx('setting-item')}>
                    <span className={cx('name')}>Email</span>
                    <div className={cx('info-cont')}>
                        <span className={cx('info')}>huykhacdzz@gmail.com</span>
                        <PencilIcon />
                    </div>
                </li>

                <li className={cx('setting-item')}>
                    <span className={cx('name')}>Password</span>
                    <div className={cx('info-cont')}>
                        <span className={cx('info')}>••••••••••</span>
                        <PencilIcon />
                    </div>
                </li>

                <li className={cx('setting-item')}>
                    <span className={cx('name')}>Security</span>

                    <div className={cx('info-block')}>
                        <div className={cx('info-container')}>
                            <div className={cx('toggle-btn')}>
                                <label className={cx('label1')} ref={label1Ref}>
                                    <input type="checkbox" id={cx('email-me-account-activity-toggle-toggle')} />
                                    <span
                                        ref={span2Ref}
                                        className={cx('btn-bg')}
                                        onClick={(e) => {
                                            e.target.classList.toggle(cx('active'));
                                        }}
                                    ></span>
                                </label>
                            </div>

                            <div className={cx('content')}>
                                <label
                                    className={cx('label2')}
                                    htmlFor="email-me-account-activity-toggle-toggle"
                                    onClick={() => {
                                        span2Ref.current.classList.toggle(cx('active'));
                                    }}
                                >
                                    Email me about account activity.
                                </label>
                                <p>
                                    You will receive an email when someone logs into your account or a new app is
                                    authorized.
                                </p>
                            </div>
                        </div>

                        <div className={cx('info-container')}>
                            <div className={cx('toggle-btn')}>
                                <label className={cx('label1')}>
                                    <input type="checkbox" id={cx('two-factor-auth-toggle-toggle')} />
                                    <span
                                        ref={span1Ref}
                                        className={cx('btn-bg')}
                                        onClick={(e) => {
                                            e.target.classList.toggle(cx('active'));
                                        }}
                                    ></span>
                                </label>
                            </div>

                            <div className={cx('content')}>
                                <label
                                    ref={label2Ref}
                                    className={cx('label2')}
                                    htmlFor="two-factor-auth-toggle-toggle"
                                    onClick={() => {
                                        span1Ref.current.classList.toggle(cx('active'));
                                    }}
                                >
                                    Two-factor authentication
                                </label>
                                <p>
                                    Enabling two-factor authentication makes it extra difficult for anyone other than
                                    you to access your account.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={cx('setting-item')}>
                    <span className={cx('name')}>Language</span>
                    <span className={cx('info')}>
                        <select className={cx('language-select')}>
                            <option value="en_US">English</option>
                            <option value="de_DE">Deutsch</option>
                            <option value="fr_FR">Français</option>
                            <option value="it_IT">Italiano</option>
                            <option value="vn_VN">Vietnamese</option>
                        </select>

                        <CaretIcon className={cx('caret-icon')} />
                    </span>
                </li>

                <li className={cx('setting-item')}>
                    <span className={cx('name')}>Birthday</span>
                    <div className={cx('info')}>
                        <div className={cx('info-container')}>
                            <div className={cx('top')}>
                                <div className={cx('month-p')}>
                                    <select
                                        ref={slMRef}
                                        className={cx('m-select')}
                                        defaultValue={'default'}
                                        onChange={(e) => {
                                            setMonth(e.target.value);
                                        }}
                                    >
                                        <option value="default" disabled>
                                            Month
                                        </option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>

                                    <CaretIcon className={cx('caret-icon')} />
                                </div>

                                <div className={cx('day-p')} onChange={(e) => setDay(e.target.value)}>
                                    <select ref={slDRef} className={cx('d-select')} defaultValue={'default'}>
                                        <option value="default" disabled>
                                            Day
                                        </option>
                                        <RenderDay />
                                    </select>

                                    <CaretIcon className={cx('caret-icon')} />
                                </div>

                                <div className={cx('year-p')}>
                                    <select
                                        ref={slYRef}
                                        className={cx('y-select')}
                                        defaultValue={'default'}
                                        onChange={(e) => {
                                            setYear(e.target.value);
                                            console.log(year);
                                        }}
                                    >
                                        <option value="default" disabled>
                                            Year
                                        </option>
                                        <RenderYear />
                                    </select>

                                    <CaretIcon className={cx('caret-icon')} />
                                </div>

                                {day && month && year ? (
                                    <button className={cx('btn', 'active')}>Save</button>
                                ) : (
                                    <button className={cx('btn')}>Save</button>
                                )}
                            </div>

                            <div className={cx('bottom')}>
                                <p>
                                    Some content can only be viewed if you're old enough. We will never share your
                                    birthday with other users.{' '}
                                    <strong>You can't change your birthday after entering it. </strong>
                                    <span>
                                        <a href="https://help.tumblr.com/hc/articles/360003018754">Help</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AccountSetting;
