import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

export const SignInButton = () => {
  const [session] = useSession()

  return session ? (
    <button onClick={() => signOut()} className={styles.signInButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#04d361" className={styles.closeIcon} />
    </button>
  ) : (
    <button onClick={() => signIn('github')} className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign In With Github
    </button>
  )
}
