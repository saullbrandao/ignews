import { SubscribeButton } from '../../components/SubscribeButton'
import styles from './styles.module.scss'

type HomeProps = {
  product: {
    priceId: string
    amount: string
  }
}

export const HomeTemplate = ({ product }: HomeProps) => {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} a month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
