import { motion } from 'framer-motion'
import { mainMenu } from '../../constants/mainMenu'

export const Nav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.nav
      transition={{ duration: 0.5 }}
      initial={{
        y: '-100%',
        opacity: 0
      }}
      animate={{
        y: isOpen ? 0 : '-100%',
        opacity: isOpen ? 1 : 0
      }}
      className="nav-menu"
    >
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {mainMenu.map(item => (
          <li>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Nav
