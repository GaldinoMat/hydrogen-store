import ProductCardBottomAddToCart from './ProductCardBottomAddToCart';
import ProductCardBottomPrice from './ProductCardBottomPrice';
import ProductCardBottomRating from './ProductCardBottomRating';

export default function ProductCardBottom({product, selectedVariant}) {
  return (
    <div className="pt-7 relative">
      <ProductCardBottomAddToCart product={product} />
      <ProductCardBottomRating />
      <ProductCardBottomPrice selectedVariant={selectedVariant} />
    </div>
  );
}
