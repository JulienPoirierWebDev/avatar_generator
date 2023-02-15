import styles from './Avatar.module.css';

// @ts-ignore
const Avatar = ({myCanvas}) => {

    return (
        <canvas ref={myCanvas} className={styles.avatar_container} width={3000} height={3000}>
        </canvas>
    );
};

export default Avatar;
