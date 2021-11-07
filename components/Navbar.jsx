import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <h2>Hello there</h2>
      <nav className={styles.navigation}>
        <Link href="/">
          <a
            className={
              router.pathname === "/" ? styles.active : styles.sweeptop
            }
          >
            Music
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              router.pathname === "/about" ? styles.active : styles.sweeptop
            }
          >
            About
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={
              router.pathname === "/blog" ? styles.active : styles.sweeptop
            }
          >
            Blog
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
