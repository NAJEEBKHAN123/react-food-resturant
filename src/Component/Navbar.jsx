
import styles from '../Component/Navbar.module.css'
import images from '../assets/logoo.png'
// import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
    <div className={styles.container}>
      <div className={styles.image}>
      <img src={images} alt="" className={styles.logo} />
      <h3>wow Food</h3>
      </div>
      <ul>  
          {/* <li><Link to="/" className='Link'>Home</Link></li>
          <li><Link to="/about" className='Link'>About</Link></li>
          <li><Link to="/foods" className='Link'>Foods</Link></li>
          <li><Link to="/contact" className='Link'>Contact</Link></li> */}
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
