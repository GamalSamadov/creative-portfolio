import { m, useInView } from 'motion/react'
import { ReactNode, useRef } from 'react'

export const ShowOnViewRight = ({
  children,
  delayOrder,
}: {
  children: ReactNode
  delayOrder: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <m.div
      ref={ref}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: '50%', opacity: 0 },
      }}
      initial="hidden"
      animate={!isInView ? 'hidden' : 'visible'}
      transition={{ duration: 0.8, ease: 'circInOut', delay: (delayOrder / 10) * 2 }}
    >
      {children}
    </m.div>
  )
}
