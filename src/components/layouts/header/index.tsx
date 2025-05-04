import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.title}>
        <span>Sama</span>dov
      </a>
      <Button>
        <span>Download CV</span> <FileDown size={19} />
      </Button>
    </header>
  )
}
