import {useShop, useShopQuery, flattenConnection, Seo} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import LoadMoreProducts from '../../components/LoadMoreProducts.client';
import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
import ProductCardCollection from '../../components/Collection/ProductCard/ProductCardCollection';
import BreadCrumb from '../../components/Collection/BreadCrumb/BreadCrumb';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import FilterList from '../../components/Collection/List/FilterList.client';

export default function Collection({
  country = {isoCode: 'US'},
  collectionProductCount = 24,
  params,
}) {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      language: languageCode,
      numProducts: collectionProductCount,
    },
    preload: true,
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const variants = products
    .map((product) => flattenConnection(product.variants))
    .flat();
  const sizes = variants.map((variant) => variant.title.split(' / ')[0]);
  const colors = variants.map((variant) => variant.title.split(' / ')[1]);
  const tags = variants.map((variant) => variant.product.tags).flat();

  const uniqueTags = [...new Set(tags)];
  const uniqueSizes = [...new Set(sizes)];
  const uniqueColors = [...new Set(colors)];

  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type="collection" data={collection} />
      <BreadCrumb collection={collection} />
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
            <button
              type="submit"
              className="absolute top-1/4 right-1 pr-[15px]"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <div></div>
        </div>
        <FilterList
          uniqueColors={uniqueColors}
          uniqueSizes={uniqueSizes}
          uniqueTags={uniqueTags}
        />
        <p className="text-sm text-gray-500 mt-5 mb-5">
          {products.length} {products.length > 1 ? 'products' : 'product'}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCardCollection product={product} />
            </li>
          ))}
        </ul>
        {hasNextPage && (
          <LoadMoreProducts startingCount={collectionProductCount} />
        )}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $numProducts: Int!
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      title
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: $numProducts) {
        edges {
          node {
            title
            vendor
            handle
            compareAtPriceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  product {
                    tags
                    priceRange {
                      maxVariantPrice {
                        amount
                      }
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                  priceV2 {
                    currencyCode
                    amount
                  }
                  compareAtPriceV2 {
                    currencyCode
                    amount
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;
