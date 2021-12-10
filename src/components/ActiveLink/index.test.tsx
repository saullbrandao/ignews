import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => {
  return {
    asPath: '/',
  }
})

describe('ActiveLink component', () => {
  it('adds active class if the link is currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>,
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })
})
