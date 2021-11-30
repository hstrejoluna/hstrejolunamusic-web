import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title ? title : "Cargando..."}</title>
      </Head>
      <meta name="description" content="GNU/Linuxwave music for your ears" />
      <link rel="icon" href="/favicon.ico" />

      <main className={styles.main}>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
