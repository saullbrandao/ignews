import Head from 'next/head'
import styles from './styles.module.scss'

type Post = {
  title: string
  excerpt: string
  slug: string
  updatedAt: string
}

type PostsProps = {
  posts: Post[]
}

export const PostsTemplate = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
