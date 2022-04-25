import {Link} from '@shopify/hydrogen';

export default function BreadCrumb({collection}) {
  return (
    <div className="py-10 -mx-5 bg-gray-300">
      <div className="px-[15px]">
        <h4 className="font-bold text-black mb-2">{collection.title}</h4>
        <ul className="flex flex-row text-[15px] text-black">
          <li className="after:content-['>'] after:w-1 after:ml-[9px] mr-[9px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-400">
            <Link to={`/collections/${String(collection.title).toLowerCase()}`}>
              {collection.title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
