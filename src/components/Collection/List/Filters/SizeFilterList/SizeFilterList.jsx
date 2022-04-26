import {flattenConnection} from '@shopify/hydrogen';
import {getSizes} from '../../../../../routes/collections/utils/formatVariants';

export default function SizeFilterList({
  setIsSizesOpen,
  isSizesOpen,
  uniqueSizes,
  products,
  setFilteredProducts,
}) {
  const handleSizeFilter = (sizeName) => {
    const newProducts = products.filter((product) => {
      const variants = flattenConnection(product.variants);

      const sizesArr = getSizes(variants);

      if (sizesArr.find((size) => size === sizeName)) return product;
    });

    setFilteredProducts(newProducts);
  };

  return (
    <div className="mb-[25px]">
      <div>
        <button
          onClick={() => setIsSizesOpen(!isSizesOpen)}
          className="text-base font-bold uppercase text-black"
        >
          Sizes
        </button>
      </div>
      <div
        className={`pt-[10px] pb-[20px] border-b-[1px] border-gray-400 flex flex-wrap ${
          isSizesOpen ? `block opacity-1` : 'hidden opacity-0'
        }`}
      >
        {uniqueSizes.map((size) => (
          <button
            className="min-w-[70px] px-[25px] py-[6px] border-[1px] border-gray-400 mb-[10px] mr-[5px]"
            key={size}
            onClick={(e) => handleSizeFilter(e.target.textContent)}
          >
            <p className="text-[15px] font-bold text-center">{size}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
