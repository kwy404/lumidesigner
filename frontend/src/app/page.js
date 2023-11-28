import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='center'>
      <div
      className={styles.profileImg}
      />
      </div>
      <h1 className={styles.titleFundo}>LU DESIGNER
      </h1>
      <div className={styles.imgBg}></div>
      <p className={styles.pe}>Em breve...</p>
    </main>
  )
}
