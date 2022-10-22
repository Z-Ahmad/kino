import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-black'>
      <Head>
        <title>Home - Kino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-xl font-large text-white'>Welcome to Kino</div>
    </div>
  )
}

export default Home
