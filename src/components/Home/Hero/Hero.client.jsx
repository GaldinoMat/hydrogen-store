import Button from '../../Button.client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import React, {useEffect, useState} from 'react';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {backgroundImages} from './HeroSliderData';
import {request, gql} from 'graphql-request';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    setBackgroundImage(backgroundImages[activeIndex]);
  }, [activeIndex]);

  const GetHeroComponentInfo = gql`
    {
      seoHeroSliders {
        id
        seoHeroComponents {
          collectionHeroName
          heroHeadingName
          heroImages {
            id
            size
            url
          }
          textLink
        }
      }
    }
  `;

  request({
    url: 'https://api-sa-east-1.graphcms.com/v2/cl1utsbcyc5mf01xk019rfpx0/master',
    document: GetHeroComponentInfo,
    requestHeaders: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <div
      className="xl:h-[660px] sm:h-fit bg-no-repeat bg-center"
      style={{backgroundImage}}
    >
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <CarouselItem>
          <div className="w-full h-full sm:pt-16 xl:pt-40 pb-10">
            <div className="sm:w-full md:max-w-[720px] xl:max-w-[1170px] px-4 md:mx-auto">
              <div className="flex flex-col flex-wrap">
                <div className="xl:flex-half xl:max-w-1/2 md:max-w-more-than-half md:flex-more-than-half">
                  <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">
                    Summer Collection
                  </h6>
                  <h2 className="text-5xl font-bold text-black mb-8 ">
                    Fall-Winter Collections 2030
                  </h2>
                  <p className="text-base mb-9 text-gray-800">
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Button
                    label="Shop Now ->"
                    url="/"
                    className="w-52 py-4 text-sm rounded-none tracking-widest"
                  />
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-full sm:pt-16 xl:pt-40 pb-10">
            <div className="sm:w-full md:max-w-[720px] xl:max-w-[1170px] px-4 md:mx-auto">
              <div className="flex flex-col flex-wrap">
                <div className="xl:flex-half xl:max-w-1/2 md:max-w-more-than-half md:flex-more-than-half">
                  <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">
                    Summer Collection
                  </h6>
                  <h2 className="text-5xl font-bold text-black mb-8 ">
                    Fall-Winter Collections 2040
                  </h2>
                  <p className="text-base mb-9 text-gray-800">
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Button
                    label="Shop Now ->"
                    url="/"
                    className="w-52 py-4 text-sm rounded-none tracking-widest"
                  />
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
      <Socials />
    </div>
  );
}

function Carousel({children, activeIndex, setActiveIndex}) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-all duration-500"
          style={{transform: `translateX(-${activeIndex * 100}%)`}}
        >
          {React.Children.map(children, (child, _index) => {
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

function CarouselItem({children, width}) {
  return (
    <div className="inline-flex sm:whitespace-normal z-[1]" style={{width}}>
      {children}
    </div>
  );
}

function CarouselArrows({childrenNodes, activeIndex, setActiveIndex}) {
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

function Socials() {
  return (
    <div className="mt-16 pb-8 sm:mx-4 md:mx-10 xl:mx-48 desktop:mx-96 flex">
      <Button
        label={
          <FontAwesomeIcon icon={faFacebookF} className="w-3 text-gray-900" />
        }
        url="/"
        className="px-0 w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={
          <FontAwesomeIcon icon={faTwitter} className="w-5 text-gray-900" />
        }
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={
          <FontAwesomeIcon icon={faPinterest} className="w-5 text-gray-900" />
        }
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={
          <FontAwesomeIcon icon={faInstagram} className="w-5 text-gray-900" />
        }
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
    </div>
  );
}
