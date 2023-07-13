import styles from './EducationItem.module.css';

const EducationItem = ({ years, place, profession }) => (
	<div className={styles.EducationItem} >
		<div className={styles.container}>
		  <p className={styles.years}>{years}</p>
		  <h3 className={styles.place}>{place}</h3>
	  </div>
		<p className={styles.profession}>{profession}</p>
	</div>
);

export default EducationItem;