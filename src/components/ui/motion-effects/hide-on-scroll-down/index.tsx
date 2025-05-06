import { m, useMotionValueEvent, useScroll } from 'motion/react'
import { ReactNode, useState } from 'react'

export const HideOnScrollDown = ({ children }: { children: ReactNode }) => {
  const [isHidden, setIsHidden] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    if (previous && latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <m.div
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="hidden"
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {children}
    </m.div>
  )
}
