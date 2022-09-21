import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imagesrc from "../public/largeImage.jpg";

const withoutplaceholder = () => {
  const image = {
    src: imagesrc,
  };

  return (
    <main className={styles.body}>
      <h1>Using BlurDataUrl in NextJs</h1>
      <section>
        <figure>
          <div>
            <Image src={image.src} alt={image.src} width="900" height="500" />
          </div>
          <figcaption>This image does not have a placeholder.</figcaption>
        </figure>
      </section>
    </main>
  );
};

export default withoutplaceholder;
