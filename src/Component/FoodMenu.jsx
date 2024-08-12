import { useContext } from 'react';
import '../App.css'
import styles from '../Component/FoodMenu.module.css'
import { userContext } from '../App';
 
function FoodMenu() {
  const {foodData} = useContext(userContext);
  return (
    <main className={styles.secondmain}>
      <h1 className={styles.h1}>Food Menu</h1>
      <div className={styles.mainDiv}>
        {foodData.map((item) => (
          <div key={item.id} className={styles.divcontainer} >
            <img src={item.imgUrl} alt="" className={styles.cardImg} />
            <div className={styles.textDiv}>
              <h2>{item.Name}</h2>
              <h3>${item.Price}</h3>
              <p>{item.desc}</p>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.para}><a href="">See more...</a></p>
    </main>
  );
}

export default FoodMenu;
