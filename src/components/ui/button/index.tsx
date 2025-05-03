import { PropsWithChildren } from 'react'
import styles from './button.module.scss'

export const Button = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>
}
