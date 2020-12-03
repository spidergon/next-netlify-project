import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/pokemon/pikachu');
  };

  return (
    <>
      <Head>
        <title>My Next.js Site</title>
      </Head>

      <h1>Welcome, Explorer!</h1>

      <Link href="/blog">
        <a>The blog!</a>
      </Link>

      <button style={{ display: 'block', marginTop: '1em' }} onClick={handleClick}>
        Click me!
      </button>
    </>
  );
}

export default Home;
