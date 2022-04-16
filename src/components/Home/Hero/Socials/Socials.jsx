import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../../../Button.client';

export default function Socials() {
  return (
    <div className="mt-16 pb-8 sm:mx-4 md:mx-10 xl:mx-48 desktop:mx-96 flex">
      <Button
        label={
          <FontAwesomeIcon className="w-4 text-black" icon={faFacebookF} />
        }
        url="/"
        className="px-0 w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={
          <FontAwesomeIcon className="w-4 text-black" icon={faInstagram} />
        }
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={
          <FontAwesomeIcon className="w-4 text-black" icon={faPinterest} />
        }
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
      <Button
        label={<FontAwesomeIcon className="w-4 text-black" icon={faTwitter} />}
        url="/"
        className="w-5 h-6 rounded-none bg-transparent hover:bg-transparent"
      />
    </div>
  );
}
