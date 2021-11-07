import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Welcome">
        <h2>Home</h2>
      </Layout>
      
    </div>
  );
}
