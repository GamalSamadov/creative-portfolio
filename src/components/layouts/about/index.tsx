import { Card } from '@/components/ui/card'
import { ShowOnView } from '@/components/ui/motion-effects/show-on-view'
import { ShowOnViewLeft } from '@/components/ui/motion-effects/show-on-view/left'
import { ShowOnViewRight } from '@/components/ui/motion-effects/show-on-view/right'
import me from '@assets/me.jpg'
import styles from './about.module.scss'

export const About = () => {
  return (
    <section className={styles.about}>
      <ShowOnView delayOrder={0}>
        <h2 className={styles.title}>About me</h2>
      </ShowOnView>

      <div className={styles.container}>
        <ShowOnViewLeft delayOrder={1}>
          <Card image={me} />
        </ShowOnViewLeft>

        <ShowOnViewRight delayOrder={2}>
          <p className={styles.text}>
            I’m a software engineer with over 3+ years of experience crafting intuitive,
            high-quality web applications. I thrive on turning design concepts into seamless user
            experiences, optimizing performance to ensure speed and responsiveness, and integrating
            intelligent features that enhance usability. Committed to clean, maintainable code, I
            actively participate in code reviews and mentorship to foster growth within my team.
            Known for proactive communication in remote settings, I bring a collaborative mindset
            and passion for continuous learning to every project, guiding ideas from inception
            through deployment to deliver impactful solutions.
          </p>
        </ShowOnViewRight>
      </div>
    </section>
  )
}
