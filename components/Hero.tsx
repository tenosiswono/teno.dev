import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ReactElement, useContext, useRef } from 'react'
import FadeDown from './Animations/FadeDown'
import FadeRight from './Animations/FadeRight'
import FadeUp from './Animations/FadeUp'
import ArrowDown from './icons/ArrowDown'
import { ScrollContext } from './ScrollObserver'
import ThreeCanvas from './ThreeCanvas'

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useContext(ScrollContext)
  let progress = 0
  const { current: elContainer } = ref

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Teno Siswono, I'm a frontend engineer, and I love building things for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
      >
        <AnimatePresence>
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <FadeUp duration={0.6}>
                  <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl xl:text-7xl">
                    Teno Siswono
                  </h1>
                </FadeUp>
                <FadeUp duration={0.6} delay={0.2}>
                  <h2 className="text-2xl font-medium opacity-80 sm:text-4xl md:text-4xl xl:text-5xl">
                    I love to build amazing Webs.
                  </h2>
                </FadeUp>
                <FadeRight duration={0.5} delay={0.8}>
                  <Link href="/about">
                    <span className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-xl">
                      Read more about me &rarr;
                    </span>
                  </Link>
                </FadeRight>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#intro')

                    intro?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <FadeDown duration={1} delay={1.2}>
                    <ArrowDown />
                  </FadeDown>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ y: -1 }}
          animate={{
            y: 0,
            transition: {
              duration: 0,
              delay: 2,
              ease: 'easeInOut',
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 2,
                ease: 'easeInOut',
              },
            }}
          >
            <ThreeCanvas />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
