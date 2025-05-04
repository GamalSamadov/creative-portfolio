import { PropsWithChildren } from 'react'
import styles from './gradient-bg.module.scss'

export const GradientBg = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.gradientBg} />
      <div className={styles.bg} />
      <div className={styles.container}>{children}</div>
    </>
  )
}
