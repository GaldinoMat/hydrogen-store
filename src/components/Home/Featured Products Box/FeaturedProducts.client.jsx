import {flattenConnection} from '@shopify/hydrogen';
import {Suspense, useEffect, useState} from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import {motion, AnimatePresence} from 'framer-motion';
import FeaturedProductsTitles from './FeaturedProductsTitles';

export default function FeaturedProducts({
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

  return (
    <>
      <FeaturedProductsTitles
        activeCollections={activeCollections}
        setActiveCollections={setActiveCollections}
        uniqueCollections={uniqueCollections}
      />
      <Suspense>
        <motion.div
          layout
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
