import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Skills.module.css';

const Skills = ({ skills }) => (
	<div className={styles.Skills}>
		<SectionTitle title='Навыки' />
		<ul className={styles.list}>
			{skills?.map((skill) => (
				<li key={skill.id} className={styles.skill}>{skill.skill}</li>
			))}
		</ul>
	</div>
);

export default Skills;