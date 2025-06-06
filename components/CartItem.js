export default function CartItem() {
  return (
    <div className="border p-4 mb-2 flex justify-between">
      {/* <div>
        <h4 className="font-semibold">Product Title</h4>
        <p>₹999</p>
      </div> */}
      <div>
        <input type="number" value={0} className="border w-16 text-center" />
        {/* <button className="text-red-600 ml-4">Remove</button> */}
      </div>
    </div>
  );
}
