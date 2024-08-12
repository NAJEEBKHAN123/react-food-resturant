import { useContext } from 'react';
import styles from '../Component/Footer.module.css'
import { userContext } from '../App';

function Footer() {
  const {socialIcons} = useContext(userContext)
  return (
    <footer>
      <div className={styles.maincontainerr}>
        <div className={styles.container}>
          {socialIcons.map((icon) => (
            <div key={icon.id} className={styles.icons}>
              <a href={icon.ProfileUrl}>
                <img src={icon.iconsUrl} alt={icon.name} />
              </a>
            </div>
          ))}
        </div>
        <p>
          All right reserved. Design by <span>Najeeb Khan</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
