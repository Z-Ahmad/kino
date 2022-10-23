import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {

  const backgroundImageStyle={
    backgroundImage: "url(/images/kino-splash.jpg)",
    backgroundSize: "cover"
  }

  return (
    <div className="relative h-screen bg-zinc-900 text-white">
      <Head>
        <title>Kino</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div 
      className="max-w-screen border-2 text-center grid gap-4 pt-2 pb-40" style={backgroundImageStyle}
      >
        <h1 className="text-6xl mb-20">
          Welcome to Kino
        </h1>

        <div className="text-xl grid gap-2">
          <h2>Keep track of films you've watched.</h2>
          <h2>Save those you want to see.</h2>
          <h2>See what your friends have been watching.</h2>
        </div>


        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>

        <div>
          List of films
        </div>

        <div>
          <p>What can you do with Kino?</p>
          <div>
            <ul>
              <li>Keep track of every film you've watched</li>
              <li>Show your love for your favorite films with a like</li>
              <li>Write and share reviews, let everyone know what you think!</li>
              <li>Rate films on a five-star scale</li>
              <li>Keep track of films you want to watch</li>
              <li>Connect with other film enthusiasts and see what they like!</li>
            </ul>
          </div>
        </div>

    </div>
  );
};

export default Home;
