import { m, useInView } from 'motion/react'
import { ReactNode, useRef } from 'react'

export const ShowOnView = ({
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
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-50%', opacity: 0 },
      }}
      initial="hidden"
      animate={!isInView ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'anticipate', delay: (delayOrder / 10) * 2 }}
    >
      {children}
    </m.div>
  )
}
