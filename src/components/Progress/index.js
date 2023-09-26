import styles from './Progress.module.scss';

function Progress({ wrapperWidth, containerWidth, boxStyle }) {
    return (
        <div className={styles.wrapper} style={{ width: wrapperWidth }}>
            <div className={styles.container} style={{ width: containerWidth }}>
                <div className={styles.box} style={boxStyle}></div>
                <div className={styles.box} style={boxStyle}></div>
                <div className={styles.box} style={boxStyle}></div>
            </div>
        </div>
    );
}

export default Progress;
