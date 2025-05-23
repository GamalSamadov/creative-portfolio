import { Header } from '@/components/layouts/header'
import { domAnimation, LazyMotion } from 'motion/react'
import { About } from '../layouts/about'
import { Hero } from '../layouts/hero'
import styles from './app.module.scss'
import { GradientBg } from './gradient-bg'

export const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <main className={styles.main}>
        <GradientBg>
          <Hero />
          <About />
        </GradientBg>
      </main>
    </LazyMotion>
  )
}
