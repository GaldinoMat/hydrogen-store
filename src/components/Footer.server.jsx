import {Image, Link} from '@shopify/hydrogen/client';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo" className="relative text-white">
      <div className="bg-black px-5 pt-[70px]">
        <div className="mx-auto max-w-7xl flex sm:flex-col">
          <div>
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
          <div className="mb-[30px]">
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
          <div className="mb-[30px]">
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
          <div className="py-6 bg-black border-t-[1px] border-gray-400">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Shopify
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
