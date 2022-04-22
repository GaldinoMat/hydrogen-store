import {Link} from '@shopify/hydrogen';

export default function FooterPages({product, collection}) {
  return (
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
          <Link to={`/collections/${collection?.handle}`}>Collection</Link>
        </li>
        <li className="flex items-center text-sm font-medium hover:text-gray-900">
          <Link to="/404">404</Link>
        </li>
      </ul>
    </div>
  );
}
