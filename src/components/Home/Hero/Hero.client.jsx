import Button from "../../Button.client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons"
import React, { useState } from "react";

export default function Hero() {
  return (
    <div className="bg-bg-hero bg-no-repeat bg-center sm:h-auto xl:h-[800px] sm:pt-48 xl:pt-56 pb-10">
      <div className="sm:w-full md:max-w-[720px] xl:max-w-[1170px] px-4 md:mx-auto">
        <Carousel>
          <CarouselItem>
            <div className="flex flex-col flex-wrap">
              <div className="xl:flex-half xl:max-w-1/2 md:max-w-more-than-half md:flex-more-than-half">
                <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">Summer Collection</h6>
                <h2 className="text-5xl font-bold text-black mb-8 ">Fall-Winter Collections 2030</h2>
                <p className="text-base mb-9 text-gray-800">A specialist label creating luxury essentials. Ethically crafted with an unwavering
                  commitment to exceptional quality.</p>
                <Button label="Shop Now ->" url="/" className="w-52 py-4 text-sm rounded-none tracking-widest" />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col flex-wrap">
              <div className="xl:flex-half xl:max-w-1/2 md:max-w-more-than-half md:flex-more-than-half">
                <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">Summer Collection</h6>
                <h2 className="text-5xl font-bold text-black mb-8 ">HUE</h2>
                <p className="text-base mb-9 text-gray-800">A specialist label creating luxury essentials. Ethically crafted with an unwavering
                  commitment to exceptional quality.</p>
                <Button label="Shop Now ->" url="/" className="w-52 py-4 text-sm rounded-none tracking-widest" />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
        <Socials />
      </div>
    </div>
  )
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const UpdateIndex = (newIndex) => {
    if (newIndex < 0 || newIndex >= React.Children.count(children)) newIndex = 0

    setActiveIndex(newIndex)
  }

  function returnTranformTranslation() {
    return `translateX(-${(activeIndex * 100)}%)`
  }

  return (
    <div className="overflow-hidden">
      <div className="whitespace-nowrap" style={{ transform: returnTranformTranslation() }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" })
        })}
      </div>
      <div>
        <button onClick={() => UpdateIndex(activeIndex - 1)}>
          Prev
        </button>
        <button onClick={() => UpdateIndex(activeIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

function CarouselItem({ children, width }) {
  return (
    <div className="inline-flex sm:whitespace-normal" style={{ width }}>
      {children}
    </div>
  )
}

function Socials() {
  return (
    <div className="mt-48 flex">
      <Button label={<FontAwesomeIcon icon={faFacebookF} className="w-3 text-gray-900" />} url="/" className="px-0 w-5 h-6 rounded-none bg-transparent" />
      <Button label={<FontAwesomeIcon icon={faTwitter} className="w-5 text-gray-900" />} url="/" className="w-5 h-6 rounded-none bg-transparent" />
      <Button label={<FontAwesomeIcon icon={faPinterest} className="w-5 text-gray-900" />} url="/" className="w-5 h-6 rounded-none bg-transparent" />
      <Button label={<FontAwesomeIcon icon={faInstagram} className="w-5 text-gray-900" />} url="/" className="w-5 h-6 rounded-none bg-transparent" />
    </div>
  )
}