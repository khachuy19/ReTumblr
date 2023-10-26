import classNames from 'classnames/bind';

import styles from './MessagesPage.module.scss';
import Messages from '~/components/Messages';

const cx = classNames.bind(styles);

function MessagesPage() {
    return (
        <div className={cx('wrapper')}>
            <Messages />
        </div>
    );
}

export default MessagesPage;
