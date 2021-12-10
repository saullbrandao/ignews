import { render, screen } from '@testing-library/react'
import { SignInButton } from '.'

const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSession.mockImplementation(() => {
      return [null, false]
    })
    render(<SignInButton />)

    expect(screen.getByText(/Sign in with Github/i)).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    useSession.mockImplementation(() => {
      return [
        {
          user: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            expires: 'fake-expires',
          },
        },
        false,
      ]
    })
    render(<SignInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
