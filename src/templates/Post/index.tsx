import Head from 'next/head'
import styles from './styles.module.scss'

type PostProps = {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export const PostTemplate = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}
