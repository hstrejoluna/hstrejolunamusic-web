import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AboutCard.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaBandcamp } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/profilepic.jpg"
        width="200"
        height="200"
        alt="profile pic"
      />
      <div className={styles.about}>
        <h2>HS Trejo Luna</h2>
        <p>Cancún, México</p>
        <p>
          Hi I'm HS Trejo Luna and I'm a weirdo who produce Experimental Music
          that I call "GNU/Linuxwave" because its handcrafted in a full GPL
          Software Environment.
        </p>
        <p>My Networks</p>
        <div className={styles.iconsContainer}>
          <Link href="https://www.facebook.com/hstrejoluna" passHref>
            <BsFacebook size={30} className={styles.icon} />
          </Link>
          <Link href="https://www.instagram.com/hstrejoluna">
            <BsInstagram size={30} className={styles.icon}/>
          </Link>
          <Link href="https://hstrejoluna.bandcamp.com/">
            <FaBandcamp size={30} className={styles.icon} />
          </Link>
          <Link href="https://www.linkedin.com/in/hstrejoluna">
            <BsLinkedin size={30} className={styles.icon} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCegsYcscW0nitdH6PQmCq8A">
            <BsYoutube size={30} className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
