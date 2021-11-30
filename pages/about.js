import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import AboutCard from "../components/AboutCard";

export default function About() {
  return (
    <div className={styles.container}>
      <Layout title="About Me">
        <AboutCard />
      </Layout>
    </div>
  );
}
