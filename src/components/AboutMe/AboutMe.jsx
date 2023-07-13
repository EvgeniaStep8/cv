import styles from './AboutMe.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutMe = () => (
	<div className={styles.AboutMe}>
		<SectionTitle title='О себе' />
		<p className={styles.text}> Разработка веб-приложений - это то, что меня по-настоящему увлекает и приносит удовольствие. Я заинтересовалась веб-разработкой после прохождения курсов повышения квалификации и создания небольшого веб-приложения для студентов. Этот опыт показал мне, насколько увлекательна и перспективна веб-разработка, и я решила изменить свою жизнь в этом направлении.</p>
		<p className={styles.text}>Я всегда стараюсь развиваться в области фронтенда. Например, я подписана на Владилена Минина и на многие другие телеграм каналы о веб-разработке, часто в пути слушаю подкаст «Веб-стандраты», стараюсь следить за последними новостями в веб разработке.</p>
		<p className={styles.text}>У меня активная жизненная позиция: в университете была старостой группы, работала вожатой в лагере, сейчас работаю старшим студентом в Яндекс Практикум.</p>
		<p className={styles.text}>В свободное время веду телеграм канал с рецептами, хожу на квизы, участвую в забегах, хожу в тренажерный зал.</p>
	</div>
);

export default AboutMe;