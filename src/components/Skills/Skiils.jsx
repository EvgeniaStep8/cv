import styles from './Skills.module.css';

const Skills = ({ skills }) => (
	<div className={styles.Skills}>
		<h2 className={styles.title}>Навыки</h2>
		<ul className={styles.list}>
			{skills?.map((skill) => (
				<li key={skill.id} className={styles.skill}>{skill.skill}</li>
			))}
		</ul>
	</div>
);

export default Skills;