import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Image, Link} from '@shopify/hydrogen/client';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo" className="relative text-white">
      <div className="bg-black px-5 pt-[70px]">
        <div className="mx-auto flex sm:flex-col md:flex-row md:flex-wrap md:max-w-[720px] xl:max-w-[1170px]">
          <div className="md:flex-half md:max-w-1/2 md:pr-[30px] xl:flex-a-quarter xl:max-w-a-quarter xl:px-[15px]">
            <div className="mb-[30px]">
              <Link to="/">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0610/1870/1985/files/xfooter-logo.webp?v=1650470632"
                  width={196}
                  height={18}
                />
              </Link>
            </div>
            <div className="mb-[30px]">
              <p className="text-gray-400">
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
            </div>
            <div className="mt-8 mb-[30px]">
              <Image
                src="https://cdn.shopify.com/s/files/1/0610/1870/1985/files/xpayment.webp?v=1650470957"
                width={218}
                height={23}
              />
            </div>
          </div>
          <div className="mb-[30px] md:flex-a-quarter md:max-w-a-quarter md:px-[15px] xl:flex-16 xl:max-w-16 xl:px-[15px] xl:ml-[8%]">
            <h2 className="text-md font-medium uppercase mb-4">Templates</h2>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <Link to="/home">Home</Link>
              </li>
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <Link to={`/products/${product?.handle}`}>Product</Link>
              </li>
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <Link to={`/collections/${collection?.handle}`}>
                  Collection
                </Link>
              </li>
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <Link to="/404">404</Link>
              </li>
            </ul>
          </div>
          <div className="mb-[30px] md:flex-a-quarter md:max-w-a-quarter md:pl-[30px] xl:flex-16 xl:max-w-16 xl:px-[15px]">
            <h2 className="text-md font-medium uppercase mb-4">Docs</h2>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <a href="https://shopify.dev/custom-storefronts/hydrogen">
                  Hydrogen overview
                </a>
              </li>
              <li className="flex items-center text-sm font-medium hover:text-gray-900">
                <a href="https://shopify.dev/custom-storefronts/hydrogen/getting-started">
                  Demo Store template
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[60px] md:flex-half md:max-w-1/2 md:pr-[30px] xl:flex-a-quarter xl:max-w-a-quarter xl:px-[15px] xl:ml-[8%]">
            <h2 className="text-md font-medium uppercase mb-5">Newsletter</h2>
            <div className="mb-[15px] flex items-center text-sm font-medium text-gray-400 hover:text-gray-900">
              <p>
                Be the first to know about new arrivals, look books, sales &
                promos!
              </p>
            </div>
            <form action="submit" className="relative">
              <input
                type="text"
                placeholder="Your email"
                name=""
                id=""
                className="w-full bg-transparent border-b-2 border-white py-[15px] text-gray-400"
              />
              <button type="submit" className="absolute top-1/4 right-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </form>
          </div>
        </div>
        <div className="py-6 md:px-[15px] bg-black border-t-[0.5px] border-gray-400 xl:max-w-[1170px] mx-auto xl:mt-10">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Shopify
          </p>
        </div>
      </div>
    </footer>
  );
}
