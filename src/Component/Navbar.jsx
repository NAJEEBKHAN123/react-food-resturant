
import styles from '../Component/Navbar.module.css'
import images from '../assets/logoo.png'
// import images from "https://media.istockphoto.com/id/1872009656/photo/meat-roasting-on-grill.webp?b=1&s=170667a&w=0&k=20&c=A4WjJRl9BzQpwDP7pSBtpCPr_Z5xhsljD-6i8ner6n4="

function Navbar() {
  return (
    <nav>
    <div className={styles.container}>
      <div className={styles.image}>
      <img src={images} alt="" className={styles.logo} />
      <h3>wow Food</h3>
      </div>
      <ul>
         <a href=""><li>Home</li></a>
         <a href=""><li>About</li></a>
         <a href=""><li>Foods</li></a>
         <a href=""><li>Contact</li></a>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
