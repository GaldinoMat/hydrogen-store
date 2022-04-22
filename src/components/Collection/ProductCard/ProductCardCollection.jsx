import {Link} from '@shopify/hydrogen/client';
import ProductCardTop from './Top/ProductCardTop';
import ProductCardBottom from './Bottom/ProductCardBottom';
/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCardCollection({product}) {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className="text-md md:px-4 mb-4 md:mb-10 relative group md:max-w-1/2 md:flex-half xl:max-w-[25%]">
      <Link to={`/products/${product.handle}`}>
        <ProductCardTop selectedVariant={selectedVariant} />
        <ProductCardBottom
          product={product}
          selectedVariant={selectedVariant}
        />
      </Link>
    </div>
  );
}
