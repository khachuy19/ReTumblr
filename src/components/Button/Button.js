import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    {
        to,
        href,
        primary = false,
        outline = false,
        text = false,
        rounded = false,
        active = false,
        disabled = false,
        small = false,
        large = false,
        children,
        className,
        leftIcon,
        rightIcon,
        onClick,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        active,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp ref={ref} className={classes} {...props}>
            {leftIcon && <span className={cx('iconLeft')}>{leftIcon}</span>}
            <div className={cx('container')}>
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('iconRight')}>{rightIcon}</span>}
            </div>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default forwardRef(Button);
