import styles from '../styles/Links.module.css'

export default function Links() {
  return (
    <ul>
      <li>
        <a
          className="courrier-international"
          href="https://www.courrierinternational.com/"
        >
          courrierinternational
        </a>
      </li>
      <li>
        <a className={styles.express} href="https://www.lexpress.fr/">
          lexpress
        </a>
      </li>
      <style jsx>{`
        .courrier-international {
          color: red;
        }
      `}</style>
    </ul>
  )
}
