 import '../App.css';
 import styles from '../Component/Explore.module.css'
 
 function ExploreFood({ cardData}) {
  return (
   
    <main className={styles.main}>
    <h1>Explore Food</h1>
  <div className={styles.maincontanier}>
  {cardData.map((card)=>(
    <div key={card.id} className={styles.card}>
     <img src={card.imgUrl} alt={card.name} />
     <h3>{card.name}</h3>
    </div>
   ))}
    </div>
  </main>
  )
}

export default ExploreFood;
