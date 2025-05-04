import { Header } from '@/components/layouts/header'
import { Hero } from '../layouts/hero'
import styles from './app.module.scss'

export const App = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  )
}
