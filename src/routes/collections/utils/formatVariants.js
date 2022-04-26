import {flattenConnection} from '@shopify/hydrogen';

export const getVariants = (products) =>
  products.map((product) => flattenConnection(product.variants)).flat();
export const getSizes = (variants) =>
  variants.map((variant) => variant.title.split(' / ')[0]);
export const getColors = (variants) =>
  variants.map((variant) => variant.title.split(' / ')[1]);
export const getTags = (variants) =>
  variants.map((variant) => variant.product.tags).flat();
