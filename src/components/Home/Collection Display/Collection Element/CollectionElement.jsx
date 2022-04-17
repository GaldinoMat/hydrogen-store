import CollectionElementImage from './CollectionElementImage';
import CollectionElementText from './CollectionElementText';

export default function CollectionElement({collection, isAbsolute, order}) {
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
      <CollectionElementImage collection={collection} isAbsolute={isAbsolute} />
      <CollectionElementText collection={collection} isAbsolute={isAbsolute} />
    </div>
  );
}
