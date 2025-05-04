import { Button } from '@/components/ui/button'
import styles from './hero.module.scss'
import { MainTitle } from './main-title'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <MainTitle />
      <Button>View My Work</Button>
    </section>
  )
}
