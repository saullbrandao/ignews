import Head from 'next/head'
import styles from './styles.module.scss'

export const PostsTemplate = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum obcaecati impedit nemo eligendi totam minima ut
              mollitia culpa harum, non exercitationem explicabo iusto voluptas?
              Modi esse voluptatibus debitis nobis facere magnam deserunt
              recusandae iste, mollitia, aperiam minus error iusto non!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
