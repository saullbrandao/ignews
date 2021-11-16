import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'
import { HomeTemplate } from '../templates/Home'

type HomeProps = {
  product: {
    priceId: string
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  return <HomeTemplate product={product} />
}

export const getStaticProps: GetStaticProps = async () => {
  const stripePriceId = 'price_1JwVEkFCY6zKVxIwIEOEeAqs'
  const price = await stripe.prices.retrieve(stripePriceId)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
