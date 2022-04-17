import {Link} from '@shopify/hydrogen/client';

export default function CollectionElementText({isAbsolute, collection}) {
  return (
    <>
      {isAbsolute ? (
        <div className="w-full sm:pt-6 lg:py-0 md:absolute md:bottom-1/2 md:left-[25px]">
          <h2 className="text-black text-4xl font-bold sm:mb-3">
            {collection.title}
          </h2>
          <Link
            to={`/collections/${collection.handle}`}
            className="inline-block bg-transparent text-black text-sm font-bold tracking-widest uppercase
          border-b-2 border-black hover:border-red-900"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="w-full sm:pt-6 lg:py-0 md:relative">
          <h2 className="text-black text-4xl font-bold sm:mb-3">
            {collection.title}
          </h2>
          <Link
            to={`/collections/${collection.handle}`}
            className="inline-block bg-transparent text-black text-sm font-bold tracking-widest uppercase
          border-b-2 border-black hover:border-red-900"
          >
            Shop Now
          </Link>
        </div>
      )}
    </>
  );
}
