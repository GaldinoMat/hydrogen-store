import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useState} from 'react';
import LoadMoreProducts from '../LoadMoreProducts.client';
import FilterList from './List/Filters/FilterList.client';
import ProductsList from './List/Products/ProductsList.client';

export default function PLP({
  uniqueColors,
  uniqueSizes,
  uniqueTags,
  products,
  hasNextPage,
  collectionProductCount,
}) {
  const [productsState, setProductsState] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [activeproducts, setActiveProducts] = useState('SALE');

  useEffect(() => {
    setProductsState(products);
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="py-[100px]">
      <div>
        <form action="submit" className="mb-11 relative">
          <input
            type="text"
            placeholder="Search"
            name=""
            id=""
            className="w-full bg-transparent border-[1px] h-[42px] pl-5 border-gray-400 py-[15px] text-gray-400"
          />
          <button type="submit" className="absolute top-1/4 right-1 pr-[15px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <FilterList
        uniqueColors={uniqueColors}
        uniqueSizes={uniqueSizes}
        uniqueTags={uniqueTags}
      />
      <p className="text-sm text-gray-500 mt-5 mb-5">
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p>
      <ProductsList products={filteredproducts} />
      {hasNextPage && (
        <LoadMoreProducts startingCount={collectionProductCount} />
      )}
    </div>
  );
}
