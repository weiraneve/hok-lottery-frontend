import Image from 'next/image'
import styles from './page.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a href="/">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/thoughtworks-logo.svg" alt="thoughtworks Logo" width={134} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
