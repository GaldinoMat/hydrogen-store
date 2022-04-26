import {useState} from 'react';
import CategoryFilterList from './CategoryFilterList/CategoryFilterList';
import ColorFilterList from './ColorFilterList/ColorFilterList';
import SizeFilterList from './SizeFilterList/SizeFilterList';

export default function FilterList({uniqueTags, uniqueSizes, uniqueColors}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSizesOpen, setIsSizesOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);

  return (
    <div>
      <CategoryFilterList
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        uniqueTags={uniqueTags}
      />
      <SizeFilterList
        isSizesOpen={isSizesOpen}
        setIsSizesOpen={setIsSizesOpen}
        uniqueSizes={uniqueSizes}
      />
      <ColorFilterList
        isColorsOpen={isColorsOpen}
        setIsColorsOpen={setIsColorsOpen}
        uniqueColors={uniqueColors}
      />
    </div>
  );
}
