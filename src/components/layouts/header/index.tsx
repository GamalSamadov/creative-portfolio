import { Button } from '@/components/ui/button'
import { ShowOnView } from '@/components/ui/motion-effects/show-on-view'
import { FileDown } from 'lucide-react'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <ShowOnView delayOrder={1}>
        <a className={styles.title}>
          <span className={styles.logo}>J</span>
          <span className={styles.name}>
            <span className={styles.colored}>sama</span> <span>dov</span>
          </span>
        </a>
      </ShowOnView>
      <ShowOnView delayOrder={2}>
        <Button>
          <span>Download CV</span> <FileDown size={19} />
        </Button>
      </ShowOnView>
    </header>
  )
}
