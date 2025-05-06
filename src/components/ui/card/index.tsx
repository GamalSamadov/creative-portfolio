import styles from './card.module.scss'

export const Card = ({ image }: { image: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt="me" />
      </div>
    </div>
  )
}
