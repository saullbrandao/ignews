import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeButton } from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const signIn = jest.spyOn(require('next-auth/client'), 'signIn')

signIn.mockImplementation(() => {
  return jest.fn()
})

describe('SubscribeButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSession.mockImplementation(() => {
      return [null, false]
    })

    render(<SubscribeButton />)

    expect(screen.getByText(/Subscribe now/i)).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    useSession.mockImplementation(() => {
      return [null, false]
    })

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText(/Subscribe now/i)

    userEvent.click(subscribeButton)

    expect(signIn).toHaveBeenCalled()
  })

  it('redirects user to posts when user already has a subscription ', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({ push }))
    useSession.mockImplementation(() => {
      return [
        {
          user: {
            name: 'John Doe',
            email: 'john.doe@example.com',
          },
          activeSubscription: 'fake-active-subscrioption',
          expires: 'fake-expires',
        },
        false,
      ]
    })

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText(/Subscribe now/i)

    userEvent.click(subscribeButton)

    expect(push).toHaveBeenCalledWith('/posts')
  })
})
