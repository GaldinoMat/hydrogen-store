import {useEffect, useState} from 'react';
import {Link, Image} from '@shopify/hydrogen/client';
import {useCartUI} from '../CartUIProvider.client';
import CountrySelector from '../CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation/MobileNavigation.client';
import {HeaderIcons} from './HeaderIcons';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName, menuItems}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (
    <header className="h-[85px] w-screen md:w-full xl:flex xl:items-center xl:justify-center">
      <div
        className={`relative z-20 h-[85px] w-full xl:max-w-[1170px] px-4 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div
          className="h-full flex lg:flex-col place-content-between"
          style={{
            paddingRight: isCartOpen ? scrollbarWidth : 0,
          }}
        >
          <div className="text-center w-full flex sm:justify-between items-center">
            <Link
              className="font-black uppercase text-3xl tracking-widest md:px-[15px]"
              to="/"
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0610/1870/1985/files/header.webp?v=1650223175"
                width={196}
                height={18}
              />
            </Link>
            <CountrySelector />
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
              menuItems={menuItems}
            />
            <Navigation menuItems={menuItems} storeName={storeName} />
            <HeaderIcons
              isMobileNavOpen={isMobileNavOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
