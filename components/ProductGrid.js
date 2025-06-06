import ProductCard from './ProductCard';

export default function ProductGrid() {
  const mockProducts = [
    { id: 1, title: 'Samsung', price: 19999 },
    { id: 2, title: 'Shoes', price: 1999 },
    { id: 3, title: 'Headphones', price: 2999 },
    { id: 4, title: 'T-shirt', price: 999 },
    { id: 5, title: 'Digital Camera', price: 7999 },
    { id: 6, title: 'IPhone 12', price: 69999 }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
