import { Typewriter } from 'react-simple-typewriter'
import { EmojiWave } from './emoji-wave'
import styles from './main-title.module.scss'

export const MainTitle = () => {
  return (
    <div className={styles.mainTitle}>
      <p>
        <span>
          Hello, world! <EmojiWave />
        </span>
        <span>I'm - </span>
      </p>
      <h2>Jamoliddin Samadov</h2>
      <h1>
        <Typewriter
          words={[
            'Software engineer',
            'Front-end engineer',
            'Full-stack engineer',
            'Web developer',
            'Front-end developer',
            'Full-stack developer',
          ]}
          loop
          cursor
          cursorStyle="_"
          cursorColor="inherit"
          typeSpeed={70}
          deleteSpeed={25}
          delaySpeed={2000}
        />
      </h1>
    </div>
  )
}
