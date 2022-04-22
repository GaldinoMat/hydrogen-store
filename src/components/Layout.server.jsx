import {
  useShop,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Header from './Header/Header.client';
import Footer from './Footer/Footer.server';
import Cart from './Cart.client';
import {Suspense} from 'react';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, hero}) {
  const {languageCode} = useShop();

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      language: languageCode,
      numCollections: 3,
    },
    cache: CacheHours(),
    preload: '*',
  });

  const {data: menudata} = useShopQuery({
    query: MENUQUERY,
    variables: {
      menuName: 'main-menu',
    },
  });

  const collections = data ? flattenConnection(data.collections) : null;
  const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : '';

  const menuItems = menudata ? menudata.menu.items : [];
  return (
    <LocalizationProvider preload="*">
      <div className="min-h-screen max-w-screen text-gray-700 font-site">
        {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
        <Suspense fallback={null}>
          <Header
            collections={collections}
            storeName={storeName}
            menuItems={menuItems}
          />
          <Cart />
        </Suspense>
        <main role="main" id="mainContent" className="relative">
          {hero}
          <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8 xl:pt-0">
            <Suspense fallback={null}>{children}</Suspense>
          </div>
        </main>
        <Suspense>
          <Footer collection={collections[0]} product={products[0]} />
        </Suspense>
      </div>
    </LocalizationProvider>
  );
}

const QUERY = gql`
  query layoutContent($language: LanguageCode, $numCollections: Int!)
  @inContext(language: $language) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    products(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

const MENUQUERY = gql`
  query menucontext($menuName: String!) {
    menu(handle: $menuName) {
      items {
        id
        tags
        title
        url
      }
    }
  }
`;
