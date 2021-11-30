import React from "react";
import Image from "next/image";
import styles from "./AboutCard.module.css";
import { BsFacebook } from "react-icons/bs";

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
        <BsFacebook size={30}/>
      </div>
    </div>
  );
};

export default AboutCard;
