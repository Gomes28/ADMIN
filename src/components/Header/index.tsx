import { useContext  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

//import { AuthContext } from '../../contexts/AuthContext'
import { Button } from '../ui/Button'

export function Header(){

  //const { signOut } = useContext(AuthContext)

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/logowhite.png" width={240} height={75} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <a>Home</a>
          </Link>
          <Link href="/category">
            <a>About</a>
          </Link>
          <Link href="/category">
            <a>Planos</a>
          </Link>
          <Link href="/category">
            <a>Contato</a>
          </Link>

          <Link href="/product">
            <a>Cardapio</a>
          </Link>      
        </nav>

        <Button
            style={{
              padding: 12,
              paddingRight: 24,
              paddingLeft: 24,
            }}
            type="submit"
          >
            Login
          </Button>

      </div>
    </header>
  )
}