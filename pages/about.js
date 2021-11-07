import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function About() {
  return (
    <div className={styles.container}>
      <Layout title="Welcome">
        <h2>About</h2>
      </Layout>
    </div>
  );
}
