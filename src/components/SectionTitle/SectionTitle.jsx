import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => (
	<h2 className={styles.title}>{title}</h2>
);

export default SectionTitle;