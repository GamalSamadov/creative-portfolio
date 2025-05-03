import { Button } from '@/components/ui/button'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.title}>
        <span>Sama</span>dov
      </a>
      <Button>Download</Button>
    </header>
  )
}
