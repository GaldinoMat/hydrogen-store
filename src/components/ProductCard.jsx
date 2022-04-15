import {Suspense} from 'react';
import {Image, Link} from '@shopify/hydrogen/client';

import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
import MoneyPrice from './MoneyPrice.client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faHeart} from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faArrowsLeftRight,
} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard({product}) {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <motion.div
      layout
      className="text-md md:px-4 mb-4 md:mb-10 relative group md:max-w-1/2 md:flex-half xl:max-w-[25%]"
    >
      <Link to={`/products/${product.handle}`}>
        <div className="mb-10 xl:mb-0 xl:h-64 relative flex items-center justify-center overflow-hidden object-cover h-96">
          {selectedVariant.image ? (
            <Image
              className="bg-white absolute xl:h-64 w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain"
              data={selectedVariant.image}
            />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute tracking-wide top-16 left-0 text-sm font-bold bg-black text-white py-2 px-4">
              Out of stock
            </div>
          )}
          <ul className="absolute top-5 -right-[200px] group-hover:right-3 transition-all duration-700">
            <li className="mb-[10px] p-[10px] bg-white">
              <FontAwesomeIcon className="w-4" icon={faHeart} />
            </li>
            <li className="mb-[10px] p-[10px] bg-white">
              <FontAwesomeIcon className="w-4" icon={faArrowsLeftRight} />
            </li>
            <li className="mb-[10px] p-[10px] bg-white">
              <FontAwesomeIcon className="w-4" icon={faMagnifyingGlass} />
            </li>
          </ul>
        </div>
        <div className="pt-7 relative">
          <h6 className="text-black font-semibold text-base mt-1 group-hover:opacity-0 transition-all duration-300">
            {product.title}
          </h6>
          <button className="absolute text-red-500 font-bold text-base -translate-y-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 transition-all duration-300">
            + Add to cart
          </button>
          {product.vendor && (
            <p className="text-gray-900 font-medium text-sm mb-[5px]">
              {product.vendor}
            </p>
          )}
          <div className="flex mb-[6px]">
            <FontAwesomeIcon className="w-4" icon={faStar} />
            <FontAwesomeIcon className="w-4" icon={faStar} />
            <FontAwesomeIcon className="w-4" icon={faStar} />
            <FontAwesomeIcon className="w-4" icon={faStar} />
            <FontAwesomeIcon className="w-4" icon={faStar} />
          </div>
          <div className="flex ">
            {selectedVariant.compareAtPriceV2 && (
              <Suspense fallback={null}>
                <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
              </Suspense>
            )}
            <Suspense fallback={null}>
              <MoneyPrice money={selectedVariant.priceV2} />
            </Suspense>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
