import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head>
        <title>My Blog!</title>
      </Head>

      <h1>Welcome, blog reader!</h1>

      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}

export default Home;
