import { Poppins } from 'next/font/google'
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './_components/Layout/Header';
import Overview from './_sections/Overview';
import Footer from './_components/Layout/Footer';

const poppins = Poppins({ weight: ['200', '300', '400', '600'], subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Moonshot Analyzer</title>
        <meta
          content="Moonshot Analyzer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <Overview />
      <Footer />
    </div>
  );
};

export default Home;
