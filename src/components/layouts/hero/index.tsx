import { Button } from '@/components/ui/button'
import { ShowOnView } from '@/components/ui/motion-effects/show-on-view'
import { ScrollMouse } from '@/components/ui/scroll-mouse/scroll-mouse'
import styles from './hero.module.scss'
import { MainTitle } from './main-title'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <MainTitle />
      <ShowOnView delayOrder={6}>
        <Button>View My Work</Button>
      </ShowOnView>
      <ScrollMouse />
    </section>
  )
}
