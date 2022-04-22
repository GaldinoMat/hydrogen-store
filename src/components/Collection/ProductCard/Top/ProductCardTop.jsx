import ProductCardTopImage from './ProductCardTopImage';
import ProductCardTopWishList from './ProductCardTopWishList';

export default function ProductCardTop({selectedVariant}) {
  return (
    <div className="mb-10 xl:mb-0 xl:h-64 relative flex items-center justify-center overflow-hidden object-cover h-96">
      <ProductCardTopImage selectedVariant={selectedVariant} />
      <ProductCardTopWishList />
    </div>
  );
}
