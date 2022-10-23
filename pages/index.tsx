import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-zinc-900'>
      <Head>
        <title>Home - Kino</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className='text-xl font-large text-white'>Welcome to Kino</div>
    </div>
  )
}

export default Home
