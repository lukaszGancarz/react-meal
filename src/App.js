import Navi from "./components/navi/Navi";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navi />
      <div className={styles.main}>
        <div className={styles.img}>
          <div className={styles.info}>
            <h1>Delicious Food, Delivered to You</h1>
            <div className={styles.text}>
              Choose your favorite meal from out broad selection of avaliable
              meals and enjoy a delicious lunch or dinner at home.
            </div>
            <div className={styles.text}>
              All our meals are cooked with high-quality ingredoemts,
              just-in-time and of course by experienced chefs!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
