import React from "react";
import Album from "./Album.jsx";
import styles from "./AlbumContainer.module.css";

const AlbumContainer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        <Album image="/images/album1.jpg" title="Hiperborea" />
        <Album image="/images/album1.jpg" title="Hiperborea" />
        <Album image="/images/album1.jpg" title="Hiperborea" />
        <Album image="/images/album1.jpg" title="Hiperborea" />
        <Album image="/images/album1.jpg" title="Hiperborea" />
        <Album image="/images/album1.jpg" title="Hiperborea" />
      </ul>
    </div>
  );
};

export default AlbumContainer;
