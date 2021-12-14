import { render, screen } from '@testing-library/react'
import Posts, { getStaticProps } from '../../pages/posts'

const getPrismicClient = jest.spyOn(
  require('../../services/prismic'),
  'getPrismicClient',
)

getPrismicClient.mockImplementation(() => {
  return {
    query: jest.fn().mockResolvedValueOnce({
      results: [
        {
          uid: 'test-post',
          data: {
            title: [{ type: 'heading', text: 'Test Post' }],
            content: [{ type: 'paragraph', text: 'Test excerpt' }],
          },
          last_publication_date: '04-01-2020',
        },
      ],
    }),
  }
})

const posts = [
  {
    slug: 'test-post',
    title: 'Test Post',
    excerpt: 'Test excerpt',
    updatedAt: '04-01-2020',
  },
]

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('Test excerpt')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'test-post',
              title: 'Test Post',
              excerpt: 'Test excerpt',
              updatedAt: '01 de abril de 2020',
            },
          ],
        },
      }),
    )
  })
})
