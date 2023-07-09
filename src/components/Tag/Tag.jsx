import styles from './Tag.module.css';

const Tag = ({ text }) => (
	<div className={styles.Tag}>{text}</div>
);

export default Tag;