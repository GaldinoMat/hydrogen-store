export default function ColorFilterList({
  setIsColorsOpen,
  isColorsOpen,
  uniqueColors,
}) {
  return (
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
  );
}
