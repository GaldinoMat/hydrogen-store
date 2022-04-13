import {flattenConnection, useShop, useShopQuery} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import ProductCard from '../../ProductCard';

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
      return product.variants;
    })
    .map((variant) => {
      return variant.edges[0].node.product.collections.edges[0].node.title;
    });

  collections.push(collection.title);
  const uniqueCollections = [...new Set(collections)].reverse();

  return (
    <div className="bg-white sm:px-4 xl:max-w-[1170px] mx-auto">
      {featuredProductsCollection ? (
        <>
          <div className="flex items-center sm:justify-between md:justify-center mb-11 text-md font-bold">
            {uniqueCollections.map((uniqueCollection) => (
              <span
                key={uniqueCollection}
                className="text-black text-xl sm:mr-4 md:mr-[88px] sm:last:mr-0 md:last:mr-0"
              >
                {uniqueCollection}
              </span>
            ))}
          </div>
          <div className="flex sm:flex-col md:flex-row flex-wrap mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
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
