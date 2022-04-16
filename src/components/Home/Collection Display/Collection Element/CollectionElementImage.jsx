import {Image} from '@shopify/hydrogen';

export default function CollectionElementImage({isAbsolute, collection}) {
  return (
    <>
      {isAbsolute ? (
        <Image className="md:float-right md:self-end" data={collection.image} />
      ) : (
        <Image
          className="md:float-right md:self-start"
          data={collection.image}
        />
      )}
    </>
  );
}
