import Button from '../../Button.client';

export default function HeroComponent({
  collectionHeroName,
  heroHeadingName,
  heroSEOText,
  textLink,
}) {
  return (
    <div className="w-full h-full sm:pt-16 xl:pt-40 pb-10">
      <div className="sm:w-full md:max-w-[720px] xl:max-w-[1170px] px-4 md:mx-auto">
        <div className="flex flex-col flex-wrap">
          <div className="xl:flex-half xl:max-w-1/2 md:max-w-more-than-half md:flex-more-than-half">
            <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">
              {collectionHeroName}
            </h6>
            <h2 className="text-5xl font-bold text-black mb-8 ">
              {heroHeadingName}
            </h2>
            <p className="text-base mb-9 text-gray-800">{heroSEOText}</p>
            <Button
              label="Shop Now ->"
              url={textLink}
              className="w-52 py-4 text-sm rounded-none tracking-widest"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
