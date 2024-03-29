import React, {Suspense, useEffect, useState} from 'react';
import Socials from './Socials/Socials';
import HeroSlider from './HeroSlider';
import {Carousel, CarouselItem} from './Carousel/Carousel';
import LoadingFallback from '../../LoadingFallback';

export default function HeroCarousel({seoHeroComponents}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  const urlImages = seoHeroComponents.map(
    (seoHeroComponent) => seoHeroComponent.heroImages.url,
  );

  useEffect(() => {
    setBackgroundImage(urlImages[activeIndex]);
  }, [activeIndex, urlImages]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div
        className="xl:h-[660px] sm:h-fit bg-no-repeat bg-center"
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
          {seoHeroComponents.map((seoHeroComponent) => (
            <CarouselItem key={seoHeroComponent.heroHeadingName}>
              <HeroSlider
                collectionHeroName={seoHeroComponent.collectionHeroName}
                heroHeadingName={seoHeroComponent.heroHeadingName}
                heroSEOText={seoHeroComponent.heroSEOText}
                textLink={seoHeroComponent.textLink}
              />
            </CarouselItem>
          ))}
        </Carousel>
        <Socials />
      </div>
    </Suspense>
  );
}
