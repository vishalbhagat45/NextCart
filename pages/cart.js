import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>NextCart/Viewcart</title>
      </Head>
      <Header />
      <main className="flex-1 p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <CartItem />
        <div className="mt-4 text-right font-bold">Total: ₹0.00</div>
      </main>
      <Footer />
    </div>
  );
}
