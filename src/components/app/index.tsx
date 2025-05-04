import { Header } from '@/components/layouts/header'
import { Hero } from '../layouts/hero'
import styles from './app.module.scss'
import { GradientBg } from './gradient-bg'

export const App = () => {
  return (
    <main className={styles.main}>
      <GradientBg>
        <Header />
        <Hero />
      </GradientBg>
    </main>
  )
}
