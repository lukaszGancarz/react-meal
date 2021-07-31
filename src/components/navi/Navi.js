import React from "react";
import styles from "./Navi.module.css";
import cart from "./cart.png";

const Navi = (props) => {
  return (
    <div className={styles.navi}>
      <h1>ReactMeals</h1>
      <button className={styles.cart}>
        <img src={cart} />
        <label>Your Cart</label>
        <div className={styles.couter}>0</div>
      </button>
    </div>
  );
};

export default Navi;
