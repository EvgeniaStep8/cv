import styles from './Info.module.css';

const Info = ({ email, telephone, telegram, github }) => (
	<div className={styles.Info}>
		<p className={styles.text}>Почта: <span className={styles.accent}>{email}</span></p>
		<p className={styles.text}>Телелефон: <span className={styles.accent}>{telephone}</span></p>
		<p className={styles.text}>Telegram: <span className={styles.accent}>{telegram}</span></p>
		<p className={styles.text}>Github: <span className={styles.accent} href={github} target='blank'>{github}</span></p>
	</div>
)

export default Info;