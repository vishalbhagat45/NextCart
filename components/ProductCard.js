import Link from 'next/link';
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg flex flex-col items-center w-full">
      <div className="w-full h-48 overflow-hidden rounded-lg flex justify-center items-center">
       <Image src={product.imageSrc} alt={product.title} width={200} height={200} className="w-full h-full object-contain" />
      </div>
      <h4 className="font-semibold">{product.title}</h4>
      <p>₹{product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">View</button>
      </Link>
    </div>
  );
}
