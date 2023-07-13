import EducationItem from '../EducationItem/EducationItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Education.module.css';

const Education = () => (
	<div className={styles.Education}>
		<SectionTitle title='Образование' />
		<EducationItem years='2022 - 2023' place='Курсы Янднекс.Практикум' profession='Веб-разработчик' />
		<EducationItem years='2015 - 2021' place='РХТУ им. Д.И. Менделеева' profession='Инженер' />
	</div>
);

export default Education;