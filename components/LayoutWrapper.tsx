import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  }
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between backdrop-filter">
        <Header />
        <main className="mb-auto">
          <motion.main
            className="mb-auto"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
          >
            {children}
          </motion.main>
        </main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
