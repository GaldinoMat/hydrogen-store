import {Image} from '@shopify/hydrogen/client';

export default function ProductCardTopImage({selectedVariant}) {
  return (
    <>
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
    </>
  );
}
