import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Album from "../components/Album";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Welcome">
        <Album image="/images/album1.jpg" title="Hiperborea"/>
      </Layout>
    </div>
  );
}
