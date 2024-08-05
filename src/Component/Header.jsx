import images from '../assets/img.jpg'


import styles from '../Component/Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
    <img src={images} alt="" className={styles.img}  />
    <div  className={styles.headerInput}>
    <input type="text" placeholder='Search Food Here'/>
     <button className={styles.headerbutton}>Search</button> 
     </div>
  </div>
  )
}

export default Header
