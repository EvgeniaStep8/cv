import styles from './Header.module.css';
import avatar from '../../images/avatar.jpg';
import Tag from '../Tag/Tag';

const Header = () => (
	<header className={styles.Header} >
		<img src={avatar} alt='аватар' className={styles.avatar} />
		<div className={styles.container} >
			<h1 className={styles.title} >Евгения Степанова</h1>
			<p className={styles.subtitle} >Frontend разработчик</p>
			<div className={styles.tags} >
				<Tag text='26 лет' />
				<Tag text='Москва' />
			</div>
		</div>
	</header>
);

export default Header;