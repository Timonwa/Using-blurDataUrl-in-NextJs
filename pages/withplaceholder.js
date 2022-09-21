import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imagesrc from "../public/largeImage.jpg";
import images from "../public/images";

const withplaceholder = () => {
  const image = {
    src: imagesrc,
    blurUrl: images[0].blurUrl,
  };

  return (
    <main className={styles.body}>
      <section>
        <figure>
          <div>
            <Image
              src={image.src}
              alt={image.src}
              placeholder="blur"
              blurDataURL={images[0].blurUrl}
              width="900"
              height="500"
            />
          </div>
        </figure>
      </section>
    </main>
  );
};

export default withplaceholder;
