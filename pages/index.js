import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import AlbumContainer from "../components/AlbumContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Welcome">
        <AlbumContainer/>
      </Layout>
    </div>
  );
}
