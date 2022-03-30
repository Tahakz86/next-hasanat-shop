import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://shop.ihasanat.ru">iHasanat Shop!</a>
        </h1>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
              <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p>{ product.description }</p>
                <p>${ product.price }</p>
                <p>
                <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
                >
                  Add to Cart
                </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://shop.ihasanat.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/hasanatlogo.png" alt="Hasanat Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css" />
      <script async src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"></script>
      <div id="snipcart" data-config-modal-style="side" data-api-key="ODIyNWZiYWUtMWYxMS00ZjM0LThmMmYtYzY5ZDI3ODg4ZDhhNjM3ODQwMDc0NzY3MDA0Njkw" hidden></div>
    </div>
  )
}
