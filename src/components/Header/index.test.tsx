import { render, screen } from '@testing-library/react'
import { Header } from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

useRouter.mockImplementation(() => {
  return {
    asPath: '/',
  }
})

useSession.mockImplementation(() => {
  return [null, false]
})

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})
