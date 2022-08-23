import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../public/masahiro-miyagi-xk0YHAn3dzk-unsplash.jpg";
export default function Home() {
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
                placeholder="blur"
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 1 stored locally.
            </figcaption>
          </figure>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="https://i.ibb.co/5MMtXQQ/masahiro-miyagi-t-Hz-Ai-Axe-GBo-unsplash.jpg"
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                blurDataURL=""
                layout="fill"
              />
            </div>
            <figcaption>Image 2 stored remotely.</figcaption>
          </figure>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="https://i.ibb.co/2kWYRTr/masahiro-miyagi-Lfoh1h1azok-unsplash.jpg"
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                blurDataURL=""
                layout="fill"
              />
            </div>
            <figcaption>Image 3 stored remotely.</figcaption>
          </figure>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="https://i.ibb.co/k0q96sB/masahiro-miyagi-WKd-Unta23es-unsplash.jpg"
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                blurDataURL=""
                layout="fill"
              />
            </div>
            <figcaption>Image 4 stored remotely.</figcaption>
          </figure>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="https://i.ibb.co/fCLPwgK/masahiro-miyagi-4-NM1ez-ta-I-unsplash-1.jpg"
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                blurDataURL=""
                layout="fill"
              />
            </div>
            <figcaption>Image 5 stored remotely.</figcaption>
          </figure>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="https://i.ibb.co/QQ4hLRf/masahiro-miyagi-xk0-YHAn3dzk-unsplash-3.jpg"
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                blurDataURL=""
                layout="fill"
              />
            </div>
            <figcaption>Image 6 stored remotely.</figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
