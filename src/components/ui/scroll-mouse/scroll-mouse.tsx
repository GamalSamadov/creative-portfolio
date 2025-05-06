import { HideOnScroll } from '../motion-effects/hide-on-scroll'
import styles from './scroll-mouse.module.scss'

export const ScrollMouse = () => {
  return (
    <HideOnScroll>
      <div className={styles.mouse}>
        <div className={styles.scroll}></div>
      </div>
    </HideOnScroll>
  )
}
