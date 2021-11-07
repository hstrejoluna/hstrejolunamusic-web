import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Layout title="Blog">
        <h2>Blog</h2>
      </Layout>
    </div>
  );
}
