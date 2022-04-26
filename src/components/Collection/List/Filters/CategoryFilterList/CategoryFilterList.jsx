import {flattenConnection} from '@shopify/hydrogen';
import {getTags} from '../../../../../routes/collections/utils/formatVariants';

export default function CategoryFilterList({
  uniqueTags,
  setIsCategoryOpen,
  isCategoryOpen,
  setFilteredProducts,
  products,
}) {
  const handleCategoryFilter = (categoryName) => {
    const newProducts = products.filter((product) => {
      const variants = flattenConnection(product.variants);

      const tagsArr = getTags(variants);

      if (tagsArr.find((tag) => tag === categoryName)) return product;
    });

    setFilteredProducts(newProducts);
  };

  return (
    <div className="mb-[25px]">
      <div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="text-base font-bold uppercase text-black"
        >
          Categories
        </button>
      </div>
      <div
        className={`pt-[10px] pb-[20px] border-b-[1px] border-gray-400 ${
          isCategoryOpen ? `block opacity-1` : 'hidden opacity-0'
        }`}
      >
        {uniqueTags.map((tag) => (
          <div className="my-2" key={tag}>
            <button
              className="capitalize"
              onClick={(e) => handleCategoryFilter(e.target.textContent)}
            >
              {tag}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
