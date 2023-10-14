import classNames from 'classnames/bind';
import parse from 'html-react-parser';

import Image from '../Image';
import styles from './PostModal.module.scss';
import { ModalCloseIcon } from '../Icons';

const cx = classNames.bind(styles);

function PostModal({ data, handleHideModal }) {
    return (
        <div className={cx('post-modal')}>
            <button className={cx('mdl-cls-btn')} onClick={handleHideModal}>
                <ModalCloseIcon />
            </button>

            <div className={cx('modal-ctn')}>
                {data.type === 'text' ? (
                    data.body && parse(data.body.replace(/\\/g, ''))
                ) : data.type === 'video' ? (
                    parse(data.player[0].embed_code)
                ) : (
                    <Image className={cx('img')} src={data.photos[0].original_size.url} />
                )}
            </div>
        </div>
    );
}

export default PostModal;
