import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import VideoPlayer from '../components/VideoPlayer';

function MyApp() {
  return (
    <>
      <Head>
        <title>
          Finca - Los Hermanos Olivares - Santa Rosa, Bolivar - El Paraiso.
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <VideoPlayer />
      </Layout>
    </>
  );
}

export default MyApp;
