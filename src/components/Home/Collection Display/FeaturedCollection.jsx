import {Image, Link} from '@shopify/hydrogen';
import {Suspense} from 'react';

/**
 * A shared component that defines a single featured collection to display on a storefront
 */
export default function FeaturedCollection({collections}) {
  return (
    <Suspense>
      <div className="flex sm:flex-col md:flex-row md:flex-wrap sm:items-center sm:pt-24 sm:pb-16 xl:max-w-[1170px] xl:mx-auto xl:px-4">
        {collections.map((collection) => {
          if (collections.indexOf(collection) % 2 === 0) {
            if (collections.indexOf(collection) === 0) {
              return (
                <CollectionElement
                  key={collection.id}
                  collection={collection}
                  isAbsolute={true}
                  order={'1'}
                />
              );
            } else {
              return (
                <CollectionElement
                  key={collection.id}
                  collection={collection}
                  isAbsolute={true}
                  order={'2'}
                />
              );
            }
          } else {
            return (
              <CollectionElement
                key={collection.id}
                collection={collection}
                isAbsolute={false}
                order={'3'}
              />
            );
          }
        })}
      </div>
    </Suspense>
  );
}

function CollectionElement({collection, isAbsolute, order}) {
  return (
    <div
      className={
        order === '1'
          ? 'sm:px-4 sm:mt-10 flex sm:flex-col md:relative items-center bg-white overflow-hidden md:w-full md:flex xl:flex-[58.333333%] xl:max-w-[58.333333%] xl:ml-[33%]'
          : order === '2'
          ? 'sm:px-4 sm:mt-10 xl:mt-24 flex sm:flex-col md:relative items-center bg-white overflow-hidden md:w-full md:flex xl:flex-[58.333333%] xl:max-w-[58.333333%]'
          : 'sm:px-4 sm:mt-10 flex sm:flex-col md:relative items-center bg-white overflow-hidden md:w-full md:flex xl:flex-[41.666667%] xl:max-w-[41.666667%] xl:-mt-20'
      }
    >
      {isAbsolute ? (
        <Image className="md:float-right md:self-end" data={collection.image} />
      ) : (
        <Image
          className="md:float-right md:self-start"
          data={collection.image}
        />
      )}
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
    </div>
  );
}
