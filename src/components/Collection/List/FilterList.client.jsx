import {useState} from 'react';

export default function FilterList({uniqueTags, uniqueSizes, uniqueColors}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);

  return (
    <div>
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
      <div className="mb-[25px]">
        <div>
          <button
            onClick={() => setIsSizesOpen(!isSizesOpen)}
            className="text-base font-bold uppercase text-black"
          >
            Sizes
          </button>
        </div>
        <div
          className={`pt-[10px] pb-[20px] border-b-[1px] border-gray-400 flex flex-wrap ${
            isSizesOpen ? `block opacity-1` : 'hidden opacity-0'
          }`}
        >
          {uniqueSizes.map((size) => (
            <button
              className="min-w-[70px] px-[25px] py-[6px] border-[1px] border-gray-400 mb-[10px] mr-[5px]"
              key={size}
            >
              <p className="text-[15px] font-bold text-center">{size}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-[25px]">
        <div>
          <button
            onClick={() => setIsColorsOpen(!isColorsOpen)}
            className="text-base font-bold uppercase text-black"
          >
            Color
          </button>
        </div>
        <div
          className={`pt-[10px] pb-[20px] border-b-[1px] border-gray-400 flex flex-wrap ${
            isColorsOpen ? `block opacity-1` : 'hidden opacity-0'
          }`}
        >
          {uniqueColors.map((color) => (
            <div className="mr-[10px] mb-[10px]" key={color}>
              <button
                className="relative rounded-full w-[30px] h-[30px] after:content-[''] after:w-9 after:h-9 after:absolute after:-top-[3px] after:-left-[3px] after:border-[1px] after:border-gray-400 after:rounded-full"
                style={{backgroundColor: color}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
