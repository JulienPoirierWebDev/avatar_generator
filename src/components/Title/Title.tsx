import styles from './Title.module.css';
type Props = {
    content: string
}
const Title = ({content} : Props) => {
    return (
        <>
          <h1 className={styles.alpaca_title}>{content}</h1>
        </>
    );
};

export default Title;
