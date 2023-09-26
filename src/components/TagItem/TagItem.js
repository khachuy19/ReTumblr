import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TagItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function TagItem({ data }) {
    return (
        <Link key={data.id} to={`/tagged/${data.tag_name}`} className={cx('wrapper')}>
            <Image className={cx('img')} src={data.image} />
            <span className={cx('info')}>{data.tag_name}</span>
        </Link>
    );
}

export default TagItem;
