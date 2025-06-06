import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <div className="h-40 bg-gray-200 mb-2" />
      <h4 className="font-semibold">{product.title}</h4>
      <p>₹{product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">View</button>
      </Link>
    </div>
  );
}
