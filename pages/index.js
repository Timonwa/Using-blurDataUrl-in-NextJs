import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../public/masahiro-miyagi-xk0YHAn3dzk-unsplash.jpg";
import getBase64FromUrl from "../utils/getBase64FromUrl";
import images from "../public/images";

export default function Home() {
  console.log(getBase64FromUrl(images[0].src));
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
              Image 1 stored locally without blurred placeholder.
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
              Image 1 stored locally with blurred placeholder.
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
              Image 1 stored remotely withusing our getBase64FromUrl function.
            </figcaption>
          </figure>

          <figure>
            <div className={styles.imageWrapper}>
              <Image src={images[0].src} alt={image.scr} layout="fill" />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 1 stored remotely but without blurred placeholder.
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
                Image {index + 3} stored remotely with blurred image
                placeholder.
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </div>
  );
}
