import {useState} from 'react';
import CategoryFilterList from './CategoryFilterList/CategoryFilterList';
import ColorFilterList from './ColorFilterList/ColorFilterList';
import SizeFilterList from './SizeFilterList/SizeFilterList';

export default function FilterList({
  uniqueTags,
  uniqueSizes,
  uniqueColors,
  setFilteredProducts,
  products,
}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSizesOpen, setIsSizesOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);

  return (
    <div>
      <CategoryFilterList
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        uniqueTags={uniqueTags}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <SizeFilterList
        isSizesOpen={isSizesOpen}
        setIsSizesOpen={setIsSizesOpen}
        uniqueSizes={uniqueSizes}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <ColorFilterList
        isColorsOpen={isColorsOpen}
        setIsColorsOpen={setIsColorsOpen}
        uniqueColors={uniqueColors}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
    </div>
  );
}
