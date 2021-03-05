import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Links from '../components/Links'
import Header from '../components/Header'

const Home: React.FC = () => (
  <div className={styles.container}>
    <Header title="page accueil trop" />

    <main className={styles.main}>
      <Link href="/about">
        <a>go to about</a>
      </Link>
      <Links />
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.logo}
        />
      </a>
    </footer>
  </div>
)
export default Home
