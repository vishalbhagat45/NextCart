import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>NextCart Store</title>
      </Head>
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

