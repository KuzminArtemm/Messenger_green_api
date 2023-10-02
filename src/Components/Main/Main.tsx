import styles from './main.module.css';
import ViewFields from '../ViewFields/ViewFields';

const Main = () => {
  return (
    <div className={styles.conteiner}>
      <header className={styles.header}></header>
      <ViewFields />
    </div>
  );
};

export default Main;
