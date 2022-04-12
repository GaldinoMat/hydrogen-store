import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../../Button.client';

export default function Socials() {
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
