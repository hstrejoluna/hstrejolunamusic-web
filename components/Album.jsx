import React from 'react';
import Image from 'next/image'
import styles from './Album.module.css';

const Album = ( props ) => {
  return (
    <div className={styles.album}>
      <div>
        <Image src={props.image} width="220" height="220" alt={props.title} />
      </div>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Album;