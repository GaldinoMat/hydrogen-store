import {flattenConnection} from '@shopify/hydrogen';
import {
  getColors,
  getSizes,
  getTags,
} from '../../../../../routes/collections/utils/formatVariants';

function useFilters(target, products, filterName) {
  return products.filter((product) => {
    const variants = flattenConnection(product.variants);

    let Arr = [];

    switch (filterName) {
      case 'category':
        Arr = getTags(variants);
        break;
      case 'color':
        Arr = getColors(variants);
        break;

      default:
        Arr = getSizes(variants);
        break;
    }
    return Arr.find((tag) => tag === target) && product;
  });
}

export function Filters(target, products, filterName) {
  return useFilters(target, products, filterName);
}
