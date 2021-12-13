import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '../../pages'
import { stripe } from '../../services/stripe'

jest.mock('next/router')
jest.mock('../../services/stripe')

const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

useSession.mockImplementation(() => {
  return [null, false]
})

jest.spyOn(stripe.prices, 'retrieve').mockResolvedValue({
  id: 'fake-price-id',
  unit_amount: 1000,
} as any)

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />)

    expect(screen.getByText('for R$10,00 a month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    jest.spyOn(stripe.prices, 'retrieve').mockResolvedValue({
      unit_amount: 1000,
      id: 'fake-price-id',
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00',
          },
        },
      }),
    )
  })
})
