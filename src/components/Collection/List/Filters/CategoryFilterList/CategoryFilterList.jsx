export default function CategoryFilterList({
  uniqueTags,
  setIsCategoryOpen,
  isCategoryOpen,
}) {
  return (
    <div className="mb-[25px]">
      <div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="text-base font-bold uppercase text-black"
        >
          Categories
        </button>
      </div>
      <div
        className={`pt-[10px] pb-[20px] border-b-[1px] border-gray-400 ${
          isCategoryOpen ? `block opacity-1` : 'hidden opacity-0'
        }`}
      >
        {uniqueTags.map((tag) => (
          <div className="my-2" key={tag}>
            <p className="capitalize">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
