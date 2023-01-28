import styles from "../style.module.css";
import logo from "../images/logo.svg"
import cart_icon from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

const Header = () => {
    return (<div>
<nav>
  <div>
    <img className={styles.logo} src={logo} alt="Logo"/>
  </div>
  
  <ul>
    <li><a href="#">Collections</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className={styles.icons}>
    <a href="#">
        <img className={styles.icon1} src={cart_icon} alt="Shopping Cart"/>
    </a>
    <a href="#">
        <img src={avatar} className={styles.avatar} alt="Avatar"/>
    </a>
  </div>

</nav>
        </div>)
}

export default Header