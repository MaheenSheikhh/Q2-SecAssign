import Link from 'next/link'
import styles from "../services/services.module.css";


const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        This is Service Page
        </h1>
    <ul>
      <li><Link href="/services/graphic-design">This is GraphicDesigning Page</Link></li>
      <li><Link href="/services/video-editing">This is VideoEditing Page</Link></li>
    </ul>
    </div>
  )
}

export default Services