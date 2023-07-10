import styles from './Tag.module.css';

const Tag = ({ text }) => (
	<p className={styles.Tag}>{text}</p>
);

export default Tag;