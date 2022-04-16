import {Suspense} from 'react';
import CollectionElement from './Collection Element/CollectionElement';

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
