import {Suspense, useEffect, useState} from 'react';
import ProductCard from '../../ProductCard';

export default function FeaturedProductsMap({
  featuredProducts,
  uniqueCollections,
}) {
  const [test, setTest] = useState('test');

  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <Suspense>
      <div className="flex items-center sm:justify-between md:justify-center mb-11 text-md font-bold">
        {uniqueCollections.map((uniqueCollection) => (
          <span
            key={uniqueCollection}
            className="text-black text-xl sm:mr-4 md:mr-[88px] sm:last:mr-0 md:last:mr-0"
          >
            {uniqueCollection}
          </span>
        ))}
      </div>
      <Suspense>
        <div className="flex sm:flex-col md:flex-row flex-wrap mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </Suspense>
  );
}
