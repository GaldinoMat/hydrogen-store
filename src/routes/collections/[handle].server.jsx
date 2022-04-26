import {useShop, useShopQuery, flattenConnection, Seo} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
import BreadCrumb from '../../components/Collection/BreadCrumb/BreadCrumb';
import PLP from '../../components/Collection/PLP.client';

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
      <PLP
        collectionProductCount={collectionProductCount}
        hasNextPage={hasNextPage}
        products={products}
        uniqueColors={uniqueColors}
        uniqueSizes={uniqueSizes}
        uniqueTags={uniqueTags}
      />
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
