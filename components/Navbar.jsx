import styles from "./Navbar.module.css";

const NavBar = () => {
    return(
        <div className={styles.navbar}>
        <h2>Hello there</h2>
        <nav>
            <ul className={styles.navigation}>
                <li className={styles.sweeptop}>Music</li>
                <li className={styles.sweeptop}>About</li>
                <li className={styles.sweeptop}>Blog</li>
            </ul>
        </nav>
      </div>
    )
 
};


export default NavBar;