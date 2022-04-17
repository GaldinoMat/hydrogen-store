import React from 'react';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function CarouselArrows({
  childrenNodes,
  activeIndex,
  setActiveIndex,
}) {
  const UpdateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(childrenNodes) - 1;
    } else if (newIndex >= React.Children.count(childrenNodes)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <>
      <button
        className="absolute xl:top-2/4 xl:left-24 h-7 md:left-0 md:top-52 sm:left-6"
        onClick={() => UpdateIndex(activeIndex - 1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-7" />
      </button>
      <button
        className="absolute xl:top-2/4 xl:right-24 h-7 md:right-0 md:top-52 sm:left-48"
        onClick={() => UpdateIndex(activeIndex + 1)}
      >
        <FontAwesomeIcon icon={faArrowRight} className="h-7" />
      </button>
    </>
  );
}
