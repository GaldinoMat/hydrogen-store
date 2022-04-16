export default function FeaturedProductsTitles({
  uniqueCollections,
  activeCollections,
  setActiveCollections,
}) {
  const handleSelectCollections = (e) => {
    setActiveCollections(e.target.textContent);
  };

  return (
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
  );
}
