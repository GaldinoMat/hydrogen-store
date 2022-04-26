import ProductCardCollection from '../../ProductCard/ProductCardCollection';

export default function ProductsList({products}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCardCollection product={product} />
        </li>
      ))}
    </ul>
  );
}
