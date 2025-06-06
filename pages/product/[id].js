import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>NextCart/Productview/</title>
      </Head>
      <Header />
      <main className="flex-1 p-4">
        <ProductDetail productId={id} />
      </main>
      <Footer />
    </div>
  );
}
