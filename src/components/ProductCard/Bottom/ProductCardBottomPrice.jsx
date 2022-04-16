import {Suspense} from 'react';
import MoneyCompareAtPrice from '../../MoneyCompareAtPrice.client';
import MoneyPrice from '../../MoneyPrice.client';

export default function ProductCardBottomPrice({selectedVariant}) {
  return (
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
  );
}
