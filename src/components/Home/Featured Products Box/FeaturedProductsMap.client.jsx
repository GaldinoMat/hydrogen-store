import {flattenConnection} from '@shopify/hydrogen';
import {Suspense, useEffect, useState} from 'react';
import ProductCard from '../../ProductCard';
import {motion, AnimatePresence} from 'framer-motion';

export default function FeaturedProductsMap({
  featuredProducts,
  uniqueCollections,
}) {
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [activeCollections, setActiveCollections] = useState('SALE');

  useEffect(() => {
    setCollections(featuredProducts);
    setFilteredCollections(featuredProducts);
  }, [featuredProducts]);

  useEffect(() => {
    if (activeCollections === 'SALE') {
      setFilteredCollections(collections);
      return;
    }

    const filteredProducts = collections.filter((collection) => {
      const filteredVariants = flattenConnection(collection.variants);

      const filteredCollectionsTitle = flattenConnection(
        filteredVariants[0].product.collections,
      );

      return filteredCollectionsTitle[0].title === activeCollections;
    });

    setFilteredCollections(filteredProducts);
  }, [activeCollections, collections]);

  const handleSelectCollections = (e) => {
    setActiveCollections(e.target.textContent);
  };

  return (
    <>
      <div className="flex items-center sm:justify-between md:justify-center mb-11 text-md font-bold">
        {uniqueCollections.map((uniqueCollection) => (
          <button
            onClick={(e) => handleSelectCollections(e)}
            key={uniqueCollection}
            className={
              activeCollections === uniqueCollection
                ? 'text-black text-xl font-bold sm:mr-4 md:mr-[88px] sm:last:mr-0 md:last:mr-0'
                : 'text-gray-400 text-xl font-bold sm:mr-4 md:mr-[88px] sm:last:mr-0 md:last:mr-0'
            }
          >
            {uniqueCollection}
          </button>
        ))}
      </div>
      <Suspense>
        <motion.div
          layout
          animate={{opacity: 1, scale: 1}}
          initial={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0}}
          className="flex sm:flex-col md:flex-row flex-wrap mb-8"
        >
          <AnimatePresence>
            {filteredCollections.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Suspense>
    </>
  );
}
