import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import { PostsTemplate } from '../../templates/Posts'
import { RichText } from 'prismic-reactjs'

type Post = {
  title: string
  excerpt: string
  slug: string
  updatedAt: string
}

type PostsProps = {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return <PostsTemplate posts={posts} />
}

export const getStaticProps: GetStaticProps = async req => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post/title', 'post/content'],
      pageSize: 100,
    },
  )
  RichText

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(content => content.type === 'paragraph')?.text ??
        '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Posts
