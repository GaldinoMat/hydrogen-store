import React from 'react';
import CarouselArrows from './CarouselArrows';

export function Carousel({children, activeIndex, setActiveIndex}) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-all duration-500"
          style={{transform: `translateX(-${activeIndex * 100}%)`}}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {width: '100%'});
          })}
        </div>
      </div>
      <CarouselArrows
        childrenNodes={children}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

export function CarouselItem({children, width}) {
  return (
    <div className="inline-flex sm:whitespace-normal z-[1]" style={{width}}>
      {children}
    </div>
  );
}
