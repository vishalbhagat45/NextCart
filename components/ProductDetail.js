export default function ProductDetail({ productId }) {
  return (
    <div>
      <div className="h-60 bg-gray-200 mb-4" />
      <h2 className="text-2xl font-bold">Product #{productId}</h2>
      <p className="my-2">This is the product description for item {productId}.</p>
      <p className="font-bold">₹999</p>
      <input type="number" defaultValue={1} min={1} className="border p-1 w-16 my-2" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}
