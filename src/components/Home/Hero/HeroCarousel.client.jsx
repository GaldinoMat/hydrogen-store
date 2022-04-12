import React, {useEffect, useState} from 'react';
import Socials from './Socials';
import HeroComponent from './HeroComponent';
import {Carousel, CarouselItem} from './Carousel';

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
    <div
      className="xl:h-[660px] sm:h-fit bg-no-repeat bg-center"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        {seoHeroComponents.map((seoHeroComponent) => (
          <CarouselItem key={seoHeroComponent.heroHeadingName}>
            <HeroComponent
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
  );
}
