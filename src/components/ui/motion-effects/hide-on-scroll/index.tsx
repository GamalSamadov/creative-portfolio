import { m, useMotionValueEvent, useScroll } from 'motion/react'
import { ReactNode, useState } from 'react'

export const HideOnScroll = ({
  children,
  delayOrder,
}: {
  children: ReactNode
  delayOrder: number
}) => {
  const [isHidden, setIsHidden] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <m.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-50%', opacity: 0 },
      }}
      initial="hidden"
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut', delay: (delayOrder / 10) * 2 }}
    >
      {children}
    </m.div>
  )
}
