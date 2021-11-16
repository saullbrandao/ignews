import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export const SignInButton = () => {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Saull Brandão
      <FiX color="#04d361" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign In With Github
    </button>
  )
}
