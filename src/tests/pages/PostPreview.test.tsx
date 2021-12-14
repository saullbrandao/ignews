import { render, screen } from '@testing-library/react'
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

const getPrismicClient = jest.spyOn(
  require('../../services/prismic'),
  'getPrismicClient',
)

getPrismicClient.mockImplementation(() => {
  return {
    getByUID: jest.fn().mockResolvedValueOnce({
      data: {
        title: [{ type: 'heading', text: 'Test Post' }],
        content: [{ type: 'paragraph', text: 'Test content' }],
      },
      last_publication_date: '04-01-2020',
    }),
  }
})

const post = {
  slug: 'test-post',
  title: 'Test Post',
  content: '<p>Test content</p>',
  updatedAt: '04-01-2020',
}

describe('Post preview page', () => {
  it('renders correctly', () => {
    useSession.mockReturnValueOnce([null, false])

    render(<Post post={post} />)

    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
  })

  it('redirects user to full post when user is subscribed', async () => {
    useSession.mockReturnValueOnce([
      { activeSubscription: 'fake-subscription' },
      false,
    ])

    const push = jest.fn()
    useRouter.mockReturnValueOnce({
      push,
    })

    render(<Post post={post} />)

    expect(push).toHaveBeenCalledWith('/posts/test-post')
  })

  it('loads initial data', async () => {
    const response = await getStaticProps({
      params: {
        slug: 'test-post',
      },
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'test-post',
            title: 'Test Post',
            content: '<p>Test content</p>',
            updatedAt: '01 de abril de 2020',
          },
        },
      }),
    )
  })
})
