import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children, titulo }) => {
  return (
    <>
      <Head>
        <title>HS TREJO LUNA MUSIC {titulo ? titulo : "Cargando..."}</title>
      </Head>
      <meta name="description" content="GNU/Linuxwave music for your ears" />
      <link rel="icon" href="/favicon.ico" />

      <main className={styles.main}>
        <Navbar />
        <h2>Hello</h2>
        {children}
      </main>
    </>
  );
};

export default Layout;
