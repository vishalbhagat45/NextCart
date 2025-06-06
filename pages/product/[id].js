import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import mockProducts from "../../data/products";  // ✅ Ensure correct import

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ✅ Find product object from mockProducts using `parseInt(id, 10)`
  const product = mockProducts.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p className="text-center mt-10">Product Not Found</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>NextCart/Productview/{product.title}</title>
      </Head>
      <Header />
      <main className="flex-1 p-4">
        <ProductDetail product={product} />  {/* ✅ Pass full product object */}
      </main>
      <Footer />
    </div>
  );
}
