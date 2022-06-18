import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image' // delete
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  const { data: session } = useSession()
  const documents = [
    {
      id: 1,
      img: 'https://stape-web.github.io/Img/Google%20Docs/1.png',
      name: 'Blank',
      link: '/new'
    },
    {
      id: 2,
      img: 'https://stape-web.github.io/Img/Google%20Docs/2.png',
      name: 'Resume',
      subtitle: 'Serif',
      link: ''
    },
    {
      id: 3,
      img: 'https://stape-web.github.io/Img/Google%20Docs/3.png',
      name: 'Resume',
      subtitle: 'Coral',
      link: ''
    },
    {
      id: 4,
      img: 'https://stape-web.github.io/Img/Google%20Docs/4.png',
      name: 'Letter',
      subtitle: 'Spearmint',
      link: ''
    },
    {
      id: 5,
      img: 'https://stape-web.github.io/Img/Google%20Docs/5.png',
      name: 'Project proposal',
      subtitle: 'Tropic',
      link: ''
    },
    {
      id: 6,
      img: 'https://stape-web.github.io/Img/Google%20Docs/6.png',
      name: 'Brochure',
      subtitle: 'Geometric',
      link: ''
    },
    {
      id: 7,
      img: 'https://stape-web.github.io/Img/Google%20Docs/7.png',
      name: 'Report',
      subtitle: 'Luxe',
      link: ''
    },
  ]

  return (
    <div className='container'>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {session
        ? <div className='main'>
          <h3 style={{ fontWeight: '300' }}>Start a new document</h3>
          <div className='docs'>
            {documents.map((doc) => (
              <Link href={doc?.link} key={doc.id}>
                <div className='card'>
                  <img src={doc.img} width={150} height={200} className='img' />
                  <h2>{doc.name}</h2>
                  <h3>{doc?.subtitle}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        : <h1>Please sign in</h1>
      }
    </div >
  )
}
