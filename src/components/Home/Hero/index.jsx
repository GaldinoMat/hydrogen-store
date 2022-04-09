import Button from "../../Button.client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
  return (
    <div className="bg-bg-hero bg-no-repeat bg-center sm:h-auto pt-48 pb-10">
      <div className="w-full p-4">
        <div className="flex flex-col">
          <h6 className="sm:text-sm font-bold uppercase tracking-[2px] text-red-500 mb-7">Summer Collection</h6>
          <h2 className="text-5xl font-bold text-black mb-8 ">Fall-Winter Collections 2030</h2>
          <p className="text-base mb-9 text-gray-800">A specialist label creating luxury essentials. Ethically crafted with an unwavering
            commitment to exceptional quality.</p>
          <Button label="Shop Now ->" url="/" className="w-52 py-4 text-sm rounded-none tracking-widest" />
          <Socials />
        </div>
      </div>
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