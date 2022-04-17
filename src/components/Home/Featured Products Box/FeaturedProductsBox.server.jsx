import {flattenConnection, useShop, useShopQuery} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import FeaturedProducts from './FeaturedProducts.client';

export default function FeaturedProductsBox({country}) {
  const {languageCode} = useShop();

  const {data} = useShopQuery({
    query: SALEPRODUCTS,
    variables: {
      country: country.isoCode,
      language: languageCode,
    },
    preload: true,
  });

  const collection = data ? data.collection : [];
  const featuredProductsCollection = collection.products;
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection)
    : null;

  const collections = featuredProducts
    .map((product) => {
      return flattenConnection(product.variants);
    })
    .flat()
    .map((variant) => {
      return flattenConnection(variant.product.collections);
    })
    .flat()
    .map((element) => {
      return element.title;
    });

  collections.push(collection.title);
  const uniqueCollections = [...new Set(collections)].reverse();

  return (
    <div className="bg-white sm:px-4 xl:max-w-[1170px] mx-auto">
      {featuredProductsCollection ? (
        <FeaturedProducts
          uniqueCollections={uniqueCollections}
          featuredProducts={featuredProducts}
        />
      ) : null}
    </div>
  );
}

const SALEPRODUCTS = gql`
  query indexSaleContent($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collection(handle: "sale") {
      title
      products(first: 10) {
        edges {
          node {
            handle
            id
            title
            variants(first: 1) {
              edges {
                node {
                  product {
                    collections(first: 1) {
                      edges {
                        node {
                          title
                        }
                      }
                    }
                  }
                  id
                  title
                  availableForSale
                  sku
                  image {
                    id
                    url
                    altText
                    width
                    height
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
      }
    }
  }
`;
