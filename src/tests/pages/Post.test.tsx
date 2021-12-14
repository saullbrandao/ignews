import { render, screen } from '@testing-library/react'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'

const getSession = jest.spyOn(require('next-auth/client'), 'getSession')

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

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={post} />)

    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('redirects user if no subscription is found', async () => {
    getSession.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {
        slug: 'test-post',
      },
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        }),
      }),
    )
  })

  it('loads initial data', async () => {
    getSession.mockResolvedValueOnce({
      activeSubscription: 'fake-subscription',
    })

    const response = await getServerSideProps({
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
