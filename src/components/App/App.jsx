import styles from './App.module.css';
import Header from '../Header/Header';
import Info from '../Info/Info';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Info email='stepanova.er97@yandex.ru' telephone='+7 915 130 85 23' telegram='@evgenia_st8' github='https://github.com/EvgeniaStep8' />
    </div>
  );
}

export default App;
