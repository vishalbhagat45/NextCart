import Image from "next/image";

export default function ProductDetail({ product }) {
  if (!product) return <p className="text-center mt-10">Product Not Found</p>;

  return (
    <div className="flex flex-col items-center">
      {/* ✅ Display Product Image Before Details */}
      <div className="w-64 h-64 overflow-hidden rounded-lg flex justify-center items-center">
        <Image src={product.imageSrc} alt={product.title} width={250} height={250} className="w-full h-full object-contain" />
      </div>

      {/* ✅ Product Details */}
      <h2 className="text-2xl font-bold mt-4">Product #{product.id} - {product.title}</h2>
      <p className="my-2">This is the product description for {product.title}.</p>
      <p className="font-bold">₹{product.price}</p>
      <input type="number" defaultValue={1} min={1} className="border p-1 w-16 my-2" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}

