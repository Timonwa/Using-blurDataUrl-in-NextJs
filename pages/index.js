import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../public/masahiro-miyagi-xk0YHAn3dzk-unsplash.jpg";
import images from "../public/images";
import getBase64FromUrl from "../utils/getBase64FromUrl";

export default function Home() {
  // getBase64FromUrl takes in the url of the image and converts it into a base64 Url.
  // but the url is usually larger than the image in size and also takes time to load.
  // so this is not a good usecase for placeholders
  // console.log(getBase64FromUrl(images[0].src));

  return (
    <div className={styles.container}>
      <Head>
        <title>Using BlurDataUrl in NextJs</title>
        <meta name="description" content="Using BlurDataUrl in NextJs" />
      </Head>

      <main className={styles.body}>
        <h1>Using BlurDataUrl in NextJs</h1>
        <section className={styles.section}>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 1 is stored locally and does not use a placeholder.
            </figcaption>
          </figure>

          <figure>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 2 is stored locally and uses a placeholder.
            </figcaption>
          </figure>

          <figure>
            <div className={styles.imageWrapper}>
              <Image src={images[0].src} alt={image.scr} layout="fill" />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 3 is stored remotely but does not use a placeholder.
            </figcaption>
          </figure>

          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={images[0].src}
                alt={images[0].src}
                placeholder="blur"
                blurDataURL={getBase64FromUrl(images[0].src)}
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 4 stored remotely and uses our getBase64FromUrl function.
            </figcaption>
          </figure>

          {images.map((image, index) => (
            <figure key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.src}
                  placeholder="blur"
                  blurDataURL={image.blurUrl}
                  layout="fill"
                />
              </div>
              <figcaption className={styles.imageCaption}>
                Image {index + 4} is stored remotely and uses a placeholder.
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </div>
  );
}
